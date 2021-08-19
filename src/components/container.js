import React, { useState } from "react";
import Navbar from "./navbar";
import Homepage from './homepage';
import Resume from './resume';
import Work from './work';

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
		<div>
			<Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
			{renderPage()}
		</div>
	);
}
