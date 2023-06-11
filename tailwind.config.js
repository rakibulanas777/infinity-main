/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		mytheme: {
			primary: "#0FCFEC",
			secondary: "#19D3AE",
			accent: "#3A4256",
			neutral: "#3d4451",
			"base-100": "#ffffff",
		},
	},
	plugins: [require("tailwind-scrollbar"), require("daisyui")],
};
