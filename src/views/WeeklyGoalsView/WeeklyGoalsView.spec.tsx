import React from 'react';
import { render, screen } from '@testing-library/react';
import WeeklyGoalsView from './WeeklyGoalsView';

test('render components without errors', () => {
  render(<WeeklyGoalsView />);
});
