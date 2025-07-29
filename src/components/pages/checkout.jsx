import React, { useContext } from 'react';
import { CartContext } from '../../contextApi/cartContext';
import backIcon from '../../assets/icons/back-icon.svg';
import { useNavigate } from 'react-router-dom';
import del from '../../assets/icons/del-icon.svg';

const Checkout = () => {
	const { cart, removeFromCart } = useContext(CartContext);

	const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
	const subtotal = cart.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);
	const estimatedTax = 2500;
	const totalPrice = subtotal + estimatedTax;

	const handleDelete = item => {
		removeFromCart(item.id, item.selectedSize, item.selectedColor);
	};

	const navigate = useNavigate();

	return (
		<div className="max-w-[1440px] mx-auto lg:px-[120px] px-4">
			<div className="pt-10">
				<img
					src={backIcon}
					alt="backIcon"
					className="cursor-pointer"
					onClick={() => navigate(-1)}
				/>
			</div>

			<div className="flex flex-col lg:flex-row lg:mt-12 mt-8 justify-between items-start">
				<h1 className="lg:text-[40px] text-[24px] text-[#253041] font-medium mb-4 lg:mb-0">
					Checkout
				</h1>
				<button
					className="text-[#C89D1A] border border-[#C89D1A] px-4 py-2 lg:px-6 lg:py-4 rounded-full font-semibold text-[16px] hover:bg-[#C89D1A]/10"
					onClick={() => navigate('/CartPage')}
				>
					Back to cart
				</button>
			</div>

			<div className="py-12 grid lg:grid-cols-2 gap-8">
				{/* LEFT SIDE - FORM */}
				<div>
					{/* Contact */}
					<div className="mb-4">
						<label className="block text-[14px] font-medium mb-2">
							Contact
						</label>
						<input
							type="text"
							placeholder="Mobile phone number"
							className="w-full border rounded-lg text-sm px-4 py-3 focus:outline-none focus:ring"
						/>
					</div>

					{/* Delivery */}
					<h2 className="block text-[14px] font-medium mb-2">Delivery</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm">
						<input
							type="text"
							placeholder="First name"
							className="border px-4 py-3 rounded-lg w-full"
						/>
						<input
							type="text"
							placeholder="Last name"
							className="border px-4 py-3 rounded-lg w-full"
						/>
					</div>

					<div className="mb-4">
						<select className="w-full border rounded-lg text-sm px-4 py-3 text-[#7A7A7A]">
							<option>Country/Region</option>
							<option>Nigeria</option>
						</select>
					</div>

					<input
						type="text"
						placeholder="Address"
						className="border px-4 py-3 text-sm rounded-lg w-full mb-4"
					/>
					<input
						type="text"
						placeholder="Apartment, suite e.t.c"
						className="border px-4 py-3 text-sm rounded-lg w-full mb-4"
					/>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
						<input
							type="text"
							placeholder="City"
							className="border px-4 py-3 rounded-lg w-full"
						/>
						<select className="border px-4 py-3 text-[#7A7A7A] rounded-lg w-full">
							<option>State</option>
							<option>Lagos</option>
							<option>Abuja</option>
						</select>
						<input
							type="text"
							placeholder="Postal code (Optional)"
							className="border px-4 py-3 rounded-lg w-full"
						/>
					</div>

					{/* Shipping Method */}
					<h2 className="text-sm text-[#383838] font-medium mb-2">
						Shipping method
					</h2>
					<select className="border px-4 py-3 text-[#7A7A7A] rounded-lg w-full mb-6 text-sm">
						<option>Select pickup location</option>
						<option>Store Pickup</option>
						<option>Home Delivery</option>
					</select>

					<button
						className="bg-[#C89D1A] text-white w-full py-3 rounded-full text-[16px] font-semibold hover:bg-[#C89D1A]/90 transition"
						onClick={() => alert('Proceeding to payment...')}
					>
						Pay now
					</button>
				</div>

				{/* RIGHT SIDE - ORDER SUMMARY */}
				<div className="bg-[#F7F9FB] rounded-lg p-6">
					{cart.map((item, index) => (
						<div
							key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
							className="flex justify-between items-start py-4"
						>
							<div className="lg:flex gap-4">
								<img
									src={item.image}
									alt={item.name}
									className="  lg:min-w-[143px] lg:h-[91px] w-[340px] h-[170px]  rounded-3xl object-cover object-top"
								/>
								<div className="pt-3">
									<div className="flex justify-between">
										<h3 className="font-medium text-[16px] ">{item.name}</h3>
										<button
											onClick={() => handleDelete(item)}
											className=" lg:hidden block"
										>
											<img
												src={del}
												alt="del"
											/>
										</button>
									</div>
									<p className="text-[14px] text-[#253041] lg:mt-[6px] mt-[4px]">
										₦{item.price.toLocaleString()}
									</p>
									<div className="flex mt-[2px] gap-[10px] text-[12px]">
										<p className="">Color: {item.selectedColor}</p>
										<p className="">Size: {item.selectedSize}</p>
										<p className="">Quantity: {item.quantity}</p>
									</div>
								</div>
							</div>
							<button
								onClick={() => handleDelete(item)}
								className="text-[#D73F3F] hover:text-red-700 hidden lg:block"
							>
								<img
									src={del}
									alt="del"
								/>
							</button>
						</div>
					))}

					<div className="mt-6 text-[12px] text-gray-700 space-y-3 border-t pt-6">
						<div className="flex justify-between">
							<span>Subtotal</span>
							<span>{totalItems} Items</span>
						</div>
						<div className="flex justify-between">
							<span>Shipping</span>
							<span className="text-green-600 font-medium">Free</span>
						</div>
						<div className="flex justify-between">
							<span>Estimated taxes</span>
							<span>₦{estimatedTax.toLocaleString()}</span>
						</div>
					</div>

					<div className="flex gap-[10px] items-center text-lg mt-6  pt-4">
						<span className="text-[20px]">Total:</span>
						<span className="text-[20px] font-bold">
							₦{totalPrice.toLocaleString()}
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
