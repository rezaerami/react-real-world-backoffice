import types from './types';

const actions = {
  login: payload => ({
    type: types.LOGIN,
    payload,
  }),
  register: payload => ({
    type: types.REGISTER,
    payload,
  }),
  setAccessToken: payload => ({
    type: types.SET_ACCESS_TOKEN,
    payload,
  }),
  setUser: payload => ({
    type: types.SET_USER,
    payload,
  }),
  clearAuth: () => ({
    type: types.CLEAR_AUTH,
  }),
};

export default actions;
