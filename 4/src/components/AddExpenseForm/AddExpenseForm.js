import { useState } from "react";
import { useBudget } from "../../store/useBudget";

export default function AddExpenseForm() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const addExpense = useBudget((state) => state.addExpense);
  
  const onSubmit = (e) => {
    e.preventDefault();
    addExpense(name, parseInt(cost))
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <label for="name">Name</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label for="cost">Cost</label>
          <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          ></input>
        </div>
        <div className="col-sm"></div>
      </div>
      <button type="subnit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}
