//hello
//whats

var mostFrequent = [];
var moreFrequent = [];
var lessFrequent = [];
var leastFrequent = [];
var dump = [];


function showWord(category){

    var x = Math.random();
    if(x>=0.65){
        var list = mostFrequent;
    } else if(0.65>x>=0.35){
        var list = moreFrequent;
    } else if(0.35>x>=0.15){
        var list = lessFrequent;
    } else {
        var list = leastFrequent;
    }

    var run = True
    while(run = true){
        var i = Math.floor((Math.random() * list.length()) + 1);
        var word = list[i];
        if(!word.isInList(dump)){
            var run = False;
        } else {
            var run = True;
        }
    }

    document.getElementById("word").innerHTML = word;

}


function isCorrect(question){
    /* code for matching the word to its translation then using if statement to determine if its correct
    then update the 'response' div accordingly (green if correct, red if incorrect) 
    and also update the word object with the attempts and attempts correct */
}

function showAnswer(question){
    /* with question=word, find the answer and change the 'card' div to display the answer */
}

/* create something to update the words, and update the arrays based on the updates of the objects */