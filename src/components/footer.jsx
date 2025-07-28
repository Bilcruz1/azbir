import React from 'react';
import footerLogo from '../assets/images/azbir-logo.png';
import TwitterIcon from '../assets/icons/twitter-footer.svg';
import FacebookIcon from '../assets/icons/facebook-footer.svg';
import InstagramIcon from '../assets/icons/instagram-footer.svg';
import MailIcon from '../assets/icons/mail-footer.svg';
import PhoneIcon from '../assets/icons/phone-footer.svg';
import LocationIcon from '../assets/icons/location-footer.svg';

const Footer = () => {
	return (
		<footer className="bg-[#114323]">
			<div className="max-w-[1440px] mx-auto text-white lg:px-[80px] px-[16px] lg:py-[70px] py-[48px] md:flex md:justify-between md:items-start ">
				<div className="md:w-2/3">
					<div className="text-[#fdbb3b] font-bold text-lg mb-4">
						<img
							src={footerLogo}
							alt=""
							className="w-[200px] h-[37px]"
						/>
					</div>
					<p className="text-[#CCCCCC] lg:text-[18px] lg:leading-[28px] leading-[24px] mb-4">
						Azbir Clothing, founded in 2016, is a bespoke tailoring brand
						specialized in traditional Kaftan for men. We provide
						made-to-measure men’s kaftans, agbadas, and proudly offer the first
						authentic Emirati Jallabiya in Northern Nigeria.
						<br />
						<br />
						With branches in the heart of Kano, Kebbi, and Abuja, our commitment
						to detail and expert tailoring has fueled our rapid growth, making
						Azbir Clothing a trusted name across all levels of traditional
						fashion.
					</p>
					<div className="flex space-x-4 mt-4">
						<a
							href="#"
							className="hover:scale-110 transition"
						>
							<img
								src={TwitterIcon}
								alt="Twitter"
								className="w-7 h-7"
							/>
						</a>
						<a
							href="#"
							className="hover:scale-110 transition"
						>
							<img
								src={FacebookIcon}
								alt="Facebook"
								className="w-7 h-7"
							/>
						</a>
						<a
							href="#"
							className="hover:scale-110 transition"
						>
							<img
								src={InstagramIcon}
								alt="Instagram"
								className="w-7 h-7"
							/>
						</a>
					</div>
				</div>

				<div className="mt-12 md:mt-14">
					<h3 className="text-[#C89D1A] lg:text-[20px] font-semibold mb-4">
						Our Contact
					</h3>
					<ul className=" space-y-4">
						<li className="flex items-center gap-2">
							<img
								src={MailIcon}
								alt="Email"
								className="w-5 h-5"
							/>
							<p className="text-[#CCCCCC] lg:text-[18px] lg:leading-[20px]">
								Azbir_clothing@gmail.com
							</p>
						</li>
						<li className="flex items-center gap-2">
							<img
								src={PhoneIcon}
								alt="Phone"
								className="w-5 h-5"
							/>
							<p className="text-[#CCCCCC] lg:text-[18px] lg:leading-[20px]">
								+234 807 8359 544
							</p>
						</li>
						<li className="flex items-start gap-2">
							<img
								src={LocationIcon}
								alt="Location"
								className="w-5 h-7"
							/>
							<p className="text-[#CCCCCC] lg:text-[18px] lg:leading-[20px]">
								Zeen Noor Hotels Shop <br /> No. 1 R/ Zaki, Kano State
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className="  max-w-[1440px] mx-auto lg:px-[80px] px-[16px]    lg:pb-[70px] pb-[40px] text-center ">
				<div className="bg-[#734C19] h-[0.5px]  max-w-[1440px]  "></div>
				<p className="pt-5 lg:text-[16px] text-[14px] text-[#ffffff]">
					Copyright © 2024 Azbirclothing. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
