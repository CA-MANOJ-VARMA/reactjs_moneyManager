// Write your code here
import './index.css'

const TransactionItem = props => {
  const {expensesList, deleteEntryFunction} = props
  const {title, amount, option} = expensesList

  const deleteFunction = keyId => {
    deleteEntryFunction(keyId)
  }

  return (
    <div className="css-historyDetails-container">
      <h1>History</h1>
      <div className="css-header-container">
        <p className="css-para-container">Title</p>
        <p className="css-para-container">Amount</p>
        <p className="css-para-container">Type</p>
      </div>
      <ul className="css-ul-historyExpenses-container">
        {expensesList.map(eachItem => (
          <li key={eachItem.id}>
            <div className="css-expenses-delete-container">
              <p className="css-para-container">{eachItem.title}</p>
              <p className="css-para-container">{eachItem.amount}</p>
              <p className="css-para-container">{eachItem.option}</p>
              <div className="css-type-delete-container">
                <button
                  type="button"
                  className="css-delete-button-itself"
                  onClick={() => deleteFunction(eachItem.id)}
                  data-testid="delete"
                >
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
                    alt="delete"
                    className="css-button-container"
                  />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default TransactionItem
