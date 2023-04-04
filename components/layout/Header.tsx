import { AppBar, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar component={'nav'} sx={{ justifyContent: 'center' }}>
        <Typography
          component={Link}
          href={'/'}
          sx={{ fontWeight: '1000', fontSize: '2rem' }}
        >
          اینترنت برای همه
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
