import express from 'express';
import pkg from 'body-parser';
const { json, urlencoded } = pkg;
import cors from 'cors';
import { config } from 'dotenv';
config();

import fccTestingRoutes from './routes/fcctesting.js';
import runner from './test-runner.js';
import userRoutes from './routes/api.js';

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use(cors({ origin: '*' })); //For FCC testing purposes only

app.use(json());
app.use(urlencoded({ extended: true }));

// Index page (static HTML)
app.route('/').get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

//For FCC testing purposes
fccTestingRoutes(app);

// User routes
userRoutes(app);

// 404 Not Found Middleware
// eslint-disable-next-line no-unused-vars
app.use(function (req, res, next) {
    res.status(404).type('text').send('Not Found');
});

const portNum = process.env.PORT || 3000;

// Start our server and tests!
app.listen(portNum, () => {
    console.log(`Listening on port ${portNum}`);
    if (process.env.NODE_ENV === 'test') {
        console.log('Running Tests...');
        setTimeout(function () {
            try {
                runner.run();
                console.log('Ran tests');
            } catch (error) {
                console.log('Tests are not valid:');
                console.error(error);
            }
        }, 1500);
    }
});

export default app; // For testing
