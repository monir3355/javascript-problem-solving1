
function arrySum(numbers){
    var sum=0;
    for(var i=0; i<numbers.length; i++){
        var elements=numbers[i];
        sum+=elements;
    }
    return sum;
}
var num=[20, 30, 40, 50, 60, 70];
var result=arrySum(num);
console.log("Total =", result);
var againResult=arrySum([20,30,50]);
console.log(againResult);
