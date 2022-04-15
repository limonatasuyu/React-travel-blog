import React from 'react'
import Section from './Section'
import data from '../data'

function PageBody() {

 var Sections = data.map(item => {
 		return(
 			<Section 
 				key = {item.id}
 				{...item}
 			/>
 		)
 	}
 )

	return(
		<div className="page--body">
			{Sections}
		</div>
	)

}

export default PageBody

