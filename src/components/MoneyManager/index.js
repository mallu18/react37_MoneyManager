import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
    transactionsList: [],
  }

  onAddTransaction = event => {
    event.preventDefault()

    const {titleInput, amountInput, typeInput} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === typeInput,
    )

    const newTransaction = {
      id: uuidv4(),
      title: titleInput,
      amount: parseInt(amountInput) || 0,
      type: typeOption.displayText,
    }

    this.setState(prevState => ({
      transactionsList: [...prevState.transactionsList, newTransaction],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    }))
  }

  deleteTransaction = id => {
    this.setState(prevState => ({
      transactionsList: prevState.transactionsList.filter(
        transaction => transaction.id !== id,
      ),
    }))
  }

  getIncome = () => {
    const {transactionsList} = this.state

    return transactionsList
      .filter(t => t.type === 'Income')
      .reduce((sum, t) => sum + t.amount, 0)
  }

  getExpenses = () => {
    const {transactionsList} = this.state
    return transactionsList
      .filter(t => t.type === 'Expenses')
      .reduce((sum, t) => sum + t.amount, 0)
  }
  render() {
    const {titleInput, amountInput, typeInput, transactionsList} = this.state
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    const balanceAmount = incomeAmount - expensesAmount

    return (
      <div className="app-container">
        <div className="header">
          <h1 className="greeting">Hi, Richard</h1>
          <p className="welcome-msg">
            Welcome back to your{' '}
            <span className="highlight">Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          incomeAmount={incomeAmount}
          expensesAmount={expensesAmount}
          balanceAmount={balanceAmount}
        />

        <div className="transaction-container">
          <form className="form" onSubmit={this.onAddTransaction}>
            <h1 className="form-heading">Add Transaction</h1>

            <label htmlFor="title">TITLE</label>
            <p>Title</p>
            <input
              type="text"
              id="title"
              value={titleInput}
              onChange={e => this.setState({titleInput: e.target.value})}
              placeholder="TITLE"
            />

            <label htmlFor="amount">AMOUNT</label>
            <p>Amount</p>
            <input
              type="text"
              id="amount"
              value={amountInput}
              onChange={e => this.setState({amountInput: e.target.value})}
              placeholder="AMOUNT"
            />

            <label htmlFor="type">TYPE</label>
            <p>Type</p>
            <select
              id="type"
              className="type-input"
              value={typeInput}
              onChange={e => this.setState({typeInput: e.target.value})}
            >
              {transactionTypeOptions.map(option => (
                <option key={option.optionId} value={option.optionId}>
                  {option.displayText}
                </option>
              ))}
            </select>

            <button className="add-button" type="submit">
              Add
            </button>
          </form>

          <div className="history">
            <h1>History</h1>

            <ul className="transaction-list">
              {transactionsList.map(item => (
                <TransactionItem
                  key={item.id}
                  transaction={item}
                  onDelete={this.deleteTransaction}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
