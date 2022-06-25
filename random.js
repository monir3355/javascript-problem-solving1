var num=5.4999999;
var result1= Math.ceil(num);
var result2= Math.floor(num);
var result3= Math.round(num);

function sixDice(num){
    for(var i=0;i<num;i++){
        var dice=Math.random()*6;
        var diceResult=Math.round(dice);
        console.log(diceResult);
    }
}
sixDice(6);