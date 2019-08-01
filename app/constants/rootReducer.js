import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import coreReducers from '../ducks/core/reducers';

const corePersistConfig = {
  key: 'core',
  storage,
};

const rootReducer = {
  core: persistReducer(corePersistConfig, coreReducers),
};
export default rootReducer;
