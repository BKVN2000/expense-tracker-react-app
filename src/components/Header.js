
import React from 'react'

const Header = ({title}) => {
    return (
        <h5 className="font-weight-bold text-center text-uppercase">
            {title}
        </h5>
    )
}

Header.defaultProps = {
    title: 'Title Bar'
}
export default Header
