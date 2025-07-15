import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import DashboardHome from './pages/Dashboard/DashboardHome';
import WelcomeBanner from './WelcomeBanner';
import JobDetails from './pages/JobDetails/JobDetails';
import JobRecommendations from './pages/JobRecommendations/JobRecommendations';
import JobsList from './pages/Joblists/JobsList';
import LoginModal from './components/LoginModel/LoginModal';
import MessagingUI from './components/MessagingUI/MessagingUI';
import MyApplications from './pages/MyApplicatiopns/MyApplications';
import StepOne from './components/Stepper/StepOne';
import StepTwo from './components/Stepper/stepTwo';
import TodoList from './components/TodoList';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import SignUpPage from './pages/Signup/SignUpPage';

function App() {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('formData');
    return saved ? JSON.parse(saved) : {
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      city: '',
      gender: '',
      languages: [],
      type: ''
    };
  });

  const updateFormData = (updates) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginModal />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/welcome" element={<DashboardHome />} />
        <Route path="/dashboard" element={<JobsList />} />
        <Route path="/jobs" element={<JobsList />} />
        <Route path="/job/:id" element={<JobDetails />} />
        <Route path="/applications" element={<MyApplications />} />
        <Route path="/messaging" element={<MessagingUI />} />

        {/* Multi-step Registration Routes */}
        <Route
          path="/step-one"
          element={
            <StepOne
              formData={formData}
              updateFormData={updateFormData}
              nextStep={() => window.location.href = "/step-two"}
            />
          }
        />
        <Route
          path="/step-two"
          element={
            <StepTwo
              updateFormData={updateFormData}
              prevStep={() => window.location.href = "/step-one"}
            />
          }
        />

        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
