let delivery = prompt("Choose a country");
switch (delivery.toLowerCase()) {
  case "china":
    alert("Delivery to the China will cost 150 credits");
    break;

  case "chile":
    alert("Delivery to the Chile will cost 250 credits");
    break;

  case "australia":
    alert("Delivery to the Australia will cost 165 credits");
    break;

  case "india":
    alert("Delivery to the India will cost 90 credits");
    break;

  case "jamaica":
    alert("Delivery to the Jamaica will cost 130 credits");
    break;

  default:
    alert("Delivery is not available in your country");
    break;
}
