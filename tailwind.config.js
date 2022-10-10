/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
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
        lg1140: '1140px',
        xs: '540px',
        xxs: '420px',
        xxxs: '320px'

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
  plugins: [],
}
