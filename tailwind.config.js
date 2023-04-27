/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
		"./node_modules/tailwind-datepicker-react/dist/**/*.js",
		"./whitelist.txt"
  ],
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

