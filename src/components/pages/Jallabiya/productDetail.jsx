import React, { useContext, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../../../products.json';
import ProductCard from './productCard';
import backIcon from '../../../assets/icons/back-icon.svg';
import { CartContext } from '../../../contextApi/cartContext';

const ProductDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { addToCart } = useContext(CartContext);
	const [notify, setNotify] = useState(false);
	const [notifyMessage, setNotifyMessage] = useState('');
	const [selectedSize, setSelectedSize] = useState('');
	const [selectedColor, setSelectedColor] = useState('');
	const [quantity, setQuantity] = useState(1);

	const product = products.find(p => p.id.toString() === id);

	const handleAddToCart = () => {
		if (!selectedSize || !selectedColor) {
			alert('Please select size and color');
			return;
		}
		const cartItem = {
			...product,
			selectedSize,
			selectedColor,
			quantity,
		};
		addToCart(cartItem);
		setNotifyMessage(
			`${quantity} item${quantity > 1 ? 's' : ''} added to cart`
		);
		setTimeout(() => setNotifyMessage(''), 2000);
	};

	const handlePayNow = () => {
		if (!selectedSize || !selectedColor) {
			alert('Please select size and color');
			return;
		}
		const cartItem = {
			...product,
			selectedSize,
			selectedColor,
			quantity,
		};
		addToCart(cartItem);
		navigate('/checkout');
	};

	if (!product)
		return (
			<div className="p-10 text-center">
				<img
					src={backIcon}
					alt="backIcon"
					className="cursor-pointer h-10 w-10"
					onClick={() => navigate(-1)} // go back to previous page
				/>{' '}
				<p>Product not found</p>
			</div>
		);

	return (
		<div className="max-w-[1440px] lg:px-[120px] px-[16px]  mx-auto">
			<div className="pt-[50px]">
				<img
					src={backIcon}
					alt="backIcon"
					className="cursor-pointer h-[25px] w-[25px] "
					onClick={() => navigate(-1)}
				/>{' '}
			</div>

			{notifyMessage && (
				<div className="fixed top-[100px] right-4 bg-green-500 text-white px-4 py-2 rounded shadow z-50">
					{notifyMessage}
				</div>
			)}
			<div className="flex justify-between pt-[40px] pb-[40px] ">
				<h2 className=" font-light mb-2 lg:text-[40px] text-[24px] text-[#253041] ">
					{product.name}
				</h2>
				<button
					onClick={() => navigate(-1)}
					className="text-[#C89D1A] border border-[#C89D1A] lg:px-6 lg:py-4 px-4 py-2 rounded-full font-semibold text-[16px] hover:bg-[#C89D1A]/10"
				>
					Continue shopping
				</button>
			</div>
			<div className="grid  grid-cols-1 md:grid-cols-2  gap-10">
				<img
					src={product.image}
					alt={product.name}
					className="w-full h-[500px] object-cover rounded-lg"
				/>

				<div>
					<p className="text-[40px] text-[#253041] mb-4">
						Price:{' '}
						<span className="text-[36px] text-[#3F4143]">
							{' '}
							₦{product.price.toLocaleString()}
						</span>
					</p>

					{/* Size Selector */}
					<div className="mb-5 w-full">
						<p className="text-[14px] font-medium text-[#383838] mb-3">Size</p>
						<div
							className={`flex flex-row-${
								['2XL', '3XL', 'XL', 'L', 'M', 'S'].length
							} gap-2`}
						>
							{['2XL', '3XL', 'XL', 'L', 'M', 'S'].map(size => (
								<button
									key={size}
									onClick={() => setSelectedSize(size)}
									className={`w-full py-3 border rounded text-sm ${
										selectedSize === size
											? 'bg-black text-white'
											: 'hover:bg-black hover:text-white'
									}`}
								>
									{size}
								</button>
							))}
						</div>
					</div>

					{/* Color Selector */}
					<div className="mb-5">
						<p className="font-medium text-[14px] text-[#383838] mb-3">Color</p>
						<select
							className="border px-4 py-2 rounded w-full"
							value={selectedColor}
							onChange={e => setSelectedColor(e.target.value)}
						>
							<option value="">Select color</option>
							<option>Black</option>
							<option>White</option>
							<option>Blue</option>
						</select>
					</div>

					{/* Quantity */}
					<div className="mb-5">
						<p className="font-medium text-[14px] text-[#383838] mb-3">
							Quantity:
						</p>
						<div className="border border-[#EAECF0] w-fit mt-3 rounded-lg py-[12px]">
							<button
								onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
								className=" lg:px-[30px] px-[48px] text-[16px] text-[#333333] "
							>
								−
							</button>
							<span>{quantity}</span>
							<button
								onClick={() => setQuantity(prev => prev + 1)}
								className=" lg:px-[30px] px-[48px] text-[16px] text-[#333333] "
							>
								+
							</button>
						</div>
					</div>

					{/* Buttons */}
					<div className="flex w-full  gap-4 mt-6 pb-10">
						<button
							onClick={handlePayNow}
							className="bg-[#C89D1A] hover:bg-yellow-700 text-white px-6 py-4 rounded-full w-full"
						>
							Pay Now
						</button>
						<button
							onClick={handleAddToCart}
							className="border border-[#C89D1A] px-6 py-4 rounded-full text-[#C89D1A] hover:bg-gray-100 w-full"
						>
							Add to cart
						</button>
					</div>
				</div>
			</div>
			{/* Suggested Products */}
			<div className="mt-16 pb-[10px] hidden lg:block">
				<h3 className="text-[24px] font-semibold ">You may also like</h3>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
					{products.slice(0, 4).map(item => (
						<ProductCard
							key={item.id}
							id={item.id}
							image={item.image}
							name={item.name}
							price={item.price}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
