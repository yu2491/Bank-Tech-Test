'use strict'

class Statement {

    constructor() {
      this.header = "date || credit || debit || balance"
      this.statement = ""
    }
  
    getStatement() {
      return this.header + this.statement
    }
  
    addCreditTransaction(transaction,balance) {
      this.statement = `\n${transaction.getDate()} || ${transaction.getAmount()} || || ${balance.toFixed(2)}` + this.statement
    }

    addDebitTransaction(transaction,balance) {
      this.statement = `\n${transaction.getDate()} || || ${transaction.getAmount()} || ${balance.toFixed(2)}` + this.statement
    }
}
module.exports = Statement;