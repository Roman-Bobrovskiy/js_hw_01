let message;
const ADMIN_PASSWORD = "adminpass";
let password = prompt("Enter password");
if (password === null) {
  message = "Canceled by user!";
} else if (password == ADMIN_PASSWORD) {
  message = "Welcome!";
} else if (password !== ADMIN_PASSWORD) {
  message = "Access denied, wrong password!";
}
alert(message);
