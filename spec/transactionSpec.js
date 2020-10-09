'use strict'

describe('Transaction', function(){

    var Transaction = require('../src/transaction.js');
    var transaction;
    
    beforeEach(function(){
        var dateDouble = new Date(2020, 8, 5);
        jasmine.clock().mockDate(dateDouble);
        transaction = new Transaction('credit', 1000, dateDouble)
    });

    it('can return its type', function(){
        expect(transaction.type).toEqual('credit')
    });

    it('can return its date', function(){
        expect(transaction.getDate()).toEqual('05/09/2020')
    });

    it('can return its amount', function(){
        expect(transaction.getAmount()).toEqual('1000.00')
    });
});