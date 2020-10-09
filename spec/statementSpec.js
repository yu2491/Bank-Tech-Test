'use strict'

describe('Statement', function(){

    var Statement = require('../src/statement.js');
    var statement;
    var transactionDouble;
    
    beforeEach(function(){
        transactionDouble = {};
        transactionDouble.getDate = function() { return '7/10/2020'; }
        statement = new Statement()
    });

    it('returns a blank statement when nothing added', function(){
        expect(statement.getStatement()).toEqual('date || credit || debit || balance')
    });

    it('can return correct format for credit amount', function () {
        transactionDouble.getAmount = function() { return '1000.00' }
        statement.addCreditTransaction(transactionDouble, 2000)
        expect(statement.getStatement()).toEqual("date || credit || debit || balance\n7/10/2020 || 1000.00 || || 2000.00")
    });
    
    it('can return correct format for debit amount', function () {
        transactionDouble.getAmount = function() { return '250.00' }
        statement.addDebitTransaction(transactionDouble, 750)
        expect(statement.getStatement()).toEqual('date || credit || debit || balance\n7/10/2020 || || 250.00 || 750.00')
    });

    it('returns 2 or more transactions in reverse order', function(){
        transactionDouble.getAmount = function() { return '2000.00' }
        statement.addCreditTransaction(transactionDouble, 3000)
        transactionDouble.getDate = function() { return '8/10/2020'; }
        transactionDouble.getAmount = function() { return '500.00' }
        statement.addDebitTransaction(transactionDouble, 2500)
        let expectedString = `date || credit || debit || balance\n8/10/2020 || || 500.00 || 2500.00\n7/10/2020 || 2000.00 || || 3000.00`
        expect(statement.getStatement()).toEqual(expectedString)
    });
});