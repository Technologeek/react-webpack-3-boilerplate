import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import { Routes } from './Routes/Routes'

const title = "Minimilistic React-webpack-3-boilerplate [2017]"
class App extends React.Component {
    render() {
        return (
        	<div>
        	    <div className="column is-half is-offset-one-quarter">
        	        <div className="title">{title}</div>
        	    </div>
        	    <Routes />
        	</div>
        )
    }
}

ReactDOM.render(<App/>, app)
module.hot.accept();