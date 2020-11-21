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
            let hasChippy = false;
            Object.keys(britishOnly).forEach((key) => {
                let replace = new RegExp('\\b' + key + '\\b', "gi");
                if (replace.test(ret)) {
                    //console.log(key);
                    if (key == 'chippy') {
                        hasChippy = true;
                    }
                    if (!(hasChippy && key === 'chip shop')) {
                        ret = ret.replace(replace, britishOnly[key]);
                        highLighted = highLighted.replace(replace, '<span class="highlight">' + britishOnly[key] + '</span>');
                    }
                }

                //ret = ret.replace(replace, britishOnly[key]);
                //highLighted = highLighted.replace(replace, '<span class="highlight">' + britishOnly[key] + '</span>');
            });

            //Opposite of US
            Object.keys(americanToBritishSpelling).forEach((key) => {
                let replace = new RegExp('\\b' + americanToBritishSpelling[key] + '\\b', "gi");
                ret = ret.replace(replace, key);
                highLighted = highLighted.replace(replace, '<span class="highlight">' + key + '</span>');
            });

            //need to sort out titles
            Object.keys(americanToBritishTitles).forEach((key) => {
                let s = this.capitalise(americanToBritishTitles[key]);
                let r = this.capitalise(key);
                /*if (ret.includes(s)) {
                    ret = ret.replace(s, r);
                    highLighted = highLighted.replace(s, '<span class="highlight">' + r + '</span>');
                }*/
                let replace = new RegExp('\\b' + s + '\\b','gi');
                ret = ret.replace(replace, r);
                highLighted = highLighted.replace(replace, '<span class="highlight">' + r + '</span>');
            });

            //Time
            //look for 00.00 replace with 00:00
            let timelooker = /(\b\d{2}\.\d{2})/g;
            if (timelooker.test(ret)) {
                let tlIndex = timelooker.exec(ret);
                let i = timelooker.exec(ret)[1];
                console.log(i);

                let tlIndex2 = timelooker.exec(highLighted);
                let i2 = timelooker.exec(highLighted)[1];
                console.log(i2);
                //Not entirely sure how or why this works, but  I found it through experimenting in the console

                //console.log(timelooker.exec(ret)[1]);
                /*ret = ret.substring(0, tlIndex.index + 2) + '.' + ret.substring(tlIndex.index + 4);

                let tlIndex2 = timelooker.exec(highLighted);
                highLighted = highLighted.substring(0, tlIndex2.index + 2) + '.' + highLighted.substring(tlIndex2.index + 4);*/
                if (i) {
                    let t1 = ret.indexOf(i);
                    ret = ret.substring(0, t1 + 2) + ':' + ret.substring(t1 + 3);
                }
                if (i2) {
                    let t2 = highLighted.indexOf(i2);
                    highLighted = highLighted.substring(0, t2 + 2) + ':' + highLighted.substring(t2 + 3);
                }
            }

            let timelooker2 = /(\b\d{1}\.\d{2})/g;
            if (timelooker2.test(ret)) {
                let tlIndex = timelooker2.exec(ret);
                let i = timelooker2.exec(ret)[1];
                console.log(i);

                let tlIndex2 = timelooker2.exec(highLighted);
                let i2 = timelooker2.exec(highLighted)[1];
                console.log(i2);
                //Not entirely sure how or why this works, but  I found it through experimenting in the console

                //console.log(timelooker.exec(ret)[1]);
                /*ret = ret.substring(0, tlIndex.index + 2) + '.' + ret.substring(tlIndex.index + 4);

                let tlIndex2 = timelooker.exec(highLighted);
                highLighted = highLighted.substring(0, tlIndex2.index + 2) + '.' + highLighted.substring(tlIndex2.index + 4);*/
                if (i) {
                    let t1 = ret.indexOf(i);
                    ret = ret.substring(0, t1 + 1) + ':' + ret.substring(t1 + 2);
                }
                if (i2) {
                    let t2 = highLighted.indexOf(i2);
                    highLighted = highLighted.substring(0, t2 + 1) + ':' + highLighted.substring(t2 + 2);
                }
            }
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

            //need to get the titles to work, done
            Object.keys(americanToBritishTitles).forEach((key) => {
                /*let replace = new RegExp('\\b' + key + '\\b', "gi");
                ret = ret.replace(replace, this.capitalise(americanToBritishTitles[key]));
                highLighted = highLighted.replace(replace, '<span class="highlight">' + this.capitalise(americanToBritishTitles[key]) + '</span>');*/
                let s = this.capitalise(key);
                let r = this.capitalise(americanToBritishTitles[key]);
                while (ret.includes(s)) {
                    ret = ret.replace(s, r);
                    highLighted = highLighted.replace(s, '<span class="highlight">' + r + '</span>');
                }
            });

            //Time
            //look for 00:00 replace with 00.00
            let timelooker = /(\b\d{2}:\d{2})/g;
            if (timelooker.test(ret)) {
                let tlIndex = timelooker.exec(ret);
                let i = timelooker.exec(ret)[1];
                console.log(i);

                let tlIndex2 = timelooker.exec(highLighted);
                let i2 = timelooker.exec(highLighted)[1];
                console.log(i2);
                //Not entirely sure how or why this works, but  I found it through experimenting in the console

                //console.log(timelooker.exec(ret)[1]);
                /*ret = ret.substring(0, tlIndex.index + 2) + '.' + ret.substring(tlIndex.index + 4);

                let tlIndex2 = timelooker.exec(highLighted);
                highLighted = highLighted.substring(0, tlIndex2.index + 2) + '.' + highLighted.substring(tlIndex2.index + 4);*/
                if (i) {
                    let t1 = ret.indexOf(i);
                    ret = ret.substring(0, t1 + 2) + '.' + ret.substring(t1 + 3);
                }
                if (i2) {
                    let t2 = highLighted.indexOf(i2);
                    highLighted = highLighted.substring(0, t2 + 2) + '.' + highLighted.substring(t2 + 3);
                }
            }

            let timelooker2 = /(\b\d{1}\.\d{2})/g;
            if (timelooker2.test(ret)) {
                let tlIndex = timelooker2.exec(ret);
                let i = timelooker2.exec(ret)[1];
                console.log(i);

                let tlIndex2 = timelooker2.exec(highLighted);
                let i2 = timelooker2.exec(highLighted)[1];
                console.log(i2);
                //Not entirely sure how or why this works, but  I found it through experimenting in the console

                //console.log(timelooker.exec(ret)[1]);
                /*ret = ret.substring(0, tlIndex.index + 2) + '.' + ret.substring(tlIndex.index + 4);

                let tlIndex2 = timelooker.exec(highLighted);
                highLighted = highLighted.substring(0, tlIndex2.index + 2) + '.' + highLighted.substring(tlIndex2.index + 4);*/
                if (i) {
                    let t1 = ret.indexOf(i);
                    ret = ret.substring(0, t1 + 2) + ':' + ret.substring(t1 + 3);
                }
                if (i2) {
                    let t2 = highLighted.indexOf(i2);
                    highLighted = highLighted.substring(0, t2 + 2) + ':' + highLighted.substring(t2 + 3);
                }
            }
        }
        return {
            'translated': ret,
            'highlightedTranslated': highLighted
        };
    }
}

module.exports = Translator;