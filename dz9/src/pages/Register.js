import { useState } from "react";
import {useDispatch} from 'react-redux'
import { registerInitiate } from "../redux/actions";
import {Link} from 'react-router-dom'

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRe, setPasswordRe] = useState('');
	const [name, setName] = useState('');
	const dispatch = useDispatch();


	const handleSubmit = (e) => {
		e.preventDefault();
		if (password !== passwordRe){
			return;
		}
		dispatch(registerInitiate(email,password,name))
	}


	return (
		<div>
			<header>
				<Link to={'/login'}>SIGN IN</Link>
			</header>
			<form onSubmit={handleSubmit}>
				<h4>REGISTRATION</h4>
				<input value={email} onChange={e => setEmail(e.target.value)}/>
				<input value={password} onChange={e => setPassword(e.target.value)}/>
				<input value={passwordRe} onChange={e => setPasswordRe(e.target.value)}/>
				<input value={name} onChange={e => setName(e.target.value)}/>
				<button type="submit">Registration</button>
			</form>
		</div>
	);
}

export default Register;