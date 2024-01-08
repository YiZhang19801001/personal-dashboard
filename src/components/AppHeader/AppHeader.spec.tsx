import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import AppHeader from './AppHeader';

test('component should render without errors', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AppHeader />
    </MemoryRouter>
  );

  expect(screen.getByText('TaskYi')).toBeInTheDocument();
});

test('Should show page title as Dashboard in home page', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <AppHeader />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', { name: 'Dashboard', level: 3 })
  ).toBeInTheDocument();
});

test('Should show page title as Weekly Goals in home page', () => {
  render(
    <MemoryRouter initialEntries={['/weekly-goals']}>
      <AppHeader />
    </MemoryRouter>
  );

  expect(
    screen.getByRole('heading', { name: 'Weekly Goals', level: 3 })
  ).toBeInTheDocument();
});
