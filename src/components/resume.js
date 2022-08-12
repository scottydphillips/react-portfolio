import React from "react";
import sdpResume from "../assets/ScottPhillipsTechResume2022.pdf";

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
				<li className='list-inside inline px-2'> <i class="fab fa-html5 fa-2x"></i> </li>
				<li className='inline px-2'><i class="fab fa-css3-alt fa-2x"></i> </li>
				<li className="inline px-2"><i class="fab fa-sass fa-2x"></i></li>
				<li className='inline px-2'><i class="fab fa-bootstrap fa-2x"></i> </li>
				<li className='inline px-2'><i class="fab fa-js-square fa-2x"></i> </li>
				<li className='inline px-2'><i class="fab fa-react fa-2x"></i> </li>
				<li className='inline px-2'><i class="fab fa-node-js fa-2x"></i> </li>
				<li className='inline px-2'><i class='fab fa-php fa-2x'></i></li>
				<li className='inline px-2'><i class="fab fa-wordpress fa-2x"></i></li>
				<li className='inline px-2'><i class="fas fa-database fa-2x"></i></li>
			</ul>
			<br></br>
			<ul className='text-xl'>Currently Learning:
				<br></br>
				<li className='list-inside inline px-2'> <i class="fab fa-linux fa-2x"></i></li>
			</ul>
		</div>
	</div>
	);
}

export default Resume;