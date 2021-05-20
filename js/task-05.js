let chinaPrice = 150;
let chilePrice = 250;
let australiaPrice = 165;
let indiaPrice = 90;
let jamaicaPrice = 130;
let delivery = prompt("Choose a country");
let deliveryText =
  delivery.charAt(0).toUpperCase() + delivery.slice(1).toLowerCase();
switch (delivery) {
  case "china":
    alert(
      "Delivery to the" +
        " " +
        deliveryText +
        " " +
        "will cost " +
        " " +
        chinaPrice +
        " " +
        " credits"
    );
    break;

  case "chile":
    alert(
      "Delivery to the" +
        " " +
        deliveryText +
        " " +
        "will cost " +
        " " +
        chilePrice +
        " " +
        " credits"
    );
    break;

  case "australia":
    alert(
      "Delivery to the" +
        " " +
        deliveryText +
        " " +
        "will cost " +
        " " +
        australiaPrice +
        " " +
        " credits"
    );
    break;

  case "india":
    alert(
      "Delivery to the" +
        " " +
        deliveryText +
        " " +
        "will cost " +
        " " +
        indiaPrice +
        " " +
        " credits"
    );
    break;

  case "jamaica":
    alert(
      "Delivery to the" +
        " " +
        deliveryText +
        " " +
        "will cost " +
        " " +
        jamaicaPrice +
        " " +
        " credits"
    );
    break;

  default:
    alert("Delivery is not available in your country");
    break;
}
