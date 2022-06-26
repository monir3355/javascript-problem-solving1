
function feetToMile(ft){
const mile=ft/5280;
return mile.toFixed(6);
}
const feet=feetToMile(30000);
console.log(feet); 