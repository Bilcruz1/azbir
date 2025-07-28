/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				outfit: ['Outfit', 'sans-serif'],
				manrope: ['Manrope', 'sans-serif'],
			},
			keyframes: {
				fadeSlideDown: {
					'0%': { opacity: '0', transform: 'translateY(-20%)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				fadeSlideUp: {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(-20%)' },
				},
				marquee: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
			animation: {
				fadeSlideDown: 'fadeSlideDown 0.5s ease-in-out',
				fadeSlideUp: 'fadeSlideUp 0.5s ease-in-out',
				marquee: 'marquee 8s linear infinite', // Make it faster
				marqueeMobile: 'marquee 5s linear infinite', // Even faster on mobile
			},
		},
	},
	plugins: [require('@tailwindcss/aspect-ratio')],
};
