import { Paper, Button, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import React, { useEffect, useState } from 'react';
import { Roboto_Mono } from 'next/font/google';
import checkError from '@/lib/checkError';

// * mono font
const robotoMono = Roboto_Mono({ subsets: ['latin'] });

// * Alert
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

// * components
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

// * return ircf
const ircf = () => {
  let txt = '';
  for (const [key] of Object.entries(enOperators)) {
    txt += `${key.toLowerCase()}.ircf.space ${key}\n`;
  }

  return txt;
};

// * checker
interface IpsError {
  ip: boolean;
  operator: boolean;
}
const checker = (arr: IpsError[]) => {
  return arr.every((item) => item.ip === false && item.operator === false);
};

const ListIp = () => {
  const [ips, setIps] = useState([{ ip: '', operator: '' }]);
  const [text, setText] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const addHandler = () => {
    setIps([...ips, { ip: '', operator: '' }]);
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
    if (text === ircf() || checker(checkError(ips))) {
      copyToClipboard(text);
    } else {
      setIsOpen(true);
    }
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

  // *

  useEffect(() => {
    let ipsText = '';

    for (const ip of ips) {
      if (ip.ip !== '' || ip.operator) {
        ipsText += `${ip.ip} ${
          ip.operator ? getKeyByValue(enOperators, ip.operator) : ''
        } \n`;
      }
    }

    if (ipsText !== '') {
      setText(ipsText);
    } else {
      setText(ircf());
    }
  }, [ips]);

  return (
    <>
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1.5rem 1rem',
          flex: {
            xs: 'none',
            sm: '1 0 0',
          },
        }}
      >
        {ips.map((ip, index) => (
          <IPRow
            key={index}
            allIps={ips}
            setIps={setIps}
            index={index}
            operators={Object.values(enOperators)}
            error={checkError(ips)[index]}
          />
        ))}

        <Button variant="contained" onClick={addHandler}>
          اضافه کردن
        </Button>
      </Paper>
      <Paper
        elevation={3}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          padding: '1.5rem 1rem',
          flex: {
            xs: 'none',
            sm: '1 0 0',
          },
        }}
      >
        <Button variant="contained" onClick={copyHandler}>
          کپی آی‌پی ها
        </Button>
        <textarea
          className={robotoMono.className}
          style={{
            direction: 'ltr',
            fontSize: '1.6rem',
            padding: '1.5rem',
            borderRadius: '0.4rem',
            borderColor: 'rgba(0, 0, 0, 0.23)',
            minHeight: '50rem',
          }}
          value={text}
          readOnly
        />
      </Paper>
      <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={
            text === ircf() || checker(checkError(ips)) ? 'success' : 'error'
          }
          sx={{ width: '100%' }}
        >
          {text === ircf() || checker(checkError(ips))
            ? 'کپی شد.'
            : 'همه فیلدها الزامی است.'}
        </Alert>
      </Snackbar>
    </>
  );
};

export default ListIp;
