'use strict'

describe('BankAccount', function () {
  
  var BankAccount = require('../src/bankAccount.js');
  var account;

  beforeEach(function () {
    account = new BankAccount()
    account.date = new Date(2020, 9, 6)
  })

  it('prints blank statement with date credit debit and amount headers if no transactions have been made', function () {
    expect(account.printStatement()).toEqual('date || credit || debit || balance')
  })

  it('adds amount to balance when deposit occurs and is shown on statement', function () {
    account.deposit(1000)
    expect(account.printStatement()).toContain('|| 1000.00 || || 1000.00')
  })

  it('subtracts amount from balance when withdrawal occurs and is shown on statement', function () {
    account.balance = 1000
    account.withdraw(250)
    expect(account.printStatement()).toContain('|| || 250.00 || 750.00')
  })

  it('will not withdraw amount if it is less than balance', function () {
    var withdraw = function () {
      account.withdraw(2000)
    }
    expect(withdraw).toThrow('Insufficient funds available')
    expect(account.printStatement()).toEqual('date || credit || debit || balance')
  })

  it('statement shows date for deposit', function () {
    account.deposit(1000)
    expect(account.printStatement()).toContain('6/10/2020 || 1000.00 || || 1000.00')
  })

  it('statement shows date for withdrawal', function () {
    account.balance = 1000
    account.withdraw(250)
    expect(account.printStatement()).toContain('6/10/2020 || || 250.00 || 750.00')
  })

  it('statement shows multiple transactions in reverse order', function () {
    account.deposit(1000)
    account.date = new Date(2020, 9, 7)
    account.deposit(2000)
    account.date = new Date(2020, 9, 8)
    account.withdraw(500)
    var expectedString = `date || credit || debit || balance
8/10/2020 || || 500.00 || 2500.00
7/10/2020 || 2000.00 || || 3000.00
6/10/2020 || 1000.00 || || 1000.00`
    expect(account.printStatement()).toEqual(expectedString)
  })
})
