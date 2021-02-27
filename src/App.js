import BalanceInfo from './components/BalanceInfo'
import Header from './components/Header'
import ExpenseAccumulativeSummary from './components/ExpenseAccumulativeSummary'
import BarTitle from './components/BarTitle'
import React, { useState, useEffect } from 'react';
import HistoryExpenseContainer from './components/HistoryExpenseContainer';
import ExpenseLogForm from './components/ExpenseLogForm';

function App() {
  const [expenses, setExpenses] = useState([{
      id : 1,
      expenseName : 'Beli Saham BBCA',
      expenseAmount : 3600000, 
      expenseDate : '05 February 2021', 
      expenseType : 'Expense',
    },
    {
      id : 2,
      expenseName : 'Gajian',
      expenseAmount : 4700000, 
      expenseDate : '05 February 2021', 
      expenseType : 'Income',
    },
    {
      id : 3,
      expenseName : 'Beli eskrim',
      expenseAmount : 3600000, 
      expenseDate : '05 February 2021', 
      expenseType : 'Expense',
    }
  ]);

  const onAdd = (expense) =>{
    const id = expenses[expenses.length - 1].id + 1;
    const newExpense = {id,...expense};
    const newExpenses = [...expenses,newExpense];
    setExpenses(newExpenses);
  }

  return (
    <div className="container justify-content-center mt-5 bg-light p-3">
      <Header title="expense tracker"/>
      <BalanceInfo/>
      <ExpenseAccumulativeSummary expenses = {expenses}/>
      <BarTitle title='History' />
      <HistoryExpenseContainer expenses = {expenses}/>
      <BarTitle title='Add new Transaction' />
      <ExpenseLogForm onAdd={onAdd}/>
    </div>
  );
}

export default App;
