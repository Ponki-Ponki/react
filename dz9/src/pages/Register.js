import { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { registerInitiate } from "../redux/actions";
import {Link, useNavigate} from 'react-router-dom'

const Register = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordRe, setPasswordRe] = useState('');
	const [name, setName] = useState('');
	const dispatch = useDispatch();
	const user = useSelector(state => state.currentUser)
	const navigate = useNavigate();

	useEffect(() => {
		if(user) {
				navigate('/')
		}
	}, [user, navigate])


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
				Name:
				<input value={name} onChange={e => setName(e.target.value)}/>
				Email:
				<input value={email} type={email} onChange={e => setEmail(e.target.value)}/>
				Password:
				<input value={password} type={password} onChange={e => setPassword(e.target.value)}/>
				Password confirm:
				<input value={passwordRe} type={password} onChange={e => setPasswordRe(e.target.value)}/>
				<button type="submit">Registration</button>
			</form>
		</div>
	);
}

export default Register;