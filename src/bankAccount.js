'use strict'

class BankAccount {

    constructor() {
        this.balance = 0
        this.transactions =  []
        this.date = new Date()
    }

    deposit(amount) {
        this.balance += amount
        this.transactions.push(`${this.dateString()} || ${amount.toFixed(2)} || || ${this.balance.toFixed(2)}`)
    }

    withdraw(amount) {
        if(amount > this.balance) {
            throw "Insufficient funds available"
        } else {
            this.balance -= amount
            this.transactions.push(`${this.dateString()} || || ${amount.toFixed(2)} || ${this.balance.toFixed(2)}`)
        }
    }

    printStatement() {
        return this._statementHeaders() + this._statement();
    }

    dateString() {
        return this.date.getDate() + "/" + (this.date.getMonth() + 1) + "/" + this.date.getFullYear();
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