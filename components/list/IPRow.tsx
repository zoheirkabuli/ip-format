import { Box, TextField, Autocomplete, IconButton } from '@mui/material';
import { Dispatch, SetStateAction, SyntheticEvent } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

interface propsType {
  allIps: { ip: string; operator: string }[];
  setIps: Dispatch<SetStateAction<{ ip: string; operator: string }[]>>;
  index: number;
  operators: string[];
}

const IPRow = ({ allIps, setIps, index, operators }: propsType) => {
  // * ip input
  const textHandler = (event: SyntheticEvent<Element, Event>) => {
    const target = event.target as HTMLButtonElement;
    const ips = [...allIps];
    ips[index].ip = target.value;
    setIps([...ips]);
  };
  //  * choose operator
  const operatorHandler = (
    event: SyntheticEvent<Element, Event>,
    newValue: string | null
  ) => {
    const ips = [...allIps];
    ips[index].operator = newValue ? newValue : '';
    setIps([...ips]);
  };
  // * delete
  const deleteHandler = () => {
    const ips = [...allIps];
    ips.splice(index, 1);
    setIps([...ips]);
  };

  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <TextField
        id="outlined-basic"
        label="آی‌پی"
        variant="outlined"
        sx={{ flex: '1 0 0' }}
        type="text"
        value={allIps[index].ip}
        onChange={textHandler}
      />
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={operators}
        sx={{
          width: {
            xs: 130,
            sm: 140,
          },
        }}
        value={allIps[index].operator ? allIps[index].operator : 'مخابرات'}
        onChange={operatorHandler}
        renderInput={(params) => <TextField {...params} label="اپراتور" />}
      />
      {index !== 0 ? (
        <IconButton aria-label="delete" color="error" onClick={deleteHandler}>
          <DeleteIcon />
        </IconButton>
      ) : null}
    </Box>
  );
};

export default IPRow;
