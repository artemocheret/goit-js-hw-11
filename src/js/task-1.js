const bankAccount = {
  ownerName: "Артем",
  accountNumber: "1234567890",
  balance: 1000,

  deposit(amount) {
    this.balance += amount;
  },

  withdraw(amount) {
    if (amount > this.balance) {
      return false;
    }
    this.balance -= amount;
    return true;
  },
};

if (confirm("Бажаєте поповнити рахунок?")) {
  const amount = Number(prompt("Введіть суму для поповнення:"));
  if (!isNaN(amount) && amount > 0) {
    bankAccount.deposit(amount);
    alert(`Рахунок поповнено. Поточний баланс: ${bankAccount.balance} грн`);
  }
}

if (confirm("Бажаєте зняти кошти?")) {
  const amount = Number(prompt("Введіть суму для зняття:"));
  if (!isNaN(amount) && amount > 0) {
    const success = bankAccount.withdraw(amount);
    if (success) {
      alert(`Гроші знято. Поточний баланс: ${bankAccount.balance} грн`);
    } else {
      alert("Недостатньо коштів!");
    }
  }
}
