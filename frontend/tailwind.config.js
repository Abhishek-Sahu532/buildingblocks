import withMT from '@material-tailwind/react/utils/withMT';

export default withMT({
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '240px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        primaryText: '#000957',
        secondaryText: '#344CB7'
      },
      fontFamily: {
        raleway: ["Raleway", "Arial", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    }
  },
  plugins: []
});
