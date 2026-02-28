const bankAccount = {
  ownerName: "Артем",
  accountNumber: "1234567890",
  balance: 1000,

  deposit(amount) {
    if (confirm(`Поповнити рахунок на ${amount} грн?`)) {
      this.balance += amount;
      alert(`Рахунок поповнено. Поточний баланс: ${this.balance} грн`);
    } else {
      alert("Операцію скасовано");
    }
  },

  withdraw(amount) {
    if (amount > this.balance) {
      alert("Недостатньо коштів!");
      return;
    }

    if (confirm(`Зняти ${amount} грн?`)) {
      this.balance -= amount;
      alert(`Гроші знято. Поточний баланс: ${this.balance} грн`);
    } else {
      alert("Операцію скасовано");
    }
  },
};

const amountDeposit = Number(prompt("Введіть суму для поповнення:"));
const amountWithDraw = Number(prompt("Введіть суму для зняття:"));

bankAccount.deposit(amountDeposit);
bankAccount.withdraw(amountWithDraw);
