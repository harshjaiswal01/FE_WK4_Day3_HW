// Constructor function for the Account object
function Account(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
}

// Method to deposit funds into the account
Account.prototype.deposit = function(amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} to Account number ${this.accountNumber}. New balance is ${this.balance}.`);
    } else {
        console.log('Deposit amount must be positive.');
    }
};

// Method to withdraw funds from the account
Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew ${amount} from Account Number ${this.accountNumber}. New balance is ${this.balance}.`);
    } else {
        console.log('Withdrawal amount must be positive and less than or equal to the balance.');
    }
};

// // Method to calculate compound interest
// Account.prototype.calculateInterest = function(rate, years) {
//     const compoundInterest = this.balance * Math.pow((1 + rate / 100), years);
//     console.log(`Balance after ${years} years at an interest rate of ${rate}% will be ${compoundInterest.toFixed(2)}.`);
//     return compoundInterest;
// };

function Bank(name) {
    this.name = name;
    this.accounts = [];
}

// Create New Account

Bank.prototype.createAccount = function(accountNumber, owner, balance) {
    const newAccount = new Account(accountNumber, owner, balance);
    this.accounts.push(newAccount);
    console.log(`New Account Created. Owner Name : ${owner}, Account Number : ${accountNumber}, Balance : ${balance}`)
}

Bank.prototype.findAccount = function(accountNumber) {
    return this.accounts.find(account => account.accountNumber === accountNumber);
};

Bank.prototype.deposit = function(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    if (account) {
        if (amount > 0) {
            account.deposit(amount)
        } else {
            console.log("Amount must be greater than Zero")
        }
    } else {
        console.log("Account Not Found")
    }
}

Bank.prototype.getBalance = function(accountNumber) {
    const account = this.findAccount(accountNumber);
    console.log(`Balance in Account number ${accountNumber} is ${account.balance}`)
}

const aBank = new Bank('My Bank');

aBank.createAccount(100, "Harsh", 1000)

aBank.deposit(100, 10)

Bank.prototype.withdraw = function(accountNumber, amount) {
    const account = this.findAccount(accountNumber);
    if (account) {
        if (amount > 0) {
            if (account.balance > amount) {
                account.withdraw(amount);
            } else {
                console.log("Balance in the acount is lower than the Withdrawal amount requested")
            }
        } else {
            console.log("Amount must be positive")
        }
    } else {
        console.log("Account Number not valid")
    }
}

aBank.withdraw(100, 20)

// Create a method to calculate compound interest based on the balance and specified interest rate.
const interestRate = 1;

Account.prototype.calculateInterest = function(rate, years) {
    const compoundInterest = this.balance * Math.pow((1 + rate / 100), years);
    console.log(`Balance after ${years} years at an interest rate of ${rate}% will be ${compoundInterest.toFixed(2)}.`);
    return compoundInterest;
};

const harshAccount = aBank.findAccount(100);
if (harshAccount) {
    harshAccount.calculateInterest(5, 2);
} else {
    console.log(`Account not Found`)
}

aBank.getBalance(100)

