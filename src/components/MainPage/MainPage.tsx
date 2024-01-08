import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../AppHeader/AppHeader';

function MainPage() {
  return (
    <div>
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default MainPage;
