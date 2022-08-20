import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Links from './Links';

function Layout(props) {
	return (
		<div>
			<header className='header'>
				<Links to={'/'} name={'Home'} />
				<Links to={'/Chats'} name={'Chats'} />
				<Links to={'/Profile'} name={'Profile'} />
			</header>
			<main>
				<Outlet/>
			</main>
			<footer>
				a
			</footer>
		</div>
	);
}

export default Layout;