import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Components/Header'
import PageBody from './Components/PageBody'
import './index.css'

function App() {
	return(
		<>
			<Header />
			<PageBody />
		</>
	)
}

ReactDOM.render(<App />, document.querySelector("#root"))
