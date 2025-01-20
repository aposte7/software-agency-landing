/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'bg-main': '#090d1c',
				'bg-secondary': '#100a1d',
				'primary-c': '#2fc0ff',
				'lighter-1': '#219cf3',
				'lighter-2': '#5aa7f5',
				'lighter-3': '#0b83ff',
				'lighter-4': '#00e9de',
				'darker-1': '#080a11',
				'darker-2': '#000a11',
				'darker-3': '#090912',
			},
		},
	},
	plugins: [],
}
