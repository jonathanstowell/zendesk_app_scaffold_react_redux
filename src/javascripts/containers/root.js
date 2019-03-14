import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import { PropTypes } from 'prop-types';

export default class Root extends Component {

  createElement(Component, props) {
    return <Component { ...this.props.store } />;
  }

  get content() {
    return (
      <ConnectedRouter history={ this.props.history } >
        { this.props.routes }
      </ConnectedRouter>
    );
  }

  render() {
    return (
      <Provider store={ this.props.store }>
        <div style={{ height: '100%' }}>
          { this.content }
        </div>
      </Provider>
    );
  }
}

Root.propTypes = {
  history: PropTypes.object.isRequired,
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired
};
