import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

//components
import Demo from './components/Demo';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Navbar from './components/Navbar';
import Terms from './components/Terms';
import Team from './components/Team';
import Accessibility from './components/Accessibility';
import Footer from './components/Footer';
import Home from './components/Home';
import Support from './components/Support';
import Blog from './components/Blog';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <ToastContainer position='top-center'/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/features" element={<Features />}/>
        <Route path="/pricing" element={<Pricing />}/>
        <Route path="/book-demo" element={<Demo />}/>
        <Route path="/support" element={<Support />}/>
        <Route path="/terms" element={<Terms />}/>
        <Route path="/team" element={<Team />}/>
        <Route path="/accessibility" element={<Accessibility />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path='/blog/:id' element={<BlogPost />}/>
      </Routes>
      <Footer />
  </BrowserRouter>
  );
}

export default App;
