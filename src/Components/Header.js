import React from 'react'
import icon from '../img/world-icon.png'

function Header() {

	return(
		<div className="header">
			<div className="header--elements">
			<img src={icon} />
			<h1> my travel journal.</h1>
			</div>
		</div>
	)

}

export default Header
