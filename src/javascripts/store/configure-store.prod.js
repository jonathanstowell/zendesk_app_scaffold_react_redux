import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createMemoryHistory } from 'history'

export const history = createMemoryHistory();

const configureStore = preloadedState => createStore(
  rootReducer(history),
  preloadedState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      routerMiddleware(history)
    )
  )
);

export default configureStore;
