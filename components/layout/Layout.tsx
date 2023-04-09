import { ReactNode } from 'react';
import { Paper } from '@mui/material';

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
      <Paper
        elevation={3}
        sx={{
          width: {
            xs: '95%',
            sm: '50%',
          },
          justifySelf: 'center',
          padding: '1rem',
        }}
      >
        {children}
      </Paper>
      <Footer />
    </>
  );
};

export default Layout;
