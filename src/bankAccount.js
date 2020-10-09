'use strict'

var Statement = require('./statement.js');
var Transaction = require('./transaction.js');

class BankAccount {

  constructor () {
    this.balance = 0
    this.statement = new Statement()
  }

  deposit (amount) {
    this.balance += amount
    let transaction = new Transaction('credit', amount)
    this.statement.addCreditTransaction(transaction,this.balance)
  }

  withdraw (amount) {
    if (amount > this.balance) {
      throw 'Insufficient funds available'
    } else {
      this.balance -= amount
      let transaction = new Transaction('debit', amount)
      this.statement.addDebitTransaction(transaction,this.balance)
    }
  }

  printStatement () {
    console.log(this.statement.getStatement())
  }
}
module.exports = BankAccount;