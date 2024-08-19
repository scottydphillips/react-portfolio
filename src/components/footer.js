import React from 'react';
import "../index.css"

function Footer(props) {
		return(
		<div className={props.currentPage === 'Resume' ? 'footer footer-absolute' : 'footer'} >
			<h3 className="contact-me">Contact Me</h3>
			<a href='mailto:scotty.d.phillips@gmail.com'> <i class="fas fa-envelope-square fa-2x"></i> </a>
			<a href='https://www.linkedin.com/in/scott-phillips-0b0019149/'> <i class="fab fa-linkedin fa-2x"></i> </a>
			<a href='https://github.com/scottydphillips'> <i class="fab fa-github fa-2x"></i> </a>
		</div>
	)
}

export default Footer;