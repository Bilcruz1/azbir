import React, { useState, useEffect } from 'react';
import logo from '../assets/images/Azbir-logo.png';
import menuopen from '../assets/icons/menu-open-icon.svg';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import search from '../assets/icons/search.svg';
import cart from '../assets/icons/cart.svg';
import flag from '../assets/icons/flag.svg';
import openIitems from '../assets/icons/openItems.svg';
import Hamburger from './hamburger.jsx';

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('home');
	const [cartCount, setCartCount] = useState(0);
	const navigate = useNavigate();
	const location = useLocation();

	const sections = ['home', 'Jallabiya', 'kaftan', 'contact'];

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [location]);

	useEffect(() => {
		const currentPath = location.pathname;
		if (currentPath === '/Jallabiya') setActiveSection('Jallabiya');
		else if (currentPath === '/kaftan') setActiveSection('kaftan');
		else if (currentPath === '/') setActiveSection('home');
		else if (currentPath === '/agbada') setActiveSection('agbada');
	}, [location]);

	useEffect(() => {
		const handleScroll = () => {
			sections.forEach(section => {
				const sectionElement = document.getElementById(section);
				if (sectionElement) {
					const { top } = sectionElement.getBoundingClientRect();
					if (top >= -100 && top < 200) {
						setActiveSection(section);
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [sections]);

	useEffect(() => {
		const stored = JSON.parse(localStorage.getItem('cart')) || [];
		const count = stored.reduce((acc, item) => acc + (item.quantity || 1), 0);
		setCartCount(count);
	}, []);

	const handleOpen = e => {
		e.stopPropagation();
		setIsOpen(prev => !prev);
	};

	const scrollToSection = section => {
		if (location.pathname !== '/') {
			navigate('/');
			setTimeout(() => {
				scroller.scrollTo(section, {
					offset: -150,
					duration: 500,
				});
				setActiveSection(section);
			});
		} else {
			scroller.scrollTo(section, {
				offset: -70,
				duration: 500,
			});
			setActiveSection(section);
		}
	};

	const activeStyle = {
		color: '#1C1C1C',
		fontWeight: 'bold',
		fontSize: '16px',
		position: 'relative',
	};

	const inactiveStyle = {
		color: '#747272',
		fontSize: '16px',
	};

	return (
		<>
			{isOpen && <Hamburger setIsOpen={setIsOpen} />}
			<div className="fixed z-40 top-0 font-outfit bg-[#ffffff] border-b-[0.5px] border-[#eaecf0] w-screen">
				<div className="max-w-[1440px] mx-auto flex justify-between items-center lg:px-[120px] px-[16px] lg:py-[5px] py-[24px] relative">
					{/* Logo */}
					<div>
						<a href="#">
							<img
								src={logo}
								alt="Logo"
								className="h-8"
								onClick={() => scrollToSection('home')}
							/>
						</a>
					</div>

					{/* Desktop Nav Links */}
					<div className="lg:flex hidden justify-between items-center font-sans gap-[16px] text-[16px] py-[15px]">
						<button
							onClick={() => scrollToSection('home')}
							className="cursor-pointer p-[15px] relative"
							style={activeSection === 'home' ? activeStyle : inactiveStyle}
						>
							Home
						</button>
						<RouterLink
							to="/Jallabiya"
							style={
								activeSection === 'Jallabiya' ? activeStyle : inactiveStyle
							}
							onClick={() => setActiveSection('Jallabiya')}
						>
							Azbir Jallabiya
						</RouterLink>
						<RouterLink
							to="/kaftan"
							className="cursor-pointer p-[15px] relative"
							style={activeSection === 'kaftan' ? activeStyle : inactiveStyle}
							onClick={() => setActiveSection('kaftan')}
						>
							Kaftan
						</RouterLink>
						<RouterLink
							to="/agbada"
							className="cursor-pointer p-[15px] relative"
							style={activeSection === 'agbada' ? activeStyle : inactiveStyle}
							onClick={() => setActiveSection('agbada')}
						>
							Agbada
						</RouterLink>
					</div>

					{/* Desktop Icons */}
					<div className="lg:flex hidden items-center gap-[32px]">
						<img
							src={search}
							alt="search"
						/>
						<RouterLink to="/CartPage">
							<div className="relative">
								<img
									src={cart}
									alt="cart"
								/>
								{cartCount > 0 && (
									<span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-[6px] py-[2px] rounded-full">
										{cartCount}
									</span>
								)}
							</div>
						</RouterLink>
						<div className="flex gap-3 items-center">
							<img
								src={flag}
								alt="flag"
							/>
							<img
								src={openIitems}
								alt="openItems"
							/>
						</div>
					</div>

					{/* Mobile Icons */}
					<div className="flex lg:hidden items-center gap-4 absolute right-[16px]">
						{/* Search Icon */}
						<img
							src={search}
							alt="search"
							className="w-5 h-5"
						/>

						{/* Cart Icon */}
						<RouterLink to="/CartPage">
							<div className="relative">
								<img
									src={cart}
									alt="cart"
									className="w-5 h-5"
								/>
								{cartCount > 0 && (
									<span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-[5px] py-[1px] rounded-full">
										{cartCount}
									</span>
								)}
							</div>
						</RouterLink>

						{/* Hamburger */}
						<button onClick={handleOpen}>
							<img
								src={menuopen}
								alt="menu"
								className="w-6 h-6"
							/>
						</button>
					</div>
				</div>
			</div>
		</>
	);
}
