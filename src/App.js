import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components
import Support from './components/Support';
import Pricing from './components/Pricing';
import Features from './components/Features';


function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='top-center'/>
      <Routes>
        <Route path="/" element={<Features />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/support" element={<Support />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App;
