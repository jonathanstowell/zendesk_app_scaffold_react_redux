import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'

import messages from './messages';

const rootReducer = (history) => combineReducers({
  messages,
  router: connectRouter(history)
});

export default rootReducer;
