/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

import { assert as _assert } from 'chai';
const assert = _assert;

import Translator from '../components/translator.js';
const translator = new Translator();
import mocha from 'mocha';
const { suite, test } = mocha;

suite('Unit Tests', () => {
    suite('American to British English', () => {
        test('Mangoes are my favorite fruit. --> Mangoes are my favourite fruit.', (done) => {
            const input = 'Mangoes are my favorite fruit.';
            const output = 'Mangoes are my favourite fruit.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[1])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('I ate yogurt for breakfast. --> I ate yoghurt for breakfast.', (done) => {
            const input = 'I ate yogurt for breakfast.';
            const output = 'I ate yoghurt for breakfast.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[1])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test("We had a party at my friend's condo. --> We had a party at my friend's flat.", (done) => {
            const input = "We had a party at my friend's condo.";
            const output = "We had a party at my friend's flat.";

            assert.equal(
                translator.translate(input, translator.allowedLocales()[1])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('Can you toss this in the trashcan for me? --> Can you toss this in the bin for me?', (done) => {
            const input = 'Can you toss this in the trashcan for me?';
            const output = 'Can you toss this in the bin for me?';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[1])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('The parking lot was full. --> The car park was full.', (done) => {
            const input = 'The parking lot was full.';
            const output = 'The car park was full.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[1])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('Like a high tech Rube Goldberg machine. --> Like a high tech Heath Robinson device.', (done) => {
            const input = 'Like a high tech Rube Goldberg machine.';
            const output = 'Like a high tech Heath Robinson device.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[1])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('To play hooky means to skip class or work. --> To bunk off means to skip class or work.', (done) => {
            const input = 'To play hooky means to skip class or work.';
            const output = 'To bunk off means to skip class or work.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[1])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('No Mr. Bond, I expect you to die. --> No Mr Bond, I expect you to die. ', (done) => {
            const input = 'No Mr. Bond, I expect you to die.';
            const output = 'No Mr Bond, I expect you to die.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[1])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('Dr. Grosh will see you now. --> Dr Grosh will see you now. ', (done) => {
            const input = 'Dr. Grosh will see you now.';
            const output = 'Dr Grosh will see you now.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[1])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('Lunch is at 12:15 today. --> Lunch is at 12.15 today.', (done) => {
            const input = 'Lunch is at 12:15 today.';
            const output = 'Lunch is at 12.15 today.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[1])
                    .translated,
                output,
                'should translate'
            );
            done();
        });
    });

    suite('British to American English', () => {
        test('We watched the footie match for a while. --> We watched the soccer match for a while.', (done) => {
            const input = 'We watched the footie match for a while.';
            const output = 'We watched the soccer match for a while.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[0])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('Paracetamol takes up to an hour to work. --> Tylenol takes up to an hour to work.', (done) => {
            const input = 'Paracetamol takes up to an hour to work.';
            const output = 'Tylenol takes up to an hour to work.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[0])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('First, caramelise the onions. --> First, caramelize the onions.', (done) => {
            const input = 'First, caramelise the onions.';
            const output = 'First, caramelize the onions.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[0])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('I spent the bank holiday at the funfair. --> I spent the public holiday at the carnival.', (done) => {
            const input = 'I spent the bank holiday at the funfair.';
            const output = 'I spent the public holiday at the carnival.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[0])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('I had a bicky then went to the chippy. --> I had a cookie then went to the fish-and-chip shop.', (done) => {
            const input = 'I had a bicky then went to the chippy.';
            const output =
                'I had a cookie then went to the fish-and-chip shop.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[0])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test("I've just got bits and bobs in my bum bag. --> I've just got odds and ends in my fanny pack.", (done) => {
            const input = "I've just got bits and bobs in my bum bag.";
            const output = "I've just got odds and ends in my fanny pack.";

            assert.equal(
                translator.translate(input, translator.allowedLocales()[0])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('The car boot sale at Boxted Airfield was called off. --> The swap meet at Boxted Airfield was called off.', (done) => {
            const input =
                'The car boot sale at Boxted Airfield was called off.';
            const output = 'The swap meet at Boxted Airfield was called off.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[0])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('Have you met Mrs Kalyani? --> Have you met Mrs. Kalyani?', (done) => {
            const input = 'Have you met Mrs Kalyani?';
            const output = 'Have you met Mrs. Kalyani?';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[0])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test("Prof Joyner of King's College, London. --> Prof. Joyner of King's College, London.", (done) => {
            const input = "Prof Joyner of King's College, London.";
            const output = "Prof. Joyner of King's College, London.";

            assert.equal(
                translator.translate(input, translator.allowedLocales()[0])
                    .translated,
                output,
                'should translate'
            );
            done();
        });

        test('Tea time is usually around 4 or 4.30. --> Tea time is usually around 4 or 4:30.', (done) => {
            const input = 'Tea time is usually around 4 or 4.30 today.';
            const output = 'Tea time is usually around 4 or 4:30 today.';

            assert.equal(
                translator.translate(input, translator.allowedLocales()[0])
                    .translated,
                output,
                'should translate'
            );
            done();
        });
    });

    suite('Highlight Translated Text', () => {
        suite('Highlight American to British English', () => {
            test('Highlight "Mangoes" in the "Mangoes are my favorite fruit." translation', (done) => {
                const input = 'Mangoes are my favorite fruit.';
                const output =
                    'Mangoes are my <span class="highlight">favourite</span> fruit.';

                assert.equal(
                    translator.translate(input, translator.allowedLocales()[1])
                        .highlightedTranslated,
                    output,
                    'should translate'
                );
                done();
            });

            test('Highlight "yoghurt" in the "I ate yogurt for breakfast." translation', (done) => {
                const input = 'I ate yogurt for breakfast.';
                const output =
                    'I ate <span class="highlight">yoghurt</span> for breakfast.';

                assert.equal(
                    translator.translate(input, translator.allowedLocales()[1])
                        .highlightedTranslated,
                    output,
                    'should translate'
                );
                done();
            });
        });

        suite('Highlight British to American English', () => {
            test('Highlight "soccer" in the "We watched the footie match for a while." translation', (done) => {
                const input = 'We watched the footie match for a while.';
                const output =
                    'We watched the <span class="highlight">soccer</span> match for a while.';

                assert.equal(
                    translator.translate(input, translator.allowedLocales()[0])
                        .highlightedTranslated,
                    output,
                    'should translate'
                );
                done();
            });

            test('Highlight "Paracetamol" in the "Paracetamol takes up to an hour to work." translation"', (done) => {
                const input = 'Paracetamol takes up to an hour to work.';
                const output =
                    '<span class="highlight">Tylenol</span> takes up to an hour to work.';

                assert.equal(
                    translator.translate(input, translator.allowedLocales()[0])
                        .highlightedTranslated,
                    output,
                    'should translate'
                );
                done();
            });
        });
    });
});
