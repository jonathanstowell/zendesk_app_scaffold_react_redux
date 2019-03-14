import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router'
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createMemoryHistory } from 'history';

export const history = createMemoryHistory();

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(
        thunk, 
        promiseMiddleware,
        routerMiddleware(history)
      )
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
