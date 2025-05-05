// Write your code here
import './index.css'

const TransactionItem = ({transaction, onDelete}) => {
  const {id, title, amount, type} = transaction

  const handleDelete = () => onDelete(id)

  return (
    <li>
      <p>{title}</p>
      <p>RS {amount}</p>
      <p>{type}</p>

      <button
        data-testid="delete"
        onClick={handleDelete}
        className="delete-button"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default TransactionItem
