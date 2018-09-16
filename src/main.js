var wordMap = [];
// let mappedWords = []; 
let igboWords = [{
      "igboWord": "bata",
      "englishWord": "to enter",
      "category": "verbs"
    },
    {
      "igboWord": "bee",
      "englishWord": "to cut",
      "category": "verbs"
    },
    {
      "igboWord": "choro ime",
      "englishWord": "to try / attempt",
      "category": "verbs"
    }];

for (var i = 0; i<igboWords.length; i++){
    var obj  = igboWords[i];
    wordMap.push(loadWords(obj.igboWord, obj.englishWord, obj.category));
    console.log(loadWords(obj.igboWord, obj.englishWord, obj.category));
}
    /*Word Class includes word in original language, the English translation, # of times the word has shown
up for the user, and the # of times the user remembered the word correctly. Methods include retrieveing
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
 
 
 
 function loadWords(cvResult){
    for(i = 0; i < cvResult.length; i++){
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
 };

    


  // figure out how to update data when user exits browser

  // store words as an array of objects & sync for first time

  // dump words that are already seen in the same session so they wont be seen again until the next session