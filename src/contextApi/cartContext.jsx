// context/CartContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState(null); // initially null to detect loading

	// Load from localStorage once
	useEffect(() => {
		const stored = localStorage.getItem('cart');
		if (stored) {
			setCart(JSON.parse(stored));
		} else {
			setCart([]);
		}
	}, []);

	// Save to localStorage when cart changes
	useEffect(() => {
		if (cart !== null) {
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}, [cart]);

	const addToCart = item => {
		setCart(prev => {
			const newCart = [...(prev || []), item];
			return newCart;
		});
	};

	const removeFromCart = (id, selectedSize, selectedColor) => {
		setCart(prev =>
			prev.filter(
				item =>
					!(
						item.id === id &&
						item.selectedSize === selectedSize &&
						item.selectedColor === selectedColor
					)
			)
		);
	};

	const updateQuantity = (id, selectedSize, selectedColor, newQty) => {
		setCart(prev =>
			prev.map(item => {
				if (
					item.id === id &&
					item.selectedSize === selectedSize &&
					item.selectedColor === selectedColor
				) {
					return { ...item, quantity: newQty };
				}
				return item;
			})
		);
	};

	const clearCart = () => {
		setCart([]);
	};

	// Optional: show loading state if cart hasn't been loaded yet
	if (cart === null) {
		return <div className="p-10 text-center">Loading cart...</div>;
	}

	return (
		<CartContext.Provider
			value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
		>
			{children}
		</CartContext.Provider>
	);
};
