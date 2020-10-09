'use strict'

describe('BankAccount', function () {

  var BankAccount = require('../src/bankAccount.js');
  var account;
  var statementDouble;

  beforeEach(function () {
    account = new BankAccount()
    statementDouble = {
      getStatement: function() { return "Statement"},
      addCreditTransaction: function(transaction,balance) {},
      addDebitTransaction: function(transaction,balance)  {}
    }
    account.statement = statementDouble;
  });

  it('prints a statement', function () {
    spyOn(console, 'log');
    account.printStatement();
    expect(console.log).toHaveBeenCalledWith("Statement");
  });

  it('adds a transaction to the statement when a deposit is made', function(){
    spyOn(statementDouble, 'addCreditTransaction');
    account.deposit(1000)
    expect(statementDouble.addCreditTransaction).toHaveBeenCalled()
  });

  it('adds a transaction to the statement when a withdrawal is made', function(){
    account.balance = 1000
    spyOn(statementDouble, 'addDebitTransaction');
    account.withdraw(250)
    expect(statementDouble.addDebitTransaction).toHaveBeenCalled()
  })

  it('will not withdraw amount if it is less than balance', function () {
    var withdraw = function () {
      account.withdraw(2000)
    }
    expect(withdraw).toThrow('Insufficient funds available')
  });
});