import React from 'react'
import { Button }  from '../../components/Button/Button'

export class About extends React.Component {
	render() {
		return (
			<div>
			    <div className="column is-half is-offset-one-quarter">
			        <div className="container is-fluid">
			            <div className="notification">
			                Programs must be written for people to read, and only incidentally for machines to execute.
			                <strong>-Abelson/Sussman</strong> 
			            </div>
			        </div>
			    </div>
			    <div className="column is-half is-narrow is-offset-one-quarter">
			        <Button btnName={ "Throw Alert!"}/>
			    </div>
			</div>
			)
	}
}