import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Count() {
const count = useSelector(state => state.count)
const dispatch = useDispatch();
	return (
		<div>
			<button onClick={()=>dispatch({type: 'minus'})}>-</button>
			{count}
			<button onClick={()=>dispatch({type: 'plus'})}>+</button>
		</div>
	);
}

export default Count;