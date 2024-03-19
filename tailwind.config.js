/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			primary: "#BF335",
			gray : {
				DEFAULT : "#282828",
				500 : "#1D1D1D",
			},
			black : "#030207",
			
		},
		extend: {}
	},
	plugins: []
}
