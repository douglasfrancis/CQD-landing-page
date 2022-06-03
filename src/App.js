import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//components
import Features from './components/Features';
import Pricing from './components/Pricing';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Pricing />}/>
       
    </Routes>
  </BrowserRouter>
  );
}

export default App;
