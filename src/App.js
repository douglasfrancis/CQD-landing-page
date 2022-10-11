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
import Navbar from './components/Navbar';
import Terms from './components/Terms';
import Team from './components/Team';
import Accessibility from './components/Accessibility';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='top-center'/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Features />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/terms" element={<Terms />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/accessibility" element={<Accessibility />}/>
      </Routes>
      <Footer />
  </BrowserRouter>
  );
}

export default App;
