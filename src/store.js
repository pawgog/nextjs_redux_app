import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';

const middlewares = [thunk];

const initialState = {
  pending: false,
  info: [],
  error: null,
};

export const initializeStore = () => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );
};
