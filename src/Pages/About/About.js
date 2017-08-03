import React from 'react'
import { Button }  from '../../components/Button/Button'

export class About extends React.Component {
	render() {
		return (
			<div>
			    <div className="container is-fluid">
			        <div className="notification">
			         This container is <strong>fluid</strong>: it will have a 24px gap on either side, on any viewport size.
			        </div>
			    </div>
			    <Button btnName={ "Throw Alert!"}/>
			</div>
			)
	}
}