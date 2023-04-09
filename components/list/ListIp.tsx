import { Box, Button, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React, { useState } from 'react';

// *
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// *
import IPRow from './IPRow';

// * en operators
const enOperators = {
  MCI: 'همراه‌اول',
  MTN: 'ایرانسل',
  MKH: 'مخابرات',
  RTL: 'رایتل',
  HWB: 'های‌وب',
  AST: 'آسیاتک',
  SHT: 'شاتل',
  PRS: 'پارس‌آنلاین',
  MBT: 'مبین‌نت',
  ASK: 'اندیشه‌سبز',
  RSP: 'رسپینا',
  AFN: 'افرانت',
  ZTL: 'زی‌تل',
  PSM: 'پیشگامان',
  ARX: 'آراکس',
  SMT: 'سامانتل',
  FNV: 'فن‌آوا',
  DBN: 'دیده‌بان‌نت',
  APT: 'آپتل',
};

// * get the key by value
const getKeyByValue = (object: any, value: String) => {
  return Object.keys(object).find((key) => object[key] === value);
};

const ListIp = () => {
  const [ips, setIps] = useState([{ ip: '', operator: 'مخابرات' }]);
  const [isOpen, setIsOpen] = useState(false);

  const addHandler = () => {
    setIps([...ips, { ip: '', operator: 'مخابرات' }]);
  };

  // * copy to clipboard
  function copyToClipboard(txt: string) {
    navigator.clipboard
      .writeText(txt)
      .then(() => {
        setIsOpen(true);
      })
      .catch(() => {
        alert('مشکلی پیش آمده است!');
      });
  }

  // * copy
  const copyHandler = () => {
    let text = '';

    for (const ip of ips) {
      text += `${ip.ip} ${getKeyByValue(enOperators, ip.operator)} \n`;
    }

    copyToClipboard(text);
  };

  // * close snack
  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {ips.map((ip, index) => (
        <IPRow
          key={index}
          allIps={ips}
          setIps={setIps}
          index={index}
          operators={Object.values(enOperators)}
        />
      ))}

      <Button variant="contained" color="success" onClick={addHandler}>
        اضافه کردن
      </Button>
      <Button variant="contained" onClick={copyHandler}>
        کپی آی‌پی ها
      </Button>
      <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          کپی شد.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ListIp;
