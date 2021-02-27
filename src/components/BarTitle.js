import React from 'react'

const BarTitle = ({title}) => {
    return (
        <React.Fragment>
            <h4 class="d-block font-weight-bold mb-2 mt-4">
                {title} 
            </h4>
            <div class="border-bottom border"></div>
        </React.Fragment>
    )
}

BarTitle.defaultProps = {
    title: ''
}

export default BarTitle
