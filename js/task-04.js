let credits = 35500;
let pricePerDroid = 3000;
let totalPrice;
let message;
let DroidQuantity = prompt("Enter number");
totalPrice = DroidQuantity * pricePerDroid;
if (DroidQuantity === null) {
  message = "Canceled by user!";
  alert(message);
} else if (totalPrice >= credits) {
  message = "Insufficient Funds!";
  alert(message);
} else if (totalPrice <= credits) {
  alert(
    "You bought" +
      " " +
      DroidQuantity +
      " " +
      "droids" +
      " " +
      (credits - totalPrice) +
      " " +
      "credits left on your account"
  );
}
