/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

'use strict';

import Translator from '../components/translator.js';

export default function (app) {
    const translator = new Translator();

    app.route('/api/translate').post((req, res) => {
        //If any of the fields are missing return error
        if ((!req.body.text || !req.body.locale) && req.body.text !== '') {
            res.json({ error: 'Required field(s) missing' });
        } else {
            //If there is no text
            if (req.body.text === '') {
                res.json({ error: 'No text to translate' });
            } else {
                //Only allow the allowed locales
                if (!translator.allowedLocales().includes(req.body.locale)) {
                    res.json({ error: 'Invalid value for locale field' });
                } else {
                    let t = translator.translate(
                        req.body.text,
                        req.body.locale
                    );
                    let ret = {
                        text: req.body.text,
                        translation:
                            req.body.text === t.translated
                                ? 'Everything looks good to me!'
                                : t.highlightedTranslated,
                    };
                    res.json(ret);
                }
            }
        }
    });
}
