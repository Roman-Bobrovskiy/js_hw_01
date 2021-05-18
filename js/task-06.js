let total = 0;
for (total = 0; true; false) {
  let input = +prompt("Enter number");
  if (!input) break;
  total += input;
}
if (total) {
  alert("The total sum of the numbers is" + " " + total);
} else if (!/^[0-9]+$/.total) {
  // пока мы этого не проходили, но google помог
  alert("Try again");
}
