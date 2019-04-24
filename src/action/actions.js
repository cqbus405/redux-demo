import fetch from 'cross-fetch'

export const IS_FETCHING = 'IS_FETCHING'
export const HANDLE_RESPONSE = 'HANDLE_RESPONSE'
export const GET = 'GET'

const fetching = fetching => {
	return {
		type: IS_FETCHING,
		fetching
	}
}

const handleResponse = response => {
	return {
		type: HANDLE_RESPONSE,
		destinations: response
	}
}

export const get = url => {
	return dispatch => {
		dispatch(fetching(true))

		return fetch(url)
			.then(response => response.json())
			.then(json => {
				dispatch(fetching(false))
				dispatch(handleResponse(json.data))
			})
	}
}