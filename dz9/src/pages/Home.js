import { logoutInitiate } from "../redux/actions";
import { useDispatch,useSelector } from "react-redux";
import { useNavigate} from 'react-router-dom';


const Home = () => {
	const user = useSelector(state => state.currentUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handlAuth = () => {
		if(user){
			dispatch(logoutInitiate())
		}
		setTimeout(()=> {
			navigate('/login')
		}, 2000)
	}
	return (
		<div>
			home
			<button onClick={handlAuth}>log out</button>
		</div>
	);
}

export default Home;
