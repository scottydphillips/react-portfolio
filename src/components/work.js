import React from 'react';
import mient from '../assets/michiganentallergyhomepage.png';
import bbgf from '../assets/bbgf.png';
import partitionsPlus from '../assets/partitionsPlus.png'
import '../index.css'

function Work() {
	return(
		<div className="md:container md:mx-auto">
			<div className='flex md:flex grid'>
				<div className='card-container flex-wrap items-baseline md:flex-wrap gap-4 m-4 md:w-1/3 justify-center'>
					<div className='image-container h-auto'>
						<img className='h-72 rounded shadow-l inline md:float-center' src={bbgf} alt="Blackbaud Giving Fund Homepage" />
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href="https://www.blackbaudgivingfund.org">Blackbaud Giving Fund</a>
						<p className='tech-used'>Technologies Used: PHP, JavaScript, SCSS, Bootstrap WordPress</p>
						<p>Converted Static HTML & CSS website to WordPress CMS using a custom theme. Completed as a project for <a className='app-link text-indigo-700' href='https://www.elexicon.com'>Elexicon</a>.</p>
					</div>
				</div>
				<div className='card-container flex-wrap items-baseline md:flex-wrap gap-4 m-4 md:w-1/3 justify-center'>
					<div className='image-container h-auto'>
						<img className='h-72 rounded shadow-l inline md:float-center' src={mient} alt='Michigan ENT and Allergy Homepage' />
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href='https://www.michiganentallergy.com'>Michigan ENT & Allergy</a>
						<p className='tech-used'>Technologies Used: PHP, JavaScript, SCSS, Bootstrap WordPress</p>
						<p>Converted website using Divi theme to custom WordPress theme. Completed as a project for <a className='app-link text-indigo-700' href='https://www.elexicon.com'>Elexicon</a>.</p>
					</div>
				</div>
				<div className='card-container flex-wrap items-baseline md:flex-wrap gap-4 m-4 md:w-1/3 justify-center'>
					<div className='image-container h-auto'>
						<img className='h-72 rounded shadow-l inline md:float-center' src={partitionsPlus} alt='Partitions Plus Homepage' />
					</div>
					<div className='image-text'>
						<a className='app-link text-indigo-700' href='https://www.partitions.plus'>Partitions Plus</a>
						<p className='tech-used'>Technologies Used: PHP, JavaScript, SCSS, Bootstrap WordPress</p>
						<p>Created custom WordPress theme. Completed as a project for <a className='app-link text-indigo-700' href='https://www.elexicon.com'>Elexicon</a>.</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Work;