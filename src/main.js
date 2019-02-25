"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WordImpl_1 = require("../src/WordImpl");
var igbowords = __importStar(require("../data/igbowords.json"));
var LearnWords_1 = require("./LearnWords");
exports.wordList = [];
var categoryWordList = [];
for (var i in igbowords) {
    var item = igbowords[i];
    exports.wordList[exports.wordList.length] = new WordImpl_1.WordImpl(item.term, item.translation, item.category);
}
exports.learntWords = [];
for (var i_1 = 0; i_1 < exports.wordList.length; i_1++) {
    exports.learntWords[exports.learntWords.length] = new LearnWords_1.LearnWords(exports.wordList[i_1].getTermName(), exports.wordList[i_1].getTranslation(), exports.wordList[i_1].getCategory());
}
function start() {
    document.getElementById("container").classList.toggle("container-open");
    document.getElementById("start-button").style.display = "none";
}
function selectCategory(categoryElem) {
    categoryWordList = [];
    var categoryName = document.getElementById(categoryElem).innerText;
    document.getElementById("category-title").innerHTML = categoryName;
    for (var i_2 = 0; i_2 < exports.learntWords.length; i_2++) {
        if (exports.learntWords[i_2].getCategory() === categoryName) {
            categoryWordList[categoryWordList.length] = exports.learntWords[i_2];
        }
    }
}
var highestFreq = [];
var highFreq = [];
var medFreq = [];
var lowFreq = [];
var lowestFreq = [];
function sortWords() {
    for (var i_3 = 0; i_3 < exports.learntWords.length; i_3++) {
        if (exports.learntWords[i_3].getPercentCorrect() < .20) {
            highestFreq.push(exports.learntWords[i_3]);
        }
        else if (exports.learntWords[i_3].getPercentCorrect() < .40) {
            highFreq.push(exports.learntWords[i_3]);
        }
        else if (exports.learntWords[i_3].getPercentCorrect() < .60) {
            medFreq.push(exports.learntWords[i_3]);
        }
        else if (exports.learntWords[i_3].getPercentCorrect() < .80) {
            lowFreq.push(exports.learntWords[i_3]);
        }
        else {
            lowestFreq.push(exports.learntWords[i_3]);
        }
    }
}
