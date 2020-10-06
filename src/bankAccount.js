'use strict'

class BankAccount {

    constructor() {
        this.balance = 0
        this.transactions =  []
    }

    deposit(amount) {
        this.balance += amount
        this.transactions.push(`|| ${amount.toFixed(2)} || || ${this.balance.toFixed(2)}`)
    }

    withdraw(amount) {
        this.balance -= amount
        this.transactions.push(`|| || ${amount.toFixed(2)} || ${this.balance.toFixed(2)}`)
    }

    printStatement() {
        return this._statementHeaders() + this._statement();
    }

    _statementHeaders() {
        return "date || credit || debit || balance"
    }

    _statement() {
        var statement = "";
        for(var i=0; i<this.transactions.length; i++) {
            statement += `\n${this.transactions[i]}`
        }
        return statement
    }

}