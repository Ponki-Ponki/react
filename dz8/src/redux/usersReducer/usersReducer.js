import { GET_USERS,GET_USERS_ERROR,GET_USERS_LOADING } from "../actionType"
const initialState = {
	users:[ ],
	loading: false,
	error: null
}

export const usersReducer = (state = initialState, action) => {
	switch (action.type){
		case GET_USERS_LOADING:
			return {
				...state,
				loading: true
			}
		case GET_USERS_ERROR:
			return{
				...state,
				error: action.payload,
				loading: false
			}
		case GET_USERS: 
			return{
				...state,
				users: action.payload,
				loading: false
			}


		default: return state
	}
}

export const getUsers = () =>{
	return async dispatch => {
		dispatch({type: GET_USERS_LOADING})
		const response = await fetch('https://jsonplaceholder.typicode.com/users')
		if (response.status !== 200){
			return dispatch({type: GET_USERS_ERROR, payload: response.status});
		}
		const data = await response.json()
		dispatch({type: GET_USERS, payload: data})
	}
}