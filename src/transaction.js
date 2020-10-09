'use strict'

class Transaction {

    constructor(type, amount, date) {
        this.type = type
        this.amount = amount
        this.date = typeof date !== 'undefined' ? date : new Date()
    }

    getAmount() {
        return this.amount.toFixed(2)
    }

    getDate() {
        return this.date.getDate() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getFullYear()
    }

}
module.exports = Transaction;