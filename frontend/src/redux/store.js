// store.js
import { createStore, combineReducers } from 'redux';
import adsReducer from './adsRedux';
import usersReducer from './usersRedux';
import userDataReducer from './userData';
import initialState from './initialState';

const rootReducer = combineReducers({
  ads: adsReducer,
  users: usersReducer,
  userData: userDataReducer,
});

const store = createStore(rootReducer, initialState);

export default store;
