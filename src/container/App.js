import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import Main from './Main'

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Main />
				</div>
			</Provider>
		)
	}
}

export default App;
