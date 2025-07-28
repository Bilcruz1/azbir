import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { scroller } from 'react-scroll';

import 'swiper/css';
import slide1 from '../assets/images/hero-1.png';
import slide2 from '../assets/images/hero-2.png';
import slide3 from '../assets/images/hero-3.png';

import fb from '../assets/icons/fb_hero.svg';
import twitter from '../assets/icons/twitter_hero.svg';
import linkedin from '../assets/icons/linkedIn_hero.svg';
import instagram from '../assets/icons/instagram_hero.svg';
import { useNavigate } from 'react-router';
// import Nav from './nav';

const slides = [
	{
		image: slide1,
		title: (
			<>
				<div className="">Elevate Your Style</div>
			</>
		),
		subtitle: 'Shop the Latest Trends',
	},
	{
		image: slide2,
		title: <>Style that Speaks</>,
		subtitle: 'Discover the latest trends and timeless fashion.',
	},
	{
		image: slide3,
		title: <>Perfect Outfit Collections</>,
		subtitle: 'Shop the hottest trends and express yourself with confidence.',
	},
];

// Animation configs
const imageVariants = {
	initial: { opacity: 0, scale: 1.1, x: 60 },
	animate: {
		opacity: 1,
		scale: 1,
		x: 0,
		transition: { duration: 1.2, ease: 'easeOut' },
	},
	exit: {
		opacity: 0,
		scale: 0.95,
		x: -60,
		transition: { duration: 1, ease: 'easeIn' },
	},
};

const textVariants = {
	initial: { opacity: 0, x: -50 },
	animate: {
		opacity: 1,
		x: 0,
		transition: { duration: 1, delay: 0.4, ease: 'easeOut' },
	},
	exit: { opacity: 0, x: 50, transition: { duration: 0.8, ease: 'easeIn' } },
};

export default function HeroSlider() {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const navigate = useNavigate();

	return (
		<section
			className="w-full lg:h-[100vh] h-[100vh]  bg-[#111111] pt-[32px]  overflow-hidden"
			id="home"
		>
			{/* <Nav /> */}
			<Swiper
				modules={[Autoplay]}
				autoplay={{ delay: 6000, disableOnInteraction: false }}
				loop
				onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
				className="w-full h-full "
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<AnimatePresence mode="wait">
							{activeIndex === index && (
								<motion.div
									key={index}
									className="relative w-full h-full"
									initial="initial"
									animate="animate"
									exit="exit"
								>
									{/* 1️⃣ Background image */}
									<motion.img
										src={slide.image}
										alt={`Slide ${index + 1}`}
										className="absolute inset-0 w-full h-full object-cover"
										variants={imageVariants}
									/>

									<motion.div
										variants={textVariants}
										initial="initial"
										animate="animate"
										exit="exit"
										className="relative z-20 flex flex-col h-full px-4 text-center"
									>
										<div className="flex-1 flex flex-col items-center justify-center ">
											<h2 className="text-[#ffffff] text-2xl  lg:text-[78px] lg:leading-[70px] font-bold mb-4">
												{slide.title}
											</h2>
											<p className="text-[#ffffff] lg:text-[32px] lg:leading-[35px] text-center  max-w-xl mb-10">
												{slide.subtitle}
											</p>

											<button
												className="rounded-lg bg-transparent px-[30px] py-[12px] text-[16px] border-[3px] border-[#ffffff] font-semibold text-[#ffffff]"
												onClick={() => navigate('/jallabiya')}
											>
												Shop Azbir Clothing
											</button>
										</div>

										<div className="absolute lg:bottom-10 bottom-10 left-0 right-0 flex items-center justify-center pt-6">
											<div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 w-full max-w-4xl px-4">
												{/* left line */}
												<div className="flex-1 max-w-[67px] sm:max-w-[100px] md:max-w-[200px] lg:max-w-[350px] h-[1px] bg-[#C89D1A]"></div>

												{/* socials */}
												<div className="flex gap-2 sm:gap-3 md:gap-4 flex-shrink-0">
													<img
														src={fb}
														alt="facebook"
														className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
													/>
													<img
														src={twitter}
														alt="twitter"
														className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
													/>
													<img
														src={linkedin}
														alt="linkedin"
														className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
													/>
													<img
														src={instagram}
														alt="instagram"
														className="cursor-pointer w-6 h-6 sm:w-8 sm:h-8"
													/>
												</div>

												{/* right line */}
												<div className="flex-1 max-w-[67px] sm:max-w-[100px] md:max-w-[200px] lg:max-w-[350px] h-[1px] bg-[#C89D1A]"></div>
											</div>
										</div>
									</motion.div>
								</motion.div>
							)}
						</AnimatePresence>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
}
