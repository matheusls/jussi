import axios from 'axios';

import { baseUrl } from 'services/consts';

export const getPeople = async () => {
  const { data } = await axios.get(`${baseUrl}/people/`);

  return data;
};
