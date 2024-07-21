import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FormPage from './FormPage';
import ThankYouPage from './ThankYouPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  );
}

export default App;


