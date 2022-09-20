import logo from '../assets/909-iso-black.svg'
import React, { useState} from 'react';
import './NavigationBar.css'
import { Link, useMatch, useResolvedPath } from 'react-router-dom';


const NavigationBar = props => {

	return (
		<>
			<div className='nav'>
				<Link to="/"><img src={logo} className='logo' /></Link>
				<ul>
					<CustomLink to="/" >Home</CustomLink>
					<CustomLink to="/work">Work</CustomLink>
					<CustomLink to="/about-us">About Us</CustomLink>
					<CustomLink to="/contact">Contact</CustomLink>
				</ul>
				<div className='empty-corner'></div>
				{/* <a onClick={openMenu} className='corner'><img src={menubars} className='menu-bars' /></a> */}
			</div>
		</>
	);
}

export default NavigationBar;

function CustomLink({to, children, ...props}){
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path:resolvedPath.pathname, end:true});
	return(
		<li >
			
			<Link to={to} className={isActive ? 'list active' : 'list'}{...props}>{children}</Link>
		</li>
	)
}