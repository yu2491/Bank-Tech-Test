# Bank-Tech-Test

Simple app that allows you to create a bank account, deposit money and withdraw money into it as well as print a statement which will display all your previous transactions. 

### Tech stack

- JavaScript
- Jasmine

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### How to use the app
Clone this repository and open the console

To create a bank account:
```
myAccount = new BankAccount()
```

To deposit funds:
```
myAccount.deposit(1000)
```

To withdraw funds:
```
myAccount.withdraw(500)
```

To view statement:
```
myAccount.printStatement()
```

### Tests
Clone this repository
```
npx jasmine init
npm test
```
