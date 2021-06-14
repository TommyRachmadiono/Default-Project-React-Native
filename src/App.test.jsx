/**
 * @format
 */

import { render } from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import App from './App';

describe('App', () => {
  it('should render App', () => {
    const { getByText } = render(<App />);
    const appText = getByText('APP SCREEN');

    expect(appText).toBeTruthy();
  });
});
