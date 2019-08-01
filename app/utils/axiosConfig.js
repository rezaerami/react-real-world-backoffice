import Helpers from './Helpers';

/* eslint-disable no-param-reassign */
const axiosConfig = ({
  url,
  method,
  withCredentials = true,
  withAuthApiToken = true,
  data = {},
  headers = {},
}) => {
  if (withAuthApiToken) {
    const accessToken = Helpers.localStorageGetItem(
      'persist:auth',
      'accessToken',
    );
    if (accessToken && accessToken !== 'null') {
      headers.Authorization = `Token ${accessToken}`;
    }
  }
  return {
    url,
    method,
    data,
    withCredentials,
    headers,
  };
};

export default axiosConfig;
