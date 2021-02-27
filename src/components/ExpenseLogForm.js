import React, {useState} from 'react'



const ExpenseLogForm = ({onAdd}) => {
    const [expenseName, setText] = useState("");
    const [expenseAmount, setAmount] = useState(0);
    const [expenseType, setType] = useState("");

    const preSubmitForm = (ev) =>{
        ev.preventDefault();
        onAdd({expenseName,expenseAmount,expenseType});
        setText('');
        setAmount(0);
        setType('');
    }

    return (
      <form className="expense-form mt-3" onSubmit={preSubmitForm}>
        <div className="form-group">
          <label htmlFor="text-input font-weight-bold">Text</label>
          <input
            type="text"
            className="form-control"
            id="text-input"
            value={expenseName}
            onChange = {e => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="Amount-input font-weight-bold">Amount</label>
          <input
            type="number"
            className="form-control"
            id="Amount-input"
            value={expenseAmount}
            onChange = {e => setAmount(parseInt(e.target.value))}
            placeholder="Enter amount..."
          />
        </div>

        <div className="form-group">
            <label htmlFor="expense-type-input font-weight-bold">Expense Type</label>
            <select className="expense-type-input form-control form-control-md"  onChange = {e => setType(e.target.value)}
             value={expenseType}>
                <option value="">Select Type</option>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
        </div>

        <button type="submit" value="submit" className="btn btn-primary btn-block mt-4">Submit</button>
      </form>
    );
}

export default ExpenseLogForm
