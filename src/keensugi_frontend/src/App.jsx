import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Form from './pages/form'; 
import Community from './pages/community';// Adjust the path based on your file structure
import Donation from './pages/donation';
import Statistics from './pages/statistics';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define the Home page as the default route */}
        <Route path="/" element={<Home />} />
        {/* Define the Report Form page route */}
        <Route path="/form" element={<Form />} />
        <Route path="/groups" element={<Community />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
};

export default App;
