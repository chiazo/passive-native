import { WordImpl } from '../src/WordImpl';
import { Word } from '../src/Word';
import * as igbowords from '../data/igbowords.json';
import { LearnWords } from './LearnWords';

export let wordList: WordImpl[] = [];

for(var i in igbowords) {
    var item = igbowords[i];
    wordList[wordList.length] = new WordImpl(item.term, item.translation, item.category);
}

export let learntWords: LearnWords[] = [];

for (let i = 0; i < wordList.length; i++) {
    learntWords[learntWords.length] = new LearnWords(wordList[i].term, wordList[i].translation, wordList[i].category);
}

var highestFreq: LearnWords[] = [];
var highFreq: LearnWords[] = [];
var medFreq: LearnWords[] = [];
var lowFreq: LearnWords[] = [];
var lowestFreq: LearnWords[] =[];

function sortWords(){
   for(let i = 0; i < learntWords.length; i++){
       if(learntWords[i].getPercentCorrect() < .20){
           highestFreq.push(learntWords[i]);
       
        } else if(learntWords[i].getPercentCorrect() < .40){
           highFreq.push(learntWords[i]);
       
        } else if(learntWords[i].getPercentCorrect() < .60){
           medFreq.push(learntWords[i]);
       
        } else if(learntWords[i].getPercentCorrect() < .80){
           lowFreq.push(learntWords[i]);
       
        } else {
           lowestFreq.push(learntWords[i]);
       }
   }

   
}

