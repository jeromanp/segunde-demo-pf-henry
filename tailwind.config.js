/** @type {import('tailwindcss').Config} */
module.exports = {
<<<<<<< HEAD
  content: [],
  theme: {
    extend: {
			fontFamily: {
				poppins: 'Poppins, times new roman, sans-serif'
			},
			colors: {
				brand: {
					cream: '#E3DCBF',
					brown: '#BDB689',
					olive: '#787B34',
					'light-green': '#68850E',
					green: '#2B4B1B',
					yellow: '#FFBA00'
				}
			}
		},
  },
  plugins: [],
}

=======
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
>>>>>>> 6a7b4c98acb3e607fffc5613aef14c00aa234fa5
