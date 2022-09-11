/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10px': ['10px'],
        '11px': ['11px'],
        '11.5px': ['11.5px'],
        '12px': ['12px'],
        '12.5px': ['12.5px'],
        '13px': ['13px'],
        '13.5px': ['13.5px'],
        '21px': ['21px'],
        '22px': ['22px'],
        '23px': ['23px'],
        '27px': ['27px', '32px'],
      },
      screens: {
        lg: '1068px',
      },
      colors: ({ colors }) => ({
        mywhite: '#f4f4f4',
        myyellow: '#f9c100',
      }),
      height: {
        '27rm': '27rem',
      }
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant("selected-page", ".selected-page.selected &");
    }),
  ],
}
