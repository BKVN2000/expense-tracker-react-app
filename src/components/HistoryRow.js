import React from 'react'
import PropTypes from 'prop-types'

const HistoryRow = ({expense}) => {
    const colorTheme = (expense.expenseType === 'Income') ? 'success' : 'danger';
    var borderClass = `history-expenses-row list-group-item mb-2 rounded border
    border-${colorTheme}`;

    borderClass += `list-group-item d-flex justify-content-between align-items-center text-${colorTheme} font-weight-bold`
    return (
        <li className={borderClass}>
            {expense.expenseName}
            <span className={`badge badge-${colorTheme}`}>{expense.expenseAmount}</span>
        </li>
    )
}

HistoryRow.propTypes = {

}

export default HistoryRow
