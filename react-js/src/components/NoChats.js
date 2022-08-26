import React from 'react';
import ListChats from '../pages/ListChats';

function NoChats(props) {
	console.log('good');
	return (
	<>
	<span>Please select a chat</span>
	<ListChats />
	</>
	);
}	export default NoChats;