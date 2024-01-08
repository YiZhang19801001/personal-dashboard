import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Routes } from './Routes';

const renderRoutes = (route = '/') => {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Routes />
    </MemoryRouter>
  );
};

describe('<Routes />', () => {
  it('should show home view', () => {
    renderRoutes();

    expect(
      screen.getByRole('heading', { name: 'Dashboard', level: 3 })
    ).toBeInTheDocument();
  });

  it('should show weekly-goals view', () => {
    renderRoutes('/weekly-goals');

    expect(
      screen.getByRole('heading', { name: 'Weekly Goals', level: 3 })
    ).toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Dashboard', level: 3 })
    ).not.toBeInTheDocument();
  });

  it('Should show 404 errors when no path match', () => {
    renderRoutes('/not-found');

    expect(screen.getByText('404 - Not Found')).toBeInTheDocument();
  });
});
