/*
 *
 *
 *       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

import { assert as _assert, use } from 'chai';
import chaiHttp from 'chai-http';
const assert = _assert;
import server from '../server.js';
import mocha from 'mocha';
const { suite, test } = mocha;

const chaiServer = use(chaiHttp);

// import Translator from '../components/translator.js';

suite('Functional Tests', () => {
    suite('"POST" to /api/translate', () => {
        test('POST with text and locale fields populated', (done) => {
            const text = 'Mangoes are my favorite fruit.';
            const locale = 'american-to-british';
            const output = {
                text: 'Mangoes are my favorite fruit',
                translation:
                    'Mangoes are my <span class="highlight">favourite</span> fruit.',
            };

            //done();
            chaiServer
                .request(server)
                .post('/api/translate')
                .send({
                    locale: locale,
                    text: text,
                })
                .end((err, res) => {
                    assert.equal(
                        res.body.translation,
                        output.translation,
                        'translation ' + res.body.translation
                    );
                    done();
                });
        });

        test('POST with text and invalid locale', (done) => {
            const text = "'Mangoes are my favorite fruit.'";
            const locale = 'russian-to-spanish';
            const error = { error: 'Invalid value for locale field' };

            chaiServer
                .request(server)
                .post('/api/translate')
                .send({
                    locale: locale,
                    text: text,
                })
                .end((err, res) => {
                    assert.equal(
                        res.body.error,
                        error.error,
                        'Post with text and invalid locale'
                    );
                    done();
                });
            //done();
        });

        test('POST with missing text field', (done) => {
            const locale = 'american-to-british';
            const error = { error: 'Required field(s) missing' };

            chaiServer
                .request(server)
                .post('/api/translate')
                .send({
                    locale: locale,
                })
                .end((err, res) => {
                    assert.equal(
                        res.body.error,
                        error.error,
                        'Post with missing text field'
                    );
                    done();
                });
            //done();
        });

        test('POST with missing locale field', (done) => {
            const text = 'freeCodeCamp rocks!';
            const error = { error: 'Required field(s) missing' };

            chaiServer
                .request(server)
                .post('/api/translate')
                .send({
                    text: text,
                })
                .end((err, res) => {
                    assert.equal(
                        res.body.error,
                        error.error,
                        'Post with missing locale field'
                    );
                    done();
                });
        });

        test('POST with missing text', (done) => {
            const text = '';
            const locale = 'american-to-british';
            const error = { error: 'No text to translate' };

            chaiServer
                .request(server)
                .post('/api/translate')
                .send({
                    text: text,
                    locale: locale,
                })
                .end((err, res) => {
                    assert.equal(
                        res.body.error,
                        error.error,
                        'Post with missing text'
                    );
                    done();
                });
        });

        test('POST with text that needs no translation', (done) => {
            const text = 'SaintPeter and nhcarrigan say hello!';
            const locale = 'british-to-american';
            const output = {
                text: 'SaintPeter and nhcarrigan say hello!',
                translation: 'Everything looks good to me!',
            };

            chaiServer
                .request(server)
                .post('/api/translate')
                .send({
                    text: text,
                    locale: locale,
                })
                .end((err, res) => {
                    assert.equal(
                        res.body.translation,
                        output.translation,
                        'translation should be ' + res.body.translation
                    );
                    done();
                });
        });
    });
});
