import React, { useRef, useState} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'
import burger from '../Assets/burger.png'
import close from '../Assets/close.png'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export default function Navbar() {

  const form = useRef();
  const [sending, setSending] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
 
  const sendEmail = (e) => {
    e.preventDefault();

    {!form.current.email.value ?
    toast.error("Please input email address")
  :
  setSending(true)
  emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_QUICK_BOOK_TEMPLATE, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
        form.current.reset()
        toast.success("Successfully sent");
        setSending(false)
      }, (error) => {
          console.log(error.text);
          setSending(false)
          toast.error(error.text)
      });
      }
  };

  return (
    
        <header >
          <Link to={'/'}>
            <img id='nav-logo' src={'https://care-quality-digital-resources.s3.eu-west-2.amazonaws.com/CQD_Logo_Colour.png'} alt={'Care Quality Digital Logo'}/>
          </Link>
          <nav id='desktop-nav'>
            <Link to="/features">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/support">Support</Link>
          </nav>
          <div>
            <a href="https://app.cqd.org.uk">
              <button id='log-in'>
                Log In
              </button>
            </a>
            <a href="/book-demo">
              <button className='book-demo' id='book-demo'>
                Book Demo
              </button>
            </a>
          </div>

          <img onClick={()=>setSidebarOpen(!sidebarOpen)} id='burger-menu' src={burger} alt='mobile menu icon for CQD home care app'/>

          <div className={sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}>
            <img style={{width: 40}} onClick={()=>setSidebarOpen(!sidebarOpen)}  src={close} alt='close menu icon for CQD home care app'/>
            <nav id='sidebar-contents'>
              <Link onClick={()=>setSidebarOpen(!sidebarOpen)} to="/features">Features</Link>
              <Link onClick={()=>setSidebarOpen(!sidebarOpen)} to="/pricing">Pricing</Link>
              <Link onClick={()=>setSidebarOpen(!sidebarOpen)} to="/support">Support</Link>

              <input id='email-input' placeholder='Email Address*' name='email'/>
                <button className='book-demo' onClick={sendEmail} disabled={sending}>Book Demo</button>
            </nav>
          </div>
          
        </header>
   
  )
}
