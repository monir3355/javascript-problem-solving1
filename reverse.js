
function reverseWord(str){
    var reverse="";
    for(var i=0; i<str.length; i++){
        var char = str[i];
        reverse=char + reverse;
    }
    return reverse;
}
var stringWord="This is world that looks very nice";
var result=reverseWord(stringWord);
console.log(result);