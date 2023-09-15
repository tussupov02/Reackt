import { create } from "zustand";

export const useBudget= create((set)=>({
    expenses:[
        { id: 12, name: "shoping", cost: 40 },
        { id: 15, name: "holiday", cost: 400 },
        { id: 127, name: "car shoping", cost: 40000 },
    ],
    budget: [1000],

    editExpenses:(value)=>set((state)=>{
      return {budget:[value]}
    }),

    addExpense:(name, cost)=>
        set((state)=>{
            const newExpenses= { id: new Date().valueOf(), name, cost }
            return {expenses:[...state.expenses, newExpenses] };
    }),

    deleteExpense:(id)=>set((state)=>{
        const newExpenses= state.expenses.filter((expense)=>expense.id!==id)
        return{expenses: newExpenses}
    })

}))