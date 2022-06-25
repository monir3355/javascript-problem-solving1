var marks=[20, 40, 30, 80, 99, 5, 77];
var max=marks[0];
for(var i=0; i<marks.length; i++){
    var elements=marks[i];
    if(elements>max){
        max=elements;
    }
}
console.log("Big value is =", max);