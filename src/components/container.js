import React, { useState } from "react";
import Navbar from "./navbar";
import Homepage from './homepage';
import Resume from './resume';
import Work from './work';
import Footer from './footer';
import '../index.css'

export default function Container() {
	const [currentPage, setCurrentPage] = useState('Homepage');

	const renderPage = () => {
		if (currentPage === 'Homepage') {
			return <Homepage />;
		}
		if (currentPage === 'Resume') {
			return <Resume />;
		}
		if (currentPage === 'Work') {
			return <Work />;
		}
	}

	const handlePageChange = (page) => setCurrentPage(page);

	return(
		<div class='main-container'>
			<h1 className='heading'>Scott Phillips</h1>
			<Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
			<Footer currentPage={currentPage}/>
		</div>
	);
}
