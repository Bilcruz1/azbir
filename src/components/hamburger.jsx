import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import hiClose from '../assets/icons/hiClose.svg';
import logo from '../assets/images/Azbir-logo.png';

function Hamburger({ setIsOpen }) {
	const [animation, setAnimation] = useState('');
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		setAnimation('animate-fadeSlideDown');
	}, []);

	const handleClose = () => {
		setAnimation('animate-fadeSlideUp');
		setTimeout(() => setIsOpen(false), 500);
	};

	const handleNavigate = path => {
		navigate(path);
		handleClose();
	};

	const navLinkClasses = isActive =>
		`text-[16px] leading-[22px] cursor-pointer ${
			isActive ? 'font-bold text-[#333333]' : 'text-[#333333]'
		}`;

	return (
		<div className="fixed inset-0 z-[9999]">
			{/* Dark Background */}
			<div
				className="fixed inset-0 bg-[#3f3c3c] opacity-50"
				onClick={handleClose}
			></div>

			{/* Sliding Menu */}
			<div
				className={`relative w-full h-full transform transition-transform duration-500 ease-in-out ${animation}`}
			>
				<div className="bg-white text-[#333333] w-full h-fit pt-[40px] flex flex-col px-4 gap-10 pb-6 overflow-y-auto">
					{/* Top Row: Logo and Close Icon */}
					<div className="flex justify-between items-center">
						<img
							src={logo}
							alt="logo"
							className="h-8 cursor-pointer"
							onClick={handleClose}
						/>
						<img
							src={hiClose}
							alt="close"
							className="h-6 w-6 cursor-pointer"
							onClick={handleClose}
						/>
					</div>

					{/* Navigation Links */}
					<NavLink
						to="/"
						className={({ isActive }) => navLinkClasses(isActive)}
						onClick={() => handleNavigate('/')}
					>
						Home
					</NavLink>

					<NavLink
						to="/jallabiya"
						className={({ isActive }) => navLinkClasses(isActive)}
						onClick={() => handleNavigate('/jallabiya')}
					>
						Azbir Jallabiya
					</NavLink>

					<NavLink
						to="/kaftan"
						className={({ isActive }) => navLinkClasses(isActive)}
						onClick={() => handleNavigate('/kaftan')}
					>
						Kaftan
					</NavLink>

					<NavLink
						to="/agbada"
						className={({ isActive }) => navLinkClasses(isActive)}
						onClick={() => handleNavigate('/agbada')}
					>
						Agbada
					</NavLink>

					<div className="mt-4">
						<NavLink
							to="/jallabiya"
							className="rounded-md text-[#FF9500] border-[#FF9500] border-[3px] py-[12px] text-[16px] font-bold flex gap-[8px] justify-center items-center"
							onClick={() => handleNavigate('/jallabiya')}
						>
							Shop now
						</NavLink>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hamburger;
