function largeNumber(n){
let large=n[0];
for(let i=0; i<n.length; i++){
    let elements=n[i];
    if(large<elements){
        large=elements;
        }

    }
    return large;
}
const num=[50,77,33,57,25, 555, 470, 433];
const results=largeNumber(num);
console.log(results);