import axios from 'axios';

export const SendEmailWhitelist = (
  name: string,
  email: string
): Promise<boolean> => {
  return axios
    .post('/api/sendinblue', { name, email })
    .then((_) => true)
    .catch((_) => false);
};
