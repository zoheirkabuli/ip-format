import { ReactNode } from 'react';
import { Box } from '@mui/material';

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
      <Box>{children}</Box>
      <Footer />
    </>
  );
};

export default Layout;
