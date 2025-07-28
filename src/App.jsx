import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from 'react-router-dom';
import Nav from './components/nav';

import Home from './components/pages/home';

import { CartProvider } from './contextApi/cartContext';

import Footer from './components/footer';
import Jallabiya from './components/pages/Jallabiya/jallabiya';
import ProductDetail from './components/pages/Jallabiya/productDetail';
import CartPage from './components/pages/cart';
import { Check } from 'lucide-react';
import Checkout from './components/pages/checkout';
import Kaftan from './components/pages/kaftan/kaftan';
import Agbada from './components/pages/agbada/agbada';

function App() {
	return (
		<CartProvider>
			<Router>
				{/* Define routes */}
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/product/:id"
						element={<ProductDetail />}
					/>
					<Route
						path="/jallabiya"
						element={<Jallabiya />}
					/>

					<Route
						path="/kaftan"
						element={<Kaftan />}
					/>
					<Route
						path="/agbada"
						element={<Agbada />}
					/>
					<Route
						path="/CartPage"
						element={<CartPage />}
					/>
					<Route
						path="/checkout"
						element={<Checkout />}
					/>
				</Routes>
				<Footer />
			</Router>
		</CartProvider>
	);
}

export default App;
