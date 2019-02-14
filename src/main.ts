import { WordImpl } from '../src/WordImpl';
import { Word } from '../src/Word';
import * as igbowords from '../data/igbowords.json';

let wordList: WordImpl[] = [];

for(var i in igbowords) {
    var item = igbowords[i];
    wordList[wordList.length] = new WordImpl(item.term, item.translation, item.category);
}

console.log(wordList);