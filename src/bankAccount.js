'use strict'

class BankAccount {

    constructor() {
        this.balance = 0
        this.transactions =  []
    }

    deposit(amount) {
        this.balance += amount
        this.transactions.push(`|| ${amount} || || ${this.balance}`)
    }

    printStatement() {
        if(this.transactions.length > 0) {
            return "date || credit || debit || balance" + this.transactions[0];
        }
        return "date || credit || debit || balance"
    }

}