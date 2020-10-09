import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
// import App from './src/App'
import Board from './Components/Board'

const Out = () => {
    return (
        <Fragment>
            <Board />
        </Fragment>
    )
}

ReactDOM.render(<Out />, document.querySelector('#root'));

