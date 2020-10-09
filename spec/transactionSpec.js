'use strict'

describe('Transaction', function(){

    var Transaction = require('../src/transaction.js');
    var transaction;
    var dateDouble;
    
    beforeEach(function(){
        dateDouble = {};
        dateDouble.getDate = function() { return 6; }
        dateDouble.getMonth = function() { return 8; }
        dateDouble.getFullYear = function() { return 2020 }
        transaction = new Transaction('credit', 1000, dateDouble)
    });

    it('can return its type', function(){
        expect(transaction.type).toEqual('credit')
    });

    it('can return its date', function(){
        expect(transaction.getDate()).toEqual('06/09/2020')
    });

    it('can return its amount', function(){
        expect(transaction.getAmount()).toEqual('1000.00')
    });
});