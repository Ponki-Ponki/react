import React, { useState, useEffect } from "react";
import { loginInitiate } from "../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate} from 'react-router-dom';


const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const user = useSelector(state => state.currentUser);
	const navigate = useNavigate();
	

	useEffect(() => {
		if(user){
			navigate("/")
		}
	},[user, navigate])

	const handleSubmit = (e) => {
		e.preventDefault()
		if (!email || !password) {
			return;
		}
		dispatch(loginInitiate(email,password))
	}

	return (
		<div>
			<h1>login</h1>
			<form onSubmit={handleSubmit}>
				<input value={email} onChange={e => setEmail(e.target.value)}/>
				<input value={password} onChange={e => setPassword(e.target.value)}/>
				<button type="submit">SIGN IN</button>
			</form>
		</div>
	);
}

export default Login;