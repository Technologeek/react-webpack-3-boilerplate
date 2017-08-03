import React from 'react'
import { NavBar }  from '../../components/Navbar/NavBar'

export class Home extends React.Component {
	render() {
		return (
			<div>
			    <NavBar menu1={ "Home"} menu2={ "About"} />
			    <div className="columns">
			        <div className="column is-half is-offset-one-quarter">
			            <ul>
			                <li>It's hard enough to find an error in your code when you're 
			                looking for it; it's even harder when you've assumed your code is error-free. </li>
			                <li>If debugging is the process of removing software bugs, 
			                then programming must be the process of putting them in.  </li>
			                <li>Always code as if the guy who ends up maintaining your code 
			                will be a violent psychopath who knows where you live.  </li>
			            </ul>
			        </div>
			    </div>
			</div>
		)
   	}
}