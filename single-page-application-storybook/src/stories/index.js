import React from 'react';
import { storiesOf } from '@storybook/react';

import App from 'single-page-application/src/App'

storiesOf('Projects', module)
    .add('Storybook', () => (
        <h1>Hello Storybook!</h1>
    ))
    .add('Single Page Application', () => (
      <App />
    ))
