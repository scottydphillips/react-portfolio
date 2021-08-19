import React from 'react';

function Work() {
	return(
		<div className="md:container md:mx-auto">
			<div className='grid gap-4 cols-2'>
				<span>
					<img src="../../public/images/Listingscreenshot.png" alt='LEaseGIT app screenshot logged in'/>
					<a href="https://still-tundra-21201.herokuapp.com/login">LEaseGIT</a>
					<p>A Real Estate Management and Layout Tool</p>
					<p>Technologies Used: </p>
					<a href="https://github.com/scottydphillips/LEaseGIT">LEaseGIT GitHub Repository</a>
				</span>
				<span>
					<img src="../../public/images/SA1l.png" alt="SA1L screenshot" />
					<a href="https://scottydphillips.github.io/sa1l/">SA1L</a>
					<p>Songs All in One Location!</p>
					<p>Technologies Used: </p>
					<a href="https://github.com/scottydphillips/sa1l">SA1L GitHub Repository</a>
				</span>
			</div>
			<div className='grid gap-4 cols-3'>
				<span>
					<img src="../../public/images/ecommercebackendscreenshot.png" alt='ecommerce back end screenshot' />
					<a href="https://youtu.be/37W7bKwBORU">E-Commerce Back End App Walkthrough Video</a>
					<p>Technologies Used: </p>
					<a href='https://github.com/scottydphillips/ecommerce-back-end'>E-Commerce Back End GitHub Repository</a>
				</span>
				<span>
					<img src="../../public/images/team-profile-generated.png" alt="Team Profile Generator App screenshot" />
					<a href="https://youtu.be/CpIfqz1Uvdk">Team Profile Generator App</a>
					<p>Technologies Used:</p>
					<a href="https://github.com/scottydphillips/sdp-team-profile-generator">Team Profile Generator GitHub Repository</a>
				</span>
				<span>
					<img src='../../public/images/DayPlanner.png' alt='Day Planner App Screenshot' />
					<a href='https://scottydphillips.github.io/sdp-day-planner/'>Day Planner App</a>
					<p>Technologies Used: jQuery, JavaScript</p>
					<a href='https://github.com/scottydphillips/sdp-day-planner'>Day Planner App GitHub Repository</a>
				</span>
			</div>
		</div>
	)
}

export default Work;