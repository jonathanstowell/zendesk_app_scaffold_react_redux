import { handleActions } from 'redux-actions';

const defaultState = {
  resultMessage: '',
  hasSuccess: false,
};

const messages = handleActions({
  INSERT_MESSAGE: (state, action) => ({
    hasSuccess: true,
    resultMessage: 'success!',
  }),
  MESSAGE_FAILED: (state, action) => ({
    hasSuccess: false,
    resultMessage: 'failed (are you outside of zendesk?)',
  }),
  '@@router/LOCATION_CHANGE': (state, action) => (defaultState),
}, defaultState);

export default messages;
