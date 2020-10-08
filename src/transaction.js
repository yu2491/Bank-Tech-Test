'use strict'

class Transaction {

    constructor(amount,date) {
        this.amount = amount
        this.date = typeof date !== 'undefined' ? date : new Date()
    }

    getAmount() {
        return this.amount
    }

    getDate() {
        return this.date.getDate() + '/' + (this.date.getMonth() + 1) + '/' + this.date.getFullYear()
    }

}
module.exports = Transaction;