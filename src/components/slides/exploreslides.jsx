import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css'; // Core Swiper styles
import 'swiper/css/navigation'; // Navigation module styles

// Your images here
import img1 from '../../assets/images/slide3.png';
import img2 from '../../assets/images/slide4.png';
import img3 from '../../assets/images/slide5.png';
import img4 from '../../assets/images/slide6.png';
import img5 from '../../assets/images/slide7.png';

import arrowNext from '../../assets/icons/arrowNext.svg';
import arrowBack from '../../assets/icons/arrowBack.svg';

export default function ExploreSlides() {
	const [currentSlide, setCurrentSlide] = useState(1); // State to track the current slide index
	const images = [img1, img2, img3, img4, img5];

	const handleSlideChange = swiper => {
		setCurrentSlide(swiper.realIndex + 1); // Update the current slide number (0-indexed so we add 1)
	};

	return (
		<div className="relative w-full ">
			{/* Display the current slide and total slide count */}
			{/* <p>Luxury Apartments</p>
			<div></div>
			<div className=" text-[#FFFFFF] text-[20px] font-light mb-4">
				{`Showing room ${currentSlide} of ${images.length}`}
			</div> */}

			<Swiper
				modules={[Navigation, Autoplay]}
				spaceBetween={30}
				slidesPerView={1}
				navigation={{
					nextEl: '.custom-next',
					prevEl: '.custom-prev',
				}}
				loop={true}
				autoplay={{ delay: 5000 }} // Auto-slide every 5 seconds
				className="swiper-container"
				onSlideChange={handleSlideChange}
			>
				{images.map((image, index) => (
					<SwiperSlide key={index}>
						<div className="relative">
							<img
								src={image}
								alt={`Slide ${index + 1}`}
								className="w-full h-full object-contain rounded-2xl"
							/>
							{/* Custom navigation buttons */}
							<div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2">
								<div className="custom-prev bg-black bg-opacity-50 text-white lg:px-[16px] px-[6px] lg:py-[21px] py-[9px] rounded-full cursor-pointer hover:bg-opacity-70">
									<img
										src={arrowBack}
										alt="Previous"
										className="lg:w-[36px] w-[22px] h-[16px] lg:h-[25px]"
									/>
								</div>
							</div>
							<div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2">
								<div className="custom-next bg-black bg-opacity-50 text-white lg:px-[16px] px-[6px] lg:py-[21px] py-[9px] rounded-full cursor-pointer hover:bg-opacity-70">
									<img
										src={arrowNext}
										alt="Next"
										className="lg:w-[36px] w-[22px] h-[16px] lg:h-[25px]"
									/>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
