import React from 'react';
import { Outlet } from 'react-router-dom';
import Links from './Links';

function Layout(props) {
	return (
		<div>
			<header className='header'>
				<Links to={'/'} name={'Home'} />
				<Links to={'/ListChats'} name={'ListChats'} />
				<Links to={'/Profile'} name={'Profile'} />
			</header>
			<main>
				<Outlet/>
			</main>
			<footer>
				footer
			</footer>
		</div>
	);
}

export default Layout;