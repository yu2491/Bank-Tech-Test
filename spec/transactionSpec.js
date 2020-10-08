'use strict'

describe('Transaction', function(){
    
    var transaction;
    var dateDouble;
    
    beforeEach(function(){
        dateDouble = '7-10-20'
        transaction = new Transaction(1000, date)
    });

    it('has a date', function(){
        expect(transaction.date).toEqual('7-10-20')
    });

    it('has an amount', function(){
        expect(transaction.amount).toEqual(1000)
    });

});