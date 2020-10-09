'use strict'

describe('Feature test', function(){

    var BankAccount = require('../src/bankAccount.js');
    var account;

    beforeEach(function(){
        account = new BankAccount();
        account.balance = 1000
        var dateDouble = new Date(2020, 9, 5);
        jasmine.clock().mockDate(dateDouble);
    });

    it('handles no transactions', function(){
        spyOn(console, 'log');
        account.printStatement();
        expect(console.log).toHaveBeenCalledWith("date || credit || debit || balance");
    });

    it('handles 1 credit transaction', function () {
        account.deposit(1000)
        spyOn(console, 'log');
        account.printStatement()
        expect(console.log).toHaveBeenCalledWith(`date || credit || debit || balance\n05/10/2020 || 1000.00 || || 2000.00`);
    });

    it('handles 1 debit transaction', function () {
        account.withdraw(250);
        spyOn(console, 'log');
        account.printStatement();
        expect(console.log).toHaveBeenCalledWith(`date || credit || debit || balance\n05/10/2020 || || 250.00 || 750.00`);
    });

    it('statement shows multiple transactions in reverse order', function () {
        account.deposit(1000);
        account.deposit(2000);
        account.withdraw(500);
        var expectedString = `date || credit || debit || balance\n05/10/2020 || || 500.00 || 3500.00\n05/10/2020 || 2000.00 || || 4000.00\n05/10/2020 || 1000.00 || || 2000.00`
        spyOn(console, 'log');
        account.printStatement();
        expect(console.log).toHaveBeenCalledWith(expectedString)
    });
});