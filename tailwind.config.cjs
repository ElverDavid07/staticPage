/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT(
	{
		darkMode: 'class',
		content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
		theme: {
			colors:{
				dark:"#1e293b",
			},
			extend: {
				fontFamily:{
					openSans : "'Open Sans', sans-serif",
					obuntu : " 'Ubuntu', sans-serif"
				}
			},
		},
		plugins: [],
	}
)
