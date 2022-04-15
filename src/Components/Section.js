import React from 'react'
import icon from '../img/location-icon.png'

function Section(props) {
	
	return(
		<div className="content">
			<img src={props.imageUrl} className="img-content" />
			<div className="text-content">
				<div className="location">
					<img src={icon}/>
					<h1>{props.location}</h1>
					<a href={props.googleMapsUrl}>View on Google Maps</a>
				</div>

				<h1 className="title">{props.title}</h1>
				<h1 className="date">{props.startDate} - {props.endDate}</h1>
				<p className="description">{props.description}</p>
			</div>
			<hr style={{marginLeft: "5%"}} style={{display: "none"}}/>
		</div>
	)	
	
}

export default Section
