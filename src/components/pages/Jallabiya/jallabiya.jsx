// pages/ProductGallery.jsx
import React, { useState, useEffect } from 'react'; // ✅ add useEffect
import ProductCard from '../Jallabiya/productCard';
import Pagination from '../Jallabiya/pagination';
import { productData } from '../../../products';
import { useNavigate } from 'react-router-dom';
import Nav from '../../nav';

const PRODUCTS_PER_PAGE = 12;

const Jallabiya = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const totalPages = Math.ceil(productData.length / PRODUCTS_PER_PAGE);

	const displayedProducts = productData.slice(
		(currentPage - 1) * PRODUCTS_PER_PAGE,
		currentPage * PRODUCTS_PER_PAGE
	);

	// ✅ Scroll to top on page change
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [currentPage]);
	const navigate = useNavigate();
	return (
		<div>
			<Nav />
			<div className="max-w-[1440px] lg:mt-[100px] mt-[70px] mx-auto lg:px-[120px] px-[16px] py-6">
				<button
					className="text-[14px] text-[#555555] mb-4"
					onClick={() => navigate(-1)}
				>
					&larr; Return to previous page
				</button>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-6 gap-0">
					{displayedProducts.map((product, index) => (
						<ProductCard
							key={index}
							id={product.id}
							image={product.image}
							name={product.name}
							price={product.price}
						/>
					))}
				</div>
				<Pagination
					totalPages={totalPages}
					currentPage={currentPage}
					onPageChange={setCurrentPage} // ✅ this triggers the scroll via useEffect
				/>
			</div>
		</div>
	);
};

export default Jallabiya;
