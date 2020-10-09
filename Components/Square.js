import React from 'react'
import '../src/style.css'

const Square = (props) => {
    return (
        <button className='square' onClick={props.onClick}> {props.value} </button>
    )

}

export default Square