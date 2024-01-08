import React from 'react';
import { render, screen } from '@testing-library/react';
import HomeView from './HomeView';

test('render component', () => {
  render(<HomeView />);
});
