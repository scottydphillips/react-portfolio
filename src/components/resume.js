import React from "react";
import sdpResume from "../assets/ScottPhillipsTechResume2021.pdf";

function Resume() {
	return(
	<div>
		<div>
			<a href={sdpResume}>Résumé</a>
		</div>
		<div>
			<ul>Skills and Technologies
				<li><i class="fab fa-html5"></i></li>
				<li><i class="fab fa-css3-alt"></i></li>
				<li><i class="fab fa-js-square"></i></li>
				<li><i class="fab fa-react"></i></li>
				<li><i class="fab fa-node-js"></i></li>
				<li><i class="fas fa-database"></i></li>
			</ul>
		</div>
	</div>
	);
}

export default Resume;