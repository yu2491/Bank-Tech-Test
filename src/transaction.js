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
        var dd = this.date.getDate();
        var mm = this.date.getMonth() + 1; 
        var yyyy = this.date.getFullYear();
        if(dd<10) {
            dd='0'+dd;
        } 

        if(mm<10) {
            mm='0'+mm;
        } 

        return dd + '/' + mm + '/' + yyyy
    }

}
module.exports = Transaction;