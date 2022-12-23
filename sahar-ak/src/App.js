import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import FirstSection from './components/FirstSection';


function App() {
  return (
    <div>
      <BrowserRouter>
        <FirstSection />
      </BrowserRouter>
    </div>
  );
}

export default App;