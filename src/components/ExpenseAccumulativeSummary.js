import React from 'react'

const ExpenseAccumulativeSummary = ({title}) => {
    return (
        <>
            <h2 className="summary-info-title text-center mt-5">
                {title}
            </h2>
            <div className="row justify-content-center text-center  m-3 shadow-lg bg-white rounded-pill">
                <div className="col-5 Income-info p-3">
                    <h5>Income</h5>
                    <small className="text-success font-weight-bold">
                        Rp.500.000,00
                    </small>
                </div>
                <span class="border-right"></span>
                <div className="col-5 Expense-info p-3 font-weight-bold">
                    <h5 >Expense</h5>
                    <small className="text-danger">
                        Rp.500.000,00
                    </small>
                </div>
            </div>
        </>
    )
}

export default ExpenseAccumulativeSummary
