import React, { useState, useEffect} from 'react';

const ExpenseAccumulativeSummary = ({title,expenses}) => {
    const countTotalAmount = (expenses) =>{
        let total = 0;
        expenses.map((expense)=>{
            total = total + expense.expenseAmount;
        })
        console.log(typeof total);
        return total;
      };

    const getIncomeAmount = () =>{
        return countTotalAmount(expenses.filter((expense) =>{return expense.expenseType === 'Income'}));
      }
    
      const getExpenseAmount = () =>{
        return countTotalAmount(expenses.filter((expense) =>{return expense.expenseType !== 'Income'}));
      }
    
    const[income,setIncome] = useState(getIncomeAmount());
    const[expense,setExpense] = useState(getExpenseAmount());

    useEffect(() => {    
        setIncome(getIncomeAmount());
        setExpense(getExpenseAmount());
    },[expenses]);

    return (
        <>
            <h2 className="summary-info-title text-center mt-5">
                {title}
            </h2>
            <div className="row justify-content-center text-center  m-3 shadow-lg bg-white rounded-pill">
                <div className="col-5 Income-info p-3">
                    <h5>Income</h5>
                    <small className="text-success font-weight-bold">
                        {income}
                    </small>
                </div>
                <span className="border-right"></span>
                <div className="col-5 Expense-info p-3 font-weight-bold">
                    <h5 >Expense</h5>
                    <small className="text-danger">
                        {expense}
                    </small>
                </div>
            </div>
        </>
    )
}

export default ExpenseAccumulativeSummary
