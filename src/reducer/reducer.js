import { combineReducers } from 'redux'
import { IS_FETCHING, HANDLE_RESPONSE, GET } from '../action/actions'

const fetching = (state = false, action) => {
	switch (action.type) {
		case IS_FETCHING:
			return action.fetching
		default:
			return state
	}
}

const destinations = (state = [], action) => {
	switch (action.type) {
		case HANDLE_RESPONSE:
			return action.destinations
		default: 
			return state
	}
}

const reducer = combineReducers({
	destinations,
	fetching
})

export default reducer