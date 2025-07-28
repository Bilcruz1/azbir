import React, { useContext } from 'react';
import { CartContext } from '../../contextApi/cartContext';
import { useNavigate } from 'react-router-dom';
import del from '../../assets/icons/del-icon.svg';
import { Trash2 } from 'lucide-react';
import backIcon from '../../assets/icons/back-icon.svg';

const CartPage = () => {
	const { cart = [], removeFromCart, updateQuantity } = useContext(CartContext);
	const navigate = useNavigate();

	const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
	const totalPrice = cart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	const estimatedTotal = totalPrice;

	if (cart.length === 0) {
		return (
			<div className="mt-32 max-w-[1440px] px-[120px] mx-auto text-center text-xl">
				<img
					src={backIcon}
					alt="backIcon"
					className="cursor-pointer h-10 w-10"
					onClick={() => navigate(-1)} // go back to previous page
				/>{' '}
				<p className="mb-20 text-[26px]">Your cart is empty</p>
			</div>
		);
	}

	return (
		<div className="max-w-[1440px] mx-auto lg:px-[120px] px-[16px] ">
			<div className="pt-[50px]">
				<img
					src={backIcon}
					alt="backIcon"
					className="cursor-pointer"
					onClick={() => navigate(-1)} // go back to previous page
				/>
			</div>
			<div className="flex justify-between items-center mt-[48px] mb-6">
				<h2 className="lg:text-[40px] text-[24px] font-medium text-[#253041]">
					Your Cart
				</h2>
				<button
					onClick={() => navigate('/')}
					className="text-[#C89D1A] border border-[#C89D1A] lg:px-6 lg:py-4 px-4 py-2 rounded-full font-semibold text-[16px] hover:bg-[#C89D1A]/10"
				>
					Continue shopping
				</button>
			</div>

			<div className="grid gap-8 ">
				{cart.map(item => (
					<div
						key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
						className="flex flex-col w-full sm:flex-row  items-center justify-between "
					>
						<div className="  flex lg:flex-row flex-col gap-[32px] items-center w-full ">
							<img
								src={item.image}
								alt={item.name}
								className="w-[624px] h-[340px] object-cover rounded-3xl"
							/>
							<div className="lg:w-1/2 w-full">
								<div className="flex justify-between ">
									<h4 className=" text-[28px] text-[#253041]">{item.name}</h4>
									<button
										onClick={() =>
											removeFromCart(
												item.id,
												item.selectedSize,
												item.selectedColor
											)
										}
										className="text-red-500 mt-2 hover:text-red-600 "
									>
										<img
											src={del}
											alt="del"
										/>
									</button>
								</div>
								<p className="text-[#253041] lg:text-[24px] text-[20px] mt-1">
									₦{(item.price * item.quantity).toLocaleString()}
								</p>
								<p className="lg:text-[20px] text-[16px] mt-1 text-[#253041]">
									Color: {item.selectedColor}
								</p>
								<p className="lg:text-[20px] text-[16px] mt-1 text-[#253041]">
									Size: {item.selectedSize}
								</p>
								<div className=" mt-2  lg:text-[12px] text-[10px]">
									<p>Quantity:</p>
									<div className="border border-[#EAECF0] w-fit mt-3 rounded-lg py-[12px]">
										<button
											onClick={() =>
												updateQuantity(
													item.id,
													item.selectedSize,
													item.selectedColor,
													Math.max(1, item.quantity - 1)
												)
											}
											className=" lg:px-[30px] px-[48px] text-[16px] text-[#333333] "
										>
											−
										</button>
										<span className="text-[16px] text-[#333333]">
											{item.quantity}
										</span>
										<button
											onClick={() =>
												updateQuantity(
													item.id,
													item.selectedSize,
													item.selectedColor,
													item.quantity + 1
												)
											}
											className="lg:px-[30px] px-[48px] text-[16px] text-[#333333]"
										>
											+
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* FIXED SECTION: Summary always aligned left */}
			<div className="mt-[90px] mb-[68px]    ">
				<div className="text-left">
					<div className="flex gap-2">
						<p className="text-[#253041] text-[24px] ">Estimated Total</p>
						<p className="text-[24px]  font-bold mb-2 ">
							: ₦{estimatedTotal.toLocaleString()}
						</p>
					</div>
					<p className="text-[12px] text-[#253041] ">
						Taxes, discounts and shipping calculated at checkout
					</p>
					<button
						onClick={() => navigate('/checkout')}
						className="mt-[32px] lg:w-fit w-full text-[16px] bg-[#C89D1A] text-white px-12 py-4 rounded-full hover:bg-yellow-700"
					>
						Check out
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
