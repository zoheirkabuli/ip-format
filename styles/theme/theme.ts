import localFont from 'next/font/local';
import { createTheme } from '@mui/material/styles';

// * font
export const iranYekan = localFont({
  src: '../../assets/fonts/IRANYekanXVF.woff2',
  weight: 'variable',
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#4158C7',
      // dark: will be calculated from palette.primary.main,
      contrastText: '#fff',
    },
    secondary: {
      main: '#003682',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#fff',
    },
  },
  typography: {
    htmlFontSize: 10,
    fontFamily: iranYekan.style.fontFamily,
  },
  direction: 'rtl',
});

export default theme;
