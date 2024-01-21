// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS for styling

function Navbar() {
	const [isNavbarOpen, setIsNavbarOpen] = useState(false);

	const toggleNavbar = () => {
		setIsNavbarOpen(!isNavbarOpen);
	};

	return (
		<div className={`navbar-nav ${isNavbarOpen ? 'open-nav' : ''}`}>
			<button className={`toggle-button-nav ${isNavbarOpen ? 'hidden' : ''}`} onClick={toggleNavbar}>
				☰
			</button>
			{isNavbarOpen && (
				<>
					<button className="close-button-nav" onClick={toggleNavbar}>
						X
					</button>
					<ul className='apple'>
						<li><a href="#scrolltop">HOME</a></li>
						<li><a href="#scroll1">JOIN #TEAMTREES</a></li>
						<li><a href="#scroll2">LEADERBOARD</a></li>
						<li><a href="#scroll3">ARTICLES</a></li>	
						<li><a href="#scroll4">SOCIALS</a></li>
						{/* Add more menu items as needed */}
					</ul>
				</>
			)}
		</div>
	);
}

export default Navbar;
