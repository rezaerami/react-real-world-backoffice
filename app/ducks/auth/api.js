import axios from 'axios';

import axiosConfig from '../../utils/axiosConfig';
import URI from '../../constants/uri';

const api = {
  login({ email, password }) {
    const url = URI.AUTH.LOGIN();
    const config = axiosConfig({
      url,
      method: 'post',
      withAuthApiToken: false,
      data: {
        user: {
          email,
          password,
        },
      },
    });
    return axios(config);
  },
  register({ email, password, username }) {
    const url = URI.AUTH.INDEX();
    const config = axiosConfig({
      url,
      method: 'post',
      withAuthApiToken: false,
      data: {
        user: {
          email,
          password,
          username,
        },
      },
    });
    return axios(config);
  },
};

export default api;
