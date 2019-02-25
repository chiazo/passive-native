import { WordImpl } from '../src/WordImpl';
import { Word } from '../src/Word';
import * as igbowords from '../data/igbowords.json';
import { LearnWords } from './LearnWords';

let setName = false;
let userName: string;

export let wordList: WordImpl[] = [];
let categoryWordList: LearnWords[] = [];

for(var i in igbowords) {
    var item = igbowords[i];
    wordList[wordList.length] = new WordImpl(item.term, item.translation, item.category);
}

export let learntWords: LearnWords[] = [];

for (let i = 0; i < wordList.length; i++) {
    learntWords[learntWords.length] = new LearnWords(wordList[i].getTermName(), wordList[i].getTranslation(), wordList[i].getCategory());
}

function start() {
   if (!setName) {
      document.getElementById("name-input")!.classList.toggle("name-open");
   }
   document.getElementById("start-button")!.style.display = "none";
}

function saveName(username: string) {
   setName = true;
   userName = (<HTMLInputElement>document.getElementById(username))!.value;
   alert("Welcome " + userName + "!");
   document.getElementById("container")!.classList.toggle("container-open");
   document.getElementById("name-input")!.style.display = "none";
   localStorage.setItem("receivedName", userName);
   userName = localStorage.getItem("receivedName")!;
}

function selectCategory(categoryElem: string) {
   document.getElementById("flashcards")!.classList.toggle("flashcards-open");
   document.getElementById("container")!.style.display = "none";
   categoryWordList = [];
   let categoryName = document.getElementById(categoryElem)!.innerHTML;
   document.getElementById("category-title")!.innerHTML = categoryName;

   for (let i = 0; i < learntWords.length; i++) {
      if (learntWords[i].getCategory() === categoryName) {
         categoryWordList[categoryWordList.length] = learntWords[i];

      }
   }

}

function showWord() {
   let randomWord = categoryWordList[Math.floor(Math.random() * categoryWordList.length)];
   randomWord.getTermName();
   alert("the computer chose: " + randomWord.getTermName());
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

