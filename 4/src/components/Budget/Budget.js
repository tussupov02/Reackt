import { useState } from "react";
import { useBudget } from "../../store/useBudget";
export default function Budget() {
  const budget = useBudget((state) => state.budget);
  const [ editBudget, setEditBudget ] = useState(false);
  const [cost, setCost] = useState("");
  const editExpenses = useBudget((state) => state.editExpenses);
    const onSubmit = (e) => {
        e.preventDefault();
        editExpenses(cost)
      };
    

  return (
    <div
      className="alert alert-secondary "
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <span>Budget: KZT{budget}</span>
      <form onSubmit={onSubmit}>
      <input
            required="required"
            type="text"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            style={{display:` ${editBudget? "block" : "none"}`}}
            />
        
        <button onClick={()=>setEditBudget(!editBudget)}>edit</button>
      </form>
    </div>
  );
}
