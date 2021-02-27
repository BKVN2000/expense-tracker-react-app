import React from 'react'
import PropTypes from 'prop-types'

const BalanceInfo = props => {
    return (
        <div className="row mt-4">
            <h5 className="col-12 text-uppercase"> 
                Your Balance
            </h5>
            <p className="col-12 text-uppercase font-weight-bold"> 
                Rp.600.000,00
            </p>
            
        </div>
    )
}

BalanceInfo.propTypes = {

}

export default BalanceInfo
