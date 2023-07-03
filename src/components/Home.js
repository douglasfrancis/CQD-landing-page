import React, { useRef, useState} from 'react'
import screenshot from '../Assets/screenshot.png'
import './Home.css'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
export default function Home() {

  const form = useRef();
  const [sending, setSending] = useState(false)
 
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
    <div id='home'>
        <div id='home-info'>
            <h1>Home Care Made Easy</h1>
            <p style={{fontSize:'1.2rem', fontFamily: 'Albert Sans', color:'#919191'}}>Our home care app makes it simple to manage all of your clients and staff easily and effectively, allowing you to continue giving great care.</p>
            <div>
              <form ref={form}>
                <input id='email-input' placeholder='Email Address*' name='email'/>
                <button className='book-demo' onClick={sendEmail} disabled={sending}>Book Demo</button>
              </form>
                
            </div>
          
        </div>
        <img id='screenshot-img' src={screenshot} alt='care quality digital home care app'/>
    </div>
  )
}
