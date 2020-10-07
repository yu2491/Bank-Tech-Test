'use strict'

class BankAccount {
  constructor () {
    this.balance = 0
    this.transactions = []
    this.date = new Date()
  }

  deposit (amount) {
    this.balance += amount
    this.transactions.push(`${this.dateString()} || ${amount.toFixed(2)} || || ${this.balance.toFixed(2)}`)
  }

  withdraw (amount) {
    if (amount > this.balance) {
      throw 'Insufficient funds available'
    } else {
      this.balance -= amount
      this.transactions.push(`${this.dateString()} || || ${amount.toFixed(2)} || ${this.balance.toFixed(2)}`)
    }
  }

  printStatement () {
    console.log(this._statementHeaders() + this._statement())
    return this._statementHeaders() + this._statement()
  }

  dateString () {
    return this.date.getDate() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getFullYear()
  }

  _statementHeaders () {
    return 'date || credit || debit || balance'
  }

  _statement () {
    var statement = ''
    for (var i = this.transactions.length; i > 0; i--) {
      statement += `\n${this.transactions[i - 1]}`
    }
    return statement
  }
}
module.exports = BankAccount;