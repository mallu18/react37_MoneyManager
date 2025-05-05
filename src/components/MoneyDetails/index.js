// Write your code here

import './index.css'

const MoneyDetails = ({incomeAmount, expensesAmount, balanceAmount}) => (
  <div className="money-details-container">
    <div className="detail-card balance">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        alt="balance"
      />
      <p>Your Balance</p>
      <p data-testid="balanceAmount">RS {balanceAmount}</p>
    </div>

    <div className="detail-card income">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        alt="income"
      />
      <p>Your Income</p>
      <p data-testid="incomeAmount">Rs {incomeAmount}</p>
    </div>
    <div className="detail-card expenses">
      <img
        src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        alt="expenses"
      />
      <p>Your Expenses</p>
      <p data-testid="expensesAmount">Rs {expensesAmount}</p>
    </div>
  </div>
)
export default MoneyDetails
