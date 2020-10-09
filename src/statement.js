'use strict'

class Statement {

    constructor() {
      this.header = "date || credit || debit || balance"
      this.statement = ""
    }
  
    getStatement() {
      return this.header + this.statement
    }
  
    add(transaction,balance) {
      this.statement = this.getString(transaction,balance) + this.statement
    }
  
    getString(transaction,balance) {
      if(transaction.getAmount() > 0 ) {
        return `\n${transaction.getDate()} || ${transaction.getAmount()} || || ${balance}`
      } else {
        return `\n${transaction.getDate()} || || ${transaction.getAmount()} || ${balance}`
      }
    }
}
module.exports = Statement;