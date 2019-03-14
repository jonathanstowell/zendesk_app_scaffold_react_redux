import React from 'react';
import { PropTypes } from 'prop-types';
import { ThemeProvider } from '@zendeskgarden/react-theming';

function CoreLayout ({ children }) {
  return (
    <ThemeProvider>
        {children}
    </ThemeProvider>
  );
}

CoreLayout.propTypes = {
  children: PropTypes.element
};

export default CoreLayout;
