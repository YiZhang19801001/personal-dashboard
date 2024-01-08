import React from 'react';

import { Routes as ReactRoutes, Route } from 'react-router-dom';
import HomeView from '../views/HomeView/HomeView';
import WeeklyGoalsView from '../views/WeeklyGoalsView/WeeklyGoalsView';
import MainPage from '../components/MainPage/MainPage';

export const Routes = () => {
  return (
    <ReactRoutes>
      <Route path="/" element={<MainPage />}>
        <Route path="/weekly-goals" element={<WeeklyGoalsView />}></Route>
        <Route index element={<HomeView />}></Route>
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Route>
    </ReactRoutes>
  );
};
