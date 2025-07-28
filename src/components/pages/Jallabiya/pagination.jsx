// components/Pagination.jsx
import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
	return (
		<div className="flex  justify-between gap-2 mt-6">
			<button
				disabled={currentPage === 1}
				className="text-sm px-2 py-1 border rounded disabled:opacity-50"
				onClick={() => onPageChange(currentPage - 1)}
			>
				← Previous
			</button>
			<div className="flex gap-4">
				{[...Array(totalPages)].map((_, index) => (
					<button
						key={index}
						className={`px-3 py-1 rounded-full text-sm ${
							currentPage === index + 1 ? 'bg-black text-white' : 'border'
						}`}
						onClick={() => onPageChange(index + 1)}
					>
						{index + 1}
					</button>
				))}
			</div>

			<button
				disabled={currentPage === totalPages}
				className="text-sm px-2 py-1 border rounded disabled:opacity-50"
				onClick={() => onPageChange(currentPage + 1)}
			>
				Next →
			</button>
		</div>
	);
};

export default Pagination;
