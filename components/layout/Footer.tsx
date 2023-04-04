import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component={'footer'}
      sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}
    >
      <Typography sx={{ textAlign: 'center' }}>ساخته شده با ❤️</Typography>
    </Box>
  );
};

export default Footer;
