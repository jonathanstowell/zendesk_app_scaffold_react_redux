import React from 'react';
import { render } from 'react-dom';
import { history } from './store/configure-store'
import configureStore from './store/configure-store';
import Root from './containers/root';
import routes from './routes';
import { resizeContainer } from './helpers/zaf-helpers';

var client = ZAFClient.init();

const MAX_HEIGHT = '500px';
const rootElement = document.getElementById('main');

const store = configureStore(window.__PRELOADED_STATE__);

try {
  client.on('app.registered', function (appData) {
    render(
      <Root history={ history } routes={ routes } store={ store } />,
      rootElement
    );
  
    resizeContainer(client, MAX_HEIGHT);
  });
} catch(error) {
  render(
    <Root history={ history } routes={ routes } store={ store } />,
    rootElement
  );
}

export { client };
