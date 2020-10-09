'use strict'

describe('Statement', function(){

    var Statement = require('../src/statement.js');
    var statement;
    var transactionDouble;
    
    beforeEach(function(){
        transactionDouble = {};
        transactionDouble.getDate = function() { return '7/10/20'; }
        statement = new Statement()
    });

    it('returns a blank statement when nothing added', function(){
        expect(statement.getStatement()).toEqual('date || credit || debit || balance')
    });

    it('can return correct format for credit amount', function () {
        transactionDouble.getAmount = function() { return 1000 }
        statement.add(transactionDouble, 2000)
        expect(account.printStatement()).toEqual("date || credit || debit || balance\n7/10/2020 || 1000.00 || || 2000.00")
    });
    
    it('can return correct format for credit amount', function () {
        transactionDouble.getAmount = function() { return -250 }
        statement.add(transactionDouble, 750)
        expect(account.printStatement()).toContain('7/10/2020 || || 250.00 || 750.00')
    });
});