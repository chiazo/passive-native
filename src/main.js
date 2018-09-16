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

    return word;

}