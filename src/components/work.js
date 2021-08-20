import React from 'react';
import LEaseGIT from "../assets/Listingscreenshot.png"
import DayPlanner from "../assets/DayPlanner.png";
import SA1L from "../assets/SA1L.png"
import ecommerce from "../assets/ecommercebackendscreenshot.png"
import teamProfile from "../assets/team-profile-generated.png"
import '../index.css'

function Work() {
	return(
		<div className="md:container md:mx-auto">
			<div className='grid gap-4 grid-cols-2 flex'>
				<div className='card-container flex-wrap'> 
					<div className='image-container h-auto'>
						<img className='h-72 rounded-l shadow-l' src={LEaseGIT} alt='LEaseGIT app screenshot logged in'/>
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href="https://still-tundra-21201.herokuapp.com/login">LEaseGIT</a>
						<p className='app-description'>A Real Estate Management and Layout Tool</p>
						<p className='tech-used'>Technologies Used: JavaScript, Express.Js, Node.Js, Handlebars.Js </p>
						<a className='github-link text-indigo-700' href="https://github.com/scottydphillips/LEaseGIT">LEaseGIT GitHub Repository</a>
					</div>
				</div>
				<div className='card-container flex-wrap'>
					<div className='image-container h-auto'>
						<img className='h-72 rounded-l shadow-l' src={SA1L} alt="SA1L screenshot" />
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href="https://scottydphillips.github.io/sa1l/">SA1L</a>
						<p className='app-description'>Songs All in One Location!</p>
						<p className='tech-used'>Technologies Used: HTML, CSS, Bootstrap</p>
						<a className='github-link text-indigo-700' href="https://github.com/scottydphillips/sa1l">SA1L GitHub Repository</a>
					</div>
				</div>
			</div>
			<div className='grid gap-4 grid-cols-3 flex'>
				<div className='card-container flex-wrap items-baseline extraPadding'>
					<div className='image-container h-auto'>
						<img className='h-72 rounded-l shadow-l' src={ecommerce} alt='ecommerce back end screenshot' />
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href="https://youtu.be/37W7bKwBORU">E-Commerce Back End App Walkthrough Video</a>
						<p className='tech-used'>Technologies Used: Express.Js, Node.Js, MySQL</p>
						<a className='github-link text-indigo-700 text-sm' href='https://github.com/scottydphillips/ecommerce-back-end'>E-Commerce Back End GitHub Repository</a>
					</div>
				</div>
				<div className='card-container flex-wrap items-baseline extraPadding'>
					<div className='image-container h-auto'>
						<img className='h-72 rounded-l shadow-l' src={teamProfile} alt="Team Profile Generator App screenshot" />
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href="https://youtu.be/CpIfqz1Uvdk">Team Profile Generator App</a>
						<p className='tech-used'>Technologies Used: Express.Js, Node.Js, Inquirer.Js</p>
						<a className='github-link text-indigo-700' href="https://github.com/scottydphillips/sdp-team-profile-generator">Team Profile Generator GitHub Repository</a>
					</div>
				</div>
				<div className='card-container flex-wrap items-baseline extraPadding'>
					<div className='image-container h-auto'>
						<img className='h-72 rounded-l shadow-l' src={DayPlanner} alt='Day Planner App Screenshot' />
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href='https://scottydphillips.github.io/sdp-day-planner/'>Day Planner App</a>
						<p className='tech-used'>Technologies Used: jQuery, JavaScript</p>
						<a className='github-link text-indigo-700' href='https://github.com/scottydphillips/sdp-day-planner'>Day Planner App GitHub Repository</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work;