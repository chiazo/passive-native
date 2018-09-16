
var igboWords = {};
let wordMap ={};

/* chrome.storage.sync.set({key: value}, function() {
    console.log('Value is set to ' + value);
  });

  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  }); */

  d3.csv("/Users/chiazo/Desktop/igboWords.csv", function(data) {
     igboWords = data;
  });

 
    for (let i = 0; i < result.length; i++){
       let wordMap = data[i];
    }   
    
  


  // figure out how to update data when user exits browser

  // store words as an array of objects & sync for first time

  // dump words that are already seen in the same session so they wont be seen again until the next session