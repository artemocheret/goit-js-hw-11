user.login();

const user = {
  name: "Artem",
  email: "artemoceret24@gmail.com",
  password: "artem451362",

  login(inputEmail, inputPassword) {
    return inputEmail === this.email && inputPassword === this.password;
  },
};

const emailFromUser = prompt("Введіть email:");
const passwordFromUser = prompt("Введіть пароль:");

if (user.login(emailFromUser, passwordFromUser)) {
  alert("Вхід успішний!");
} else {
  alert("Невірний email або пароль!");
}
