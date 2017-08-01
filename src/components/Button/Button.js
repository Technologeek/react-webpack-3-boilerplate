import React from 'react'
import PropTypes from 'prop-types'
import 'bulma/css/bulma.css'

export const Button = (props) => {
	var throwAlert = () => alert("some hey")
    return (
        <div>
		<div className="columns">
		<div className="column is-half">
		<a className="button is-danger"  onClick={throwAlert}>{props.btnName}</a>
		</div>
		</div> 
		</div>
    )
}
Button.propTypes = {
	btnName: PropTypes.string
}