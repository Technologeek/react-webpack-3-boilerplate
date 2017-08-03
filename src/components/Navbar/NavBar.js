import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import 'bulma/css/bulma.css'
import './navBar.css'
export const NavBar = (props) => {
    return (
     <div className="column is-half is-offset-one-quarter">
         <nav className="navbar ">
             <div id="navMenuExample" className="navbar-menu">
                 <div className="navbar-start">
                     <NavLink exact activeClassName="navbar-item" to='/'>{props.menu1}</NavLink>
                     <NavLink className="navbar-item topPadding" to='/about'>{props.menu2}</NavLink>
                 </div>
             </div>
         </nav>
     </div>					
    )
}
NavBar.propTypes = {
    menu1: PropTypes.string,
    menu2: PropTypes.string
}
