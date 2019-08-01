import types from './types';

const defaultState = {
  accessToken: null,
  user: null,
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case types.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case types.CLEAR_AUTH:
      return defaultState;
    default:
      return state;
  }
};

export default reducers;
