const user = {
  name: "Artem",
  email: "artemoceret24@gmail.com",
  password: "artem451362",

  login() {
    const inputEmail = prompt("Введіть email:");
    const inputPassword = prompt("Введіть пароль:");

    if (inputEmail === this.email && inputPassword === this.password) {
      alert("Вхід успішний!");
    } else {
      alert("Невірний email або пароль!");
    }
  },
};

user.login();
