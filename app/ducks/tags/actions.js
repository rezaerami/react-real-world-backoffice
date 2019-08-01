import types from './types';

const actions = {
  getTags: payload => ({
    type: types.GET_TAGS,
    payload,
  }),
};
export default actions;
