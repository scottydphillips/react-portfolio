import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
	return(
		<nav className="navbar">
			<ul>
					<li><a href="#home">Home</a></li>
					<li><a href="#resume">Résumé</a></li>
					<li><a href="#work">Work</a></li>
					<li><a href="#contactMe">Contact Me</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;