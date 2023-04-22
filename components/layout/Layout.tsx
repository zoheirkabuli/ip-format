import { ReactNode } from 'react';
import { Paper, Box } from '@mui/material';

type Props = {
  children: ReactNode | ReactNode[];
};

// * components
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Box
        sx={{
          width: {
            xs: '95%',
            sm: '98%',
          },
          justifySelf: 'center',
          display: 'flex',
          gap: '1rem',
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
