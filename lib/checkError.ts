interface IpsError {
  ip: boolean;
  operator: boolean;
}

interface Ips {
  ip: string;
  operator: string;
}

const checkError = (ips: Ips[]) => {
  const errors: IpsError[] = [];

  for (const ip of ips) {
    errors.push({
      ip: ip.ip === '' ? true : false,
      operator: ip.operator === '' ? true : false,
    });
  }
  return errors;
};

export default checkError;
