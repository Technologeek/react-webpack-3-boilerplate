import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import { Routes } from './Routes/Routes'

const title = "My minimilistic webssssspack config"
class App extends React.Component {
    render() {
        return (
           <div>
               <div className="title">{title}</div>
               <Routes />
           </div>
        )
    }
}

ReactDOM.render(<App/>, app)
module.hot.accept();