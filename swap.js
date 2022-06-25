var a =10;
var b =15;
console.log("Before Swap a = " +a, "b = " +b);
var temp=a;
    a=b;
    b=temp;
    
console.log("After Swap a = " +a, "b = " +b);

var x=10; var y=15;
x=x+y; 
y=x-y;
x=x-y;
console.log("After Swap x = " +x, "y = " +y);

var p=10;
var q=15;
[p, q]=[q, p];
console.log("After Swap p = " +p, "q = " +q);