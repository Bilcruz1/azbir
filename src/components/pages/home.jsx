import React from 'react';
import HeroSection from '../heroSection.jsx';
import Nav from '../nav.jsx';

const Home = () => {
	return (
		<>
			<div className="font-outfit">
				<Nav />
				<HeroSection />
			</div>
		</>
	);
};

export default Home;
