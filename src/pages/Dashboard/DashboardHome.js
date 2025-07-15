import React from 'react';
import WelcomeBanner from '../../WelcomeBanner';
import TodoList from '../../components/TodoList';
import JobRecommendations from '../JobRecommendations/JobRecommendations';

const DashboardHome = () => {
  return (
    <div>
      <WelcomeBanner />
      <TodoList />
      <JobRecommendations />
    </div>
  );
};

export default DashboardHome;