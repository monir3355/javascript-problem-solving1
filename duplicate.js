var names=[4,6,7,8,3,5,7,4];
var spaceArry=[];
for(var i=0; i<names.length; i++){
    var elements=names[i];
    var index=spaceArry.indexOf(elements);
    if(index==-1){
        spaceArry.push(elements);
    }
}
console.log(spaceArry);