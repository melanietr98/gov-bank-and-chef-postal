//governor excercise 

 class Governor {
   constructor(name, state, available) {
     this.name = name;
     this.state = state;
     this.available = available || true;
 }
   static signBills(govChar) {
     console.log('This Bill has been signed');
     govChar.available = false;
   }
   static attendsMeeting(govChar){
     console.log('The Governor is at the meeting');
     govChar.available = false;
   }
   availability() {
     console.log('Is the Governor available ' + this.available);
   }
   static finishedSigningBill (govChar) {
     govChar.available = true;
   }
 }


 const Arnold = new Governor('Arnold', 'California');

 console.log(Arnold);
 Governor.signBills(Arnold);
 console.log(Arnold);
 Governor.finishedSigningBill(Arnold);
 console.log(Arnold);

// end of the gov excercise. 

// postal worker and chef excercise 
class Person{
  constructor(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
  }
  eat(){
    console.log("Started eating....")
  }
  sleep(){
    console.log("Off to bed...")
  }
  work(){
    console.log("Working ....")
    
  }
}

class PostalWorker extends Person {
  deliverMail() {
    console.log("Delivering the Mail...");
  }
  sortingMail() {
    console.log("Sorting the Mail...");
  }
  pickingUpMail() {
    console.log("Picking Up the Mail...");
  }
}
class Chef extends Person {
  cookFood() {
    console.log("Cooking food");
  }
  prepFood() {
    console.log("Prep food");
  }
} 
const postalworker1 =  new PostalWorker('Joe', 25, 'Clerk');
console.log(postalworker1)
postalworker1.pickingUpMail()

const postalworker2 = new PostalWorker('Frtiz', 22, 'Cashier');
console.log(postalworker2)
postalworker2.sortingMail()

const chef1 = new Chef('John', 20, 'line cook');
console.log(chef1)
chef1.cookFood()

const chef2 = new Chef('Bob', 22, 'Sous Chef');
console.log(chef2)
chef2.prepFood()
console.log('\n')



// BankAccount exercise
class BankAccount {
  constructor(ownerName) {
    this.ownerName = ownerName;
    this.balance = 100;
    this.acctNum = '12345';
  }
  deposit() {
    this.balance += 50;
    console.log('New Deposit of $50, your new balance is $' + (this.balance));
  };
  withdraw() {
    this.balance -= 20
    console.log('Witdrawing $20, your new balance is $' + (this.balance));
  };
};

const mybank = new BankAccount('Rachel');
mybank.deposit();
mybank.withdraw();
console.log(mybank);
console.log('\n');


class CheckingAccount extends BankAccount {
  constructor(ownerName, balance) {
    super(ownerName, balance);
    this.overDraft = false;
  };
  withdraw() {
    this.balance -= 150;
    this.overDraft = true;
    console.log('Your bank account is now overdraft! Your balance is ' + this.balance)
  };
};

const checkAcc = new CheckingAccount('Rachel');
checkAcc.withdraw();
console.log(checkAcc);
console.log('\n');


class SavingsAccount extends BankAccount {

  withdraw() {
    console.log('Withdrawing is disabled, please contact the bank');
  };
};

const saveAcc = new SavingsAccount('Rachel');
saveAcc.withdraw();
console.log(saveAcc);