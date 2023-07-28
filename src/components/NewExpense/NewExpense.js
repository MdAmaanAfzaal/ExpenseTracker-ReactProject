import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css"
import { useState } from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(ExpenseData);
        setIsEditing(false);
    }
    
    const startEditingHandler = () => {
        setIsEditing(true);
    }
    
    const endEditingHandler = () => {
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={endEditingHandler}/> }

        </div>
    )
}

export default NewExpense;