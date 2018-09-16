/*Word Class includes word in original language, the English translation, # of times the word has shown
up for the user, and the #of times the user remembered the word correctly. Methods include retrieveing
the number of attempts and calculating the percentage of correct*/

function Word(word, english, category) {
   this.word = word;
   this.english = english;
   this.category = category;
   this.attempts = 0;
   this.correct = 0;
   this.getAttempts = function(){
        return this.attempts;
   }
   this.getPercentage = function(){
        return this.correct/this.attempts;
   }
   this.addAttempt = function(){
       this.attempts++;
   }
   this.addCorrect = function(){
       this.correct++;
   }
}

var wordMap = [];

function loadWords(cvResult){
   for(i = 0; i < cvResult; i++){
       wordMap.push(new Word(cvResult[i][0], cvResult[i][1], cvResult[i][2]));
   }
}

var highestFreq = [];
var highFreq = [];
var medFreq = [];
var lowFreq = [];
var lowestFreq =[];

function sortWords(type){
   for(i = 0; i < wordMap.length; i++){
       if(wordMap[i].getPercentage < 20){
           highestFreq.push(wordMap[i]);
       } else if(wordMap[i].getPercentage < 40){
           highFreq.push(wordMap[i]);
       } else if(wordMap[i].getPercentage < 60){
           medFreq.push(wordMap[i]);
       } else if(wordMap[i].getPercentage < 80){
           lowFreq.push(wordMap[i]);
       } else{
           lowestFreq.push(wordMap[i]);
       }
   }
}

function submit(ans)
