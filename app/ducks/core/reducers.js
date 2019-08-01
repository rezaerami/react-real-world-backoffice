import types from './types';

const defaultState = {
  loading: false,
  queueActions: [],
};

const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.FINISHED:
      return {
        ...state,
        loading: false,
      };
    case types.CLEAR_CORE:
      return defaultState;
    default:
      return state;
  }
};

export default reducers;
