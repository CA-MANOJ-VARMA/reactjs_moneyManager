import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'
// import {each} from 'immer/dist/internal'

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
    title: '',
    amount: '',
    option: 'INCOME',
    expensesList: [],
    totalIncome: 0,
    totalExpenses: 0,
  }

  titleChangeValue = event => {
    this.setState({title: event.target.value})
  }

  amountChangeValue = event => {
    // const {value} = event.target.value
    // console.log(event.target.value)
    // console.log(parseInt(event.target.value))
    // if (parseInt(event.target.value) !== 'NaN') {
    //   alert('Enter Number')
    // } else {
    this.setState({amount: event.target.value})
    // }
  }

  selectChangeValue = event => {
    this.setState({option: event.target.value})
  }

  submitForm = () => {
    const {title, amount, option, expensesList} = this.state
    console.log(option)
    console.log({option} === 'INCOME')
    expensesList.push({title, amount, option, id: uuidv4()})
    this.setState(prevState => ({
      expensesList,
      title: '',
      amount: '',
      totalIncome:
        prevState.totalIncome + (option === 'INCOME' && parseInt(amount)),
      totalExpenses:
        prevState.totalExpenses + (option === 'EXPENSES' && parseInt(amount)),
    }))
  }

  deleteEntry = id => {
    const {expensesList} = this.state
    const indexId = expensesList.findIndex(eachItem => eachItem.id === id)
    expensesList.splice(indexId, 1)
    this.setState({expensesList})
    console.log(expensesList)
  }

  render() {
    const {
      title,
      amount,
      option,
      expensesList,
      totalIncome,
      totalExpenses,
    } = this.state
    console.log(totalIncome, totalExpenses, expensesList)
    return (
      <div className="css-bg-container">
        <div className="css-welcome-container">
          <h1>Hi, Richard</h1>
          <p>Welcome back to your Money Manager</p>
        </div>
        <MoneyDetails
          expensesList={expensesList}
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
        />
        <div className="css-transaction-history-container">
          <form className="css-addtransactionDetails-container" type="submit">
            <p>Add Transaction</p>
            <div className="css-input-container">
              <label htmlFor="inputTitle">TITLE</label>
              <input
                id="inputTitle"
                placeholder="TITLE"
                onChange={this.titleChangeValue}
                value={title}
              />
            </div>
            <div className="css-input-container">
              <label htmlFor="inputAmount">AMOUNT</label>
              <input
                id="inputAmount"
                placeholder="AMOUNT"
                onChange={this.amountChangeValue}
                value={amount}
              />
            </div>
            <div className="css-input-container">
              <label htmlFor="inputSelect">TYPE</label>
              <select
                id="inputSelect"
                onChange={this.selectChangeValue}
                value={option}
              >
                {transactionTypeOptions.map(eachItem => (
                  <option value={eachItem.optionId} key={eachItem.optionId}>
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button
              className="css-button-itself"
              type="button"
              onClick={this.submitForm}
            >
              Add
            </button>
          </form>
          <TransactionItem
            expensesList={expensesList}
            deleteEntryFunction={this.deleteEntry}
          />
        </div>
      </div>
    )
  }
}

export default MoneyManager
