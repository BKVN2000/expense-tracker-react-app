import React from 'react'
import PropTypes from 'prop-types'
import HistoryRow from './HistoryRow'

const HistoryExpenseContainer = ({expenses}) => {
    return (
        <div class="row mt-4">
            <div className = "col-12">
                <ul class="list-group">
                    {expenses.map((expense)=>(<HistoryRow key={expense.id} expense={expense}/>))}
                </ul>
            </div>
        </div>
    )
}

HistoryExpenseContainer.propTypes = {

}

export default HistoryExpenseContainer
