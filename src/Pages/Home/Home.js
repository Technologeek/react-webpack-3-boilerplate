import React from 'react'
import { NavBar }  from '../../components/Navbar/NavBar'
import { BrowserRouter as Router } from 'react-router-dom'

export class Home extends React.Component {
	render() {
		return (
			<div>
			<NavBar menu1={"Home"} menu2={"About"} />
			<div className="columns">
			    <div className="column is-half">
			    <ul>
			           <li>Things About me </li>
			           <li>Things I say</li>
			           <li>Things I do</li>
			         </ul>
			    </div>
			    </div>
			</div>

			)
	}
}