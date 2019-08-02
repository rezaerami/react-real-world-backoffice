import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import coreReducers from '../ducks/core/reducers';
import authReducers from '../ducks/auth/reducers';

const corePersistConfig = {
  key: 'core',
  storage,
};
const authPersistConfig = {
  key: 'auth',
  storage,
};

const rootReducer = {
  core: persistReducer(corePersistConfig, coreReducers),
  auth: persistReducer(authPersistConfig, authReducers),
};
export default rootReducer;
