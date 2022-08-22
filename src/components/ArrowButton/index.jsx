import * as React from 'react'
import './index.scss'

const ArrowButton = (props) => {
    const {onClick, disabled, direction} = props

    return (
        <div
            className={`arrow-button ${direction} ${disabled ? 'disabled' : ''}`}
            onClick={onClick}
        />
    )
}

export default ArrowButton