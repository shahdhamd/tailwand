/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:'#F86061',
        backgroundColor:'#FEF5F5',
        secondary:'#676767'
      },
      screens:{
        '2md':"992px",
        '2lg':"1258px"
      }

    },
  },
  plugins: [],
}

