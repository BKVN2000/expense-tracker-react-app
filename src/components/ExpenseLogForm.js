import React from 'react'

const ExpenseLogForm = () => {
    return (
      <form className="expense-form mt-3">
        <div className="form-group">
          <label for="text-input font-weight-bold">Text</label>
          <input
            type="text"
            className="form-control"
            id="text-input"
            placeholder="Enter text..."
          />
        </div>

        <div className="form-group">
          <label for="Amount-input font-weight-bold">Amount</label>
          <input
            type="number"
            className="form-control"
            id="Amount-input"
            placeholder="Enter amount..."
          />
        </div>

        <div className="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Expense</a>
            <a class="dropdown-item" href="#">Income</a>
        </div>
        <button type="submit" class="btn btn-primary btn-block mt-4">Submit</button>
        </div>
      </form>
    );
}

export default ExpenseLogForm
