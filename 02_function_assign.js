function lineOne() {
  console.log(`Do it now!!!`);
}
function lineTwo() {
  console.log(`"Sometimes Latter becomes never"!!!`);
}
function personalDetails(firstName, lastName, collageName) {
  console.log(`First Name: ${firstName}`);
  console.log(`Last Name: ${lastName}`);
  console.log(`${collageName}`);
}
function swapValues(val1, val2) {
  console.log(`Before Swap: ${val1} ${val2}`);
  var temp = val1;
  val1 = val2;
  val2 = temp;
  console.log(`After Swap: ${val1} ${val2}`);
}
function addThreeValues(no1, no2, no3) {
  console.log(`Addition of given three values:`, no1 + no2 + no3);
}
lineOne();
lineTwo();
console.log(`----------------------------------------------`);
personalDetails(`Suhas`, `Javir`, `Tilak Maharashtra University`);
console.log(`----------------------------------------------`);
swapValues(`Virat`, `Anushka`);
swapValues(1000, 2000);
console.log(`----------------------------------------------`);
addThreeValues(10.23, 600, 40);
addThreeValues(`Hello `, `Good `, `Morning`);
console.log(`----------------------------------------------`);
