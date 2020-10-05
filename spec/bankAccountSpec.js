'use strict'

describe('BankAccount', function(){

    var account;
    
    beforeEach(function(){
        account = new BankAccount();
    });

    it('prints blank statement with date credit debit and amount headers if no transactions have been made', function(){
        expect(account.printStatement()).toEqual("date || credit || debit || balance")
    });

});