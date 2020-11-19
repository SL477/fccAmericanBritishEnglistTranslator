const americanOnly = require('./american-only.js');
const americanToBritishSpelling = require('./american-to-british-spelling.js');
const americanToBritishTitles = require("./american-to-british-titles.js")
const britishOnly = require('./british-only.js')

class Translator {
    allowedLocales() {
        return ['british-to-american', 'american-to-british'];
    }

    addToString(org, item) {
        if (org === '') {
            return item;
        }
        return org + ' ' + item;
    }

    capitalise(string) {
        return string.substring(0,1).toUpperCase() + string.substring(1);
    }

    translate(input, locale) {
        let ret = input;
        let highLighted = input;
        //let splitString = input.split(' ');

        if (locale === this.allowedLocales()[0]) {
            //british to american
        }
        else {
            //american to british
            /*splitString.forEach(element => {
                if (americanOnly[element]) {
                    ret = this.addToString(ret, americanOnly[element]);
                    highLighted = this.addToString(highLighted, '<span class="highlight">' + americanOnly[element] + '</span>');
                }
                else if (americanToBritishSpelling[element]) {
                    ret = this.addToString(ret, americanToBritishSpelling[element]);
                    highLighted = this.addToString(highLighted, '<span class="highlight">' + americanToBritishSpelling[element] + '</span>');
                }
                else if (americanToBritishTitles[element]) {
                    ret = this.addToString(ret, americanToBritishTitles[element]);
                    highLighted = this.addToString(highLighted, '<span class="highlight">' + americanToBritishTitles[element] + '</span>');
                }
                else {
                    ret = this.addToString(ret, element);
                    highLighted = this.addToString(highLighted, element);
                }
            });*/
            Object.keys(americanOnly).forEach((key) => {
                let replace = new RegExp('\\b' + key + '\\b', "gi");
                ret = ret.replace(replace, americanOnly[key]);
                highLighted = highLighted.replace(replace, '<span class="highlight">' + americanOnly[key] + '</span>');
            });

            Object.keys(americanToBritishSpelling).forEach((key) => {
                let replace = new RegExp('\\b' + key + '\\b', "gi");
                ret = ret.replace(replace, americanToBritishSpelling[key]);
                highLighted = highLighted.replace(replace, '<span class="highlight">' + americanToBritishSpelling[key] + '</span>');
            });

            //need to get the titles to work
            Object.keys(americanToBritishTitles).forEach((key) => {
                let replace = new RegExp('\\b' + key + '\\b', "gi");
                ret = ret.replace(replace, this.capitalise(americanToBritishTitles[key]));
                highLighted = highLighted.replace(replace, '<span class="highlight">' + this.capitalise(americanToBritishTitles[key]) + '</span>');
            });

        }
        return {
            'translated': ret,
            'highlightedTranslated': highLighted
        };
    }
}

module.exports = Translator;