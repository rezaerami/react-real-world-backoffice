import axios from 'axios';

import axiosConfig from '../../utils/axiosConfig';
import URI from '../../constants/uri';

const api = {
  getTags() {
    const url = URI.TAGS.INDEX();
    const config = axiosConfig({
      url,
      method: 'get',
    });
    return axios(config);
  },
};

export default api;
