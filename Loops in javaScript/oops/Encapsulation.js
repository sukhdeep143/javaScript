// Encapsulation is the use to bind the code together and to  restrict the data assess outside the class. Which make the code secure.  


class BanckAccount {
  #balance = 0; // `#Variable` is use to make the variable private and secure.

  deposit(amount) {
    this.#balance = amount;
    return `${this.amount}`;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let DepositMoney = new BanckAccount();

DepositMoney.deposit(6000);
console.log(DepositMoney.getBalance());
