// components/ProductCard.jsx
import React from 'react';
import cartIcon from '../../../assets/icons/cart-icon.svg';
import { Link } from 'react-router-dom';

const ProductCard = ({ image, name, price, id }) => {
	return (
		<Link to={`/product/${id}`}>
			<div className="flex flex-col   rounded-2xl p-4 hover:scale-105 transition">
				<img
					src={image}
					alt={name}
					className="lg:h-[384px] lg:w-[297px] rounded-3xl object-contain"
				/>
				<div className="flex justify-between mt-5 ">
					<div>
						<h3 className="lg:text-[20px] text-[14px] text-[#262626] lg:leading-[35px]">
							{name}
						</h3>
						<p className="text-[#3F4143] lg:text-[20px] text-[14px]  lg:leading-[35px]">
							₦{price.toLocaleString()}
						</p>
					</div>
					<div className="pt-1 ">
						<img
							src={cartIcon}
							alt="cartIcon"
							className="hover:scale-110 hover:cursor-pointer"
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
