// If first 10 mile has 50 animal/mile, 2nd 10 mile animal has 100 animal/mile and 3rd 300 animal/mile
function AnimalCount(mile){
    var animal=0;
    if(mile<=10){
        animal=mile*50;
    }
    else if(mile<=20){
        var firstPart=10*50;
        var remaining=mile-10;
        var secondPart=remaining*100;
        animal=firstPart+secondPart;
    }
    else{
        firstPart=10*50;
        secondPart=10*100;
        remaining=mile-20;
        var thirdPart=remaining*300;
        animal=firstPart+secondPart+thirdPart;
    }
    return animal;
}
const results=AnimalCount(20);
console.log(results);