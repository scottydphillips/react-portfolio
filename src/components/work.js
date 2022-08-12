import React from 'react';
import LEaseGIT from "../assets/Listingscreenshot.png"
import SA1L from "../assets/SA1L.png"
import rhythmr from '../assets/rhythmr1.png';
import mient from '../assets/michiganentallergyhomepage.png';
import bbgf from '../assets/bbgf.png';
import '../index.css'

function Work() {
	return(
		<div className="md:container md:mx-auto">
			<div className='flex md:flex grid'>
				<div className='card-container flex-wrap items-baseline md:flex-wrap gap-4 m-4 w-1/2 justify-center'>
					<div className='image-container h-auto'>
						<img className='h-72 rounded shadow-l inline md:float-center' src={bbgf} alt="Blackbaud Giving Fund Homepage" />
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href="https://www.blackbaudgivingfund.org">Blackbaud Giving Fund</a>
						<p className='tech-used'>Technologies Used: PHP, JavaScript, SCSS, Boostrap WordPress</p>
						<p>Converted Static HTML & CSS website to WordPress CMS using a custom theme. Completed as a project for <a className='app-link text-indigo-700' href='https://www.elexicon.com'>Elexicon</a>.</p>
					</div>
				</div>
				<div className='card-container flex-wrap items-baseline md:flex-wrap gap-4 m-4 w-1/2 justify-center'>
					<div className='image-container h-auto'>
						<img className='h-72 rounded shadow-l inline md:float-center' src={mient} alt='Michigan ENT and Allergy Homepage' />
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href='https://www.michiganentallergy.com'>Michigan ENT & Allergy</a>
						<p className='tech-used'>Technologies Used: PHP, JavaScript, SCSS, Bootstrap WordPress</p>
						<p>Converted website using Divi theme to custom WordPress theme. Completed as a project from <a className='app-link text-indigo-700' href='https://www.elexicon.com'>Elexicon</a>.</p>
					</div>
				</div>
			</div>
			<div className='flex md:flex grid'>
				<div className='card-container flex-wrap md:flex-wrap gap-4 m-4 w-1/3 justify-center extraPadding'> 
					<div className='image-container h-auto gap-4'>
						<img className='h-72 rounded shadow-l inline md:float-center' src={LEaseGIT} alt='LEaseGIT app screenshot logged in'/>
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href="https://still-tundra-21201.herokuapp.com/login">LEaseGIT</a>
						<p className='app-description'>A Real Estate Management and Layout Tool</p>
						<p className='tech-used'>Technologies Used: JavaScript, Express.Js, Node.Js, Handlebars.Js </p>
						<a className='github-link text-indigo-700' href="https://github.com/scottydphillips/LEaseGIT">LEaseGIT GitHub Repository</a>
					</div>
				</div>
				<div className='card-container flex-wrap md:flex-wrap gap-4 m-4 w-1/3 justify-center extraPadding'>
					<div className='image-container h-auto'>
						<img className='h-72 rounded shadow-l inline md:float-center' src={SA1L} alt="SA1L screenshot" />
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href="https://scottydphillips.github.io/sa1l/">SA1L</a>
						<p className='app-description'>Songs All in One Location!</p>
						<p className='tech-used'>Technologies Used: HTML, CSS, Bootstrap</p>
						<a className='github-link text-indigo-700' href="https://github.com/scottydphillips/sa1l">SA1L GitHub Repository</a>
					</div>
				</div>
				<div className='card-container flex-wrap md:flex-wrap gap-4 m-4 w-1/3 justify-center extraPadding'> 
					<div className='image-container h-auto'>
						<img className='h-72 rounded shadow-l inline md:float-center' src={rhythmr} alt='rhythmr app screenshot logged in'/>
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href="https://protected-ocean-95832.herokuapp.com/">RhythmR</a>
						<p className='app-description'>A Rhythm Teaching Tool</p>
						<p className='tech-used'>Technologies Used: React.Js, Tone.Js, Tailwind CSS</p>
						<a className='github-link text-indigo-700' href="https://github.com/scottydphillips/RhythmR">RhythmR GitHub Repository</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work;