import { useBudget } from "../../store/useBudget";

export default function Remaining(){
    const budget = useBudget((state)=>state.budget)
    const expenses = useBudget((state)=>state.expenses)

    const totalExpenses = expenses.reduce((total, item)=>{
        return(total= total + item.cost)
    }, 0);

    const alertType = totalExpenses> budget ? "alert-danger": "alert-success"

    return(
        <div className={`alert ${alertType}`}>
            <span>Remaining: KZT{budget - totalExpenses}</span>
        </div>
    )
}