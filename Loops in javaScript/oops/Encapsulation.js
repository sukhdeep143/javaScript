// Encapsulation is the use to bind the code together and to  restrict the data assess outside the class. Which make the code secure.

// if we try to use the "#balance" (# is use to make the variavle private it is an syntax) out side the class it will thro the error
// first example
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
// console.log(DepositMoney.getBalance());

// Second example

class power {
  #power_type = "";
  #water = "";

  power_point(strenth, power_well) {
    this.#water = strenth;
    this.#power_type = power_well;
    return `${this.power_well} ${this.strenth}`;
  }

  get_info_power() {
    return `The person has the power of  ${this.#water} and strenth of ${
      this.#power_type
    } people`;
  }
}

let check_power = new power();
check_power.power_point("water", "10");

// console.log(check_power); // This will show the object only{}
// console.log(check_power.get_info_power());

// Another example of Encapsulation of the variavle

class students {
  // Declare some private varival
  #math_marks = 0;
  #java_marks = 0;

  // A function which give the data to the private varival

  marks_given(math, java) {
    this.#math_marks = math;
    this.#java_marks = java;

    return `${this.#math_marks} ${this.#java_marks}`;
  }

  show_markes() {
    if (this.#math_marks >= 50  && this.#java_marks >= 50) {
       return `got ${this.#math_marks} in math and ${this.#java_marks} in Java, so the student is passed !!!`
    } else {
      return `Better luck next time`;
    }
  }
}

// Now create as many object you need

let sukhdeep_student = new students();
let harman_student = new students()

sukhdeep_student.marks_given(99, 98);
harman_student.marks_given(50, 68);


console.log(`Sukhdeep singh`, sukhdeep_student.show_markes());
console.log(`Harmanjeet singh`, harman_student.show_markes());

