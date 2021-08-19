import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
	return(
		<nav className="navbar">
			<ul>
					<li><a href="#home" onClick={() => handlePageChange('Homepage')}
					className={currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}>Home</a></li>
					<li><a href="#resume" onClick={() => handlePageChange('Resume')}
					className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}>Résumé</a></li>
					<li><a href="#work" onClick={() => handlePageChange('Work')}
					className={currentPage === 'Work' ? 'nav-link-active' : 'nav-link'}>Work</a></li>
					<li><a href="#footer">Contact Me</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;