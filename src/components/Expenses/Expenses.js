import { useState } from "react";
import Card from "../UI/Card"
import ExpenseFilter from "./ExpenseFilter";
import ExpensesChart from "./ExpensesChart"
import "./Expenses.css"
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {

    const [filteredYear, setfilteredYear] = useState('2020')
    const filterChangeHandler = selectedYear => {
        setfilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(item => {
        return item.date.getFullYear().toString() === filteredYear
    })

    return (
        <div>

            <Card className="expenses">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                
                <ExpensesList filteredExpenses={filteredExpenses} />
                
            </Card>
        </div>
    );
}

export default Expenses;