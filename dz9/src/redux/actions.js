import * as types from './actionTypes'
import { auth } from '../services/firebase'

const registerStart = () => (
	{
		type: types.REGISTER_START
	}
)

const registerSuccess = (user) => (
	{
		type: types.REGISTER_SUCCESS,
		payload: user,
	}
)

const registerError = (er) => (
	{
		type: types.REGISTER_ERROR,
		payload: er,
	}
)

const loginStart = () =>(
	{
		type: types.LOGIN_START
	}
)
const loginSuccess = (user) =>(
	{
		type: types.LOGIN_SUCCESS,
		payload: user,
	}
)
const loginError = (er) =>(
	{
		type: types.LOGIN_ERROR,
		payload: er,
	}
)

const logOutStart = () =>(
	{
		type: types.LOGOUT_START
	}
)
const logOutSuccess = () =>(
	{
		type: types.LOGOUT_SUCCESS,
	}
)
const logOutError = (er) =>(
	{
		type: types.LOGOUT_ERROR,
		payload: er,
	}
)

export const registerInitiate = (email, password , name) => {
	return (dispatch) => {
		dispatch(registerStart());
		console.log('user')
		auth
				.createUserWithEmailAndPassword(email,password)
				.then(({ user }) =>{
					user.updateProfile({name})
					dispatch(registerSuccess(user))
				})
				.catch(error => dispatch(registerError(error)))
	}
}


export const loginInitiate = (email, password) => {
	return(dispatch) => {
		dispatch(loginStart())
		auth
				.signInWithEmailAndPassword(email,password)
				.then(({user})=> {
					dispatch(loginSuccess(user))
				})
				.catch(err => dispatch(loginError(err)))
	}
}

export const logoutInitiate = () => {
	return(dispatch)=>{
		dispatch(logOutStart())
		auth
				.signOut()
				.then(()=> dispatch(logOutSuccess()))
				.catch(er => logOutError(er))
	}
}