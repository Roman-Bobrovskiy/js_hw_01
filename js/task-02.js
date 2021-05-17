const total = 100;
let ordered = 20; // let переменная, т.к. хочу менять значение.
console.log(ordered);
if (ordered <= total) {
  console.log("Thanks for your order!");
} else if (ordered > 100) {
  console.log("out of stock!");
}
ordered = 80;
console.log(ordered);
if (ordered <= total) {
  console.log("Thanks for your order!");
} else if (ordered > 100) {
  console.log("out of stock!");
}
ordered = 130;
console.log(ordered);
if (ordered <= total) {
  console.log("Thanks for your order!");
} else if (ordered > 100) {
  console.log("Out of stock!");
}
