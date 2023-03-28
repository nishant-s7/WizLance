/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}", "/views/pages/*.ejs", "/views/partials/*.ejs", "**/**/*.ejs"],
  plugins: [],
  theme: {
    fontFamily: {
      raleway: ['raleway', "sans-serif"]
    }
  }
}
