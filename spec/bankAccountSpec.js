'use strict'

describe('BankAccount', function(){

    var account;
    
    beforeEach(function(){
        account = new BankAccount();
    });

    it('prints blank statement with date credit debit and amount headers if no transactions have been made', function(){
        expect(account.printStatement()).toEqual("date || credit || debit || balance")
    });

    it('adds amount to balance when deposit occurs and is shown on statement', function(){
        account.deposit(1000);
        expect(account.balance).toEqual(1000)
        expect(account.transactions.length).toEqual(1)
        expect(account.printStatement()).toContain("|| 1000.00 || || 1000.00")
    });

    it('subtracts amount from balance when withdrawal occurs and is shown on statement', function(){
        account.balance = 1000;
        account.withdraw(250);
        expect(account.balance).toEqual(750)
        expect(account.transactions.length).toEqual(1)
        expect(account.printStatement()).toContain("|| || 250.00 || 750.00")
    });

});