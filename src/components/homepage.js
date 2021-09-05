import React from 'react';
import spHeadshot from "../assets/Singularity_Quartet8546-Edit.jpeg"
import '../index.css'

function Homepage() {
	return(
		<div>
			<h3 className='text-xl text-yellow-800'>Hi, I'm Scott Phillips!</h3>
			<p className='inline mx-1'>I am a full stack web developer leveraging background in education and music performance who can provide a unique perspective on how end-users interact with web and mobile applications. I have been gaining web development experience using HTML, CSS, Node.Js, Express.Js, and React.Js. I am passionate about developing mobile apps, web sites with mobile-first design, integrated database design, also I possess strengths in creativity, teamwork (both in-person and virtual), and problem solving. My experiences in education and music performance lend themselves to being able to recognize what will work in an expedient manner paired with a strong work ethic. Using everything mentioned above, I’m excited to design solutions with an intuitive and user-friendly experience at the forefront of every project.</p>
			<p>When not programming, I play tenor saxophone in <a className='text-indigo-700' href='https://singularityquartet.com'>Singularity Saxophone Quartet</a> or can be found spending time with my family.</p>
			<br></br>
			<img className='h-96 inline shadow-lg md:float-center md:object-scale-down rounded-xl' src={spHeadshot} alt="SP a la True Detective Intro"></img>

		</div>
	);
}

export default Homepage;