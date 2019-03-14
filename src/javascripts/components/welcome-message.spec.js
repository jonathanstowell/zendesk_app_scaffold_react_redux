import React from 'react';
import {render, fireEvent, cleanup} from 'react-testing-library';

import WelcomeMessage from './welcome-message';

test('should render welcome', () => {
    const welcome = render(
        <WelcomeMessage />,
    );

    expect(welcome.container.textContent).toEqual('Welcome!');
});