import { createStore, combineReducers } from 'redux';
import authReducer from './authSlice';
import homeReducer from './homeSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  home: homeReducer,
});

const store = createStore(rootReducer);

export default store;