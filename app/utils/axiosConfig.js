import Helpers from './Helpers';

/* eslint-disable no-param-reassign */
const axiosConfig = ({
  url,
  method,
  withCredentials = true,
  withAuthorization = true,
  data = {},
  headers = {},
}) => {
  if (withAuthorization) {
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
