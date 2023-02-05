// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {expensesList, totalIncome, totalExpenses} = props

  return (
    <div className="css-MoneyDetails-container">
      <div className="css-image-balance-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="css-moneyDetails-image-itself"
          />
        </div>
        <div className="css-balance-container">
          <p>Your Balance</p>
          <p data-testid="balanceAmount">
            Rs. {parseInt(totalIncome) - parseInt(totalExpenses)}
          </p>
        </div>
      </div>
      <div className="css-image-income-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="css-moneyDetails-image-itself"
          />
        </div>
        <div className="css-balance-container">
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs. {totalIncome}</p>
        </div>
      </div>
      <div className="css-image-expense-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="css-moneyDetails-image-itself"
          />
        </div>
        <div className="css-balance-container">
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs. {totalExpenses}</p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
