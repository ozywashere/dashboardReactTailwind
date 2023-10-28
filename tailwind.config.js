module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      display: ['Open Sans', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#20232A',
        'secondary-dark-bg': '#33373E',
        'light-gray': '#F7F7F7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
        'light-transparent': 'rgba(0, 0, 0, 0.1)',
      },
      colors: {
        primary: '#1E86FF',
        'primary-dark': '#0B5FFF',
        'primary-light': '#85C5FF',
        secondary: '#33373E',
        'secondary-light': '#4E535C',
        'secondary-dark': '#20232A',
        danger: '#FF4949',
        'danger-light': '#FF7F7F',
        'danger-dark': '#FF0000',
        success: '#27AE60',
        'success-light': '#6FCF97',
        'success-dark': '#219653',
        warning: '#FFC107',
        'warning-light': '#FFE082',
        'warning-dark': '#FFA000',
        info: '#2D9CDB',
        'info-light': '#A2D2FF',
        'info-dark': '#007ACC',
        white: '#FFFFFF',
        black: '#000000',
        'gray-light': '#4F4F4F',
        'gray-dark': '#828282',
        'gray-lighter': '#BDBDBD',
        dark: '#333333',
        'dark-light': '#4F4F4F',
        'dark-dark': '#828282',
        'dark-lighter': '#BDBDBD',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      backgroundImage: {
        'hero-pattern':
          "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F003%2F025%2F798%2Foriginal%2Fcustomer-service-concept-support-assistance-call-center-vector.jpg&f=1&nofb=1&ipt=b29cef60137fa5734f7633fc00ec967594fb402bc5a3455114e2f7db0ea9e03f&ipo=images')",
      },
    },
  },
  plugins: [],
};
