import React from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle: { [key: string]: string } = {
  '/': 'Dashboard',
  '/weekly-goals': 'Weekly Goals',
};

function AppHeader() {
  const { pathname } = useLocation();

  return (
    <div>
      <div>TaskYi</div>
      <h3>{PageTitle[pathname]}</h3>
    </div>
  );
}

export default AppHeader;
