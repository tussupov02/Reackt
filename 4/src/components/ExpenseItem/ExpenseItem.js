import { TiDelete } from "react-icons/ti";
import { useBudget } from "../../store/useBudget";

export default function ExpenseItem(props) {
    const deleteExpense = useBudget((state)=>state.deleteExpense)
  const handleDeleteExpense = () => {
    deleteExpense(props.id)
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.name}
      <div>
        <span className="bg bg-primary rounded-circle mr-3 ">
          KZT{props.cost}
        </span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
}
