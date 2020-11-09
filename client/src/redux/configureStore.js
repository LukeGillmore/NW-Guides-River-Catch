import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import catchReducer from './catchReducer';

export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
        catchReducer : catchReducer  
      }),
      applyMiddleware(thunk, logger)
    )
  
    return store
  }