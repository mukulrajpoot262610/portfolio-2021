module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#05182c',
        secondary: {
          100: '#fffefe',
          900: '#8892B0',
        },
        info: '#fccf0c',
        success: '#02ef63',
        danger: '#fe6ea8',
        normal: '#07bcfc',
        frosted: '#1d2f41'
      },
      height: {
        100: '40rem',
        200: '45rem'
      },
      width: {
        100: '35rem',
      },
      fontSize: {
        'xxl': '20rem'
      },
      borderWidth: {
        1: '.5px'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false,
  },
}