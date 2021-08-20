import React from "react";
import sdpResume from "../assets/ScottPhillipsTechResume2021.pdf";

function Resume() {
	return(
	<div>
		<div className='justify-items-center content-center'>
			<a className='text-indigo-700 text-xl' href={sdpResume}>View my Résumé</a>
		</div>
		<br></br>
		<div className='justify-items-center content-center'>
			<ul className='text-xl'>Skills and Technologies:
			<br></br>
				<li className='list-inside inline'> <i class="fab fa-html5 fa-2x"></i> </li>
				<li className='inline'><i class="fab fa-css3-alt fa-2x"></i> </li>
				<li className='inline'><i class="fab fa-bootstrap fa-2x"></i> </li>
				<li className='inline'><i class="fab fa-js-square fa-2x"></i> </li>
				<li className='inline'><i class="fab fa-react fa-2x"></i> </li>
				<li className='inline'><i class="fab fa-node-js fa-2x"></i> </li>
				<li className='inline'><i class="fas fa-database fa-2x"></i></li>
			</ul>
		</div>
	</div>
	);
}

export default Resume;