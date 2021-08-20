import React from 'react';
import "../index.css"

function Navbar({ currentPage, handlePageChange }) {
	return(
		<nav className="navbar header">
			<div className="inline">	
				<ul>
						<li className='inline'><a href="#home" onClick={() => handlePageChange('Homepage')}
						className={currentPage === 'Home' ? 'nav-link-active' : 'nav-link'}>Home </a></li>
						<li className='inline'><a href="#resume" onClick={() => handlePageChange('Resume')}
						className={currentPage === 'Resume' ? 'nav-link-active' : 'nav-link'}>Résumé </a></li>
						<li className='inline'><a href="#work" onClick={() => handlePageChange('Work')}
						className={currentPage === 'Work' ? 'nav-link-active' : 'nav-link'}>Work </a></li>
						<li className='inline'><a href="#footer">Contact Me </a></li>
				</ul>
			</div>
		</nav>
	)
}

export default Navbar;