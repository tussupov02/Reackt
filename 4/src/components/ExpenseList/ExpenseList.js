import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { useBudget } from "../../store/useBudget";

export default function ExpenseList() {
  const expenses = useBudget((state) => state.expenses);

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
}
