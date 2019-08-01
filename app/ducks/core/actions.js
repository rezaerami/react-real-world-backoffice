import types from './types';

const actions = {
  initialize: () => ({
    type: types.INITIALIZE,
  }),
  loading: () => ({
    type: types.LOADING,
  }),
  finished: () => ({
    type: types.FINISHED,
  }),
  clearCore: () => ({
    type: types.CLEAR_CORE,
  }),
  purge: payload => ({
    type: types.PURGE,
    payload,
  }),
};
export default actions;
