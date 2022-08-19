import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Layout(props) {
	return (
		<div>
			<header>
				<NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/Chats'}>Chats</NavLink>
        <NavLink to={'/Profile'}>Profile</NavLink>
			</header>
			<main>
				<Outlet/>
			</main>
			<footer>

			</footer>
		</div>
	);
}

export default Layout;