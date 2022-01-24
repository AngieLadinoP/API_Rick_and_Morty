import React from 'react'
import './styles/pagination.css'

const Pagination = (props) => {
    const { prev, next, onPrevious, onNext } = props
    const handlePrevious = () => {
        onPrevious()
    }
    const handleNext = () => {
        onNext()
    }
    return ( <
        div className = "pagination" > {
            prev ? ( <
                button type = "button"
                className = "pagination__button pagination__button--prev"
                onClick = { handlePrevious } >
                Previous <
                /button>
            ) : null
        } {
            next ? ( <
                button type = "button"
                className = "pagination__button pagination__button--next"
                onClick = { handleNext } >
                Next <
                /button>
            ) : null
        } <
        /div>
    )
}

export default Pagination