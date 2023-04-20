import React, {useState} from 'react'
import { TextField, Button, Container } from '@mui/material'
import { toast } from 'react-toastify'
import axios from 'axios'

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [number, setNumber] = useState("")
    const [error, setError] = useState(false)
    const [sent, setSent] = useState(false)   
    const [checked, setChecked] = useState(false)


    const payload ={
        name, number, email, msg
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //setLoading(true)
        if(!name || !email || !number || !msg){
            toast.error("Please add all fields");
            setLoading(false)
            return;
        } else{
        axios.post(`${process.env.REACT_APP_API}/email`, payload).then(function(res){
          if(res.status === 200){
            toast.success(res.data)
            setSent(true)
            clearFields()
          }
         
        }).catch(function(err){
          toast.error("Error sending message")
          setError(true)
        })
        }
    }

    const clearFields = () =>{
        setName("");setNumber("");setEmail("");setMsg("")
    }
  return (
      <>
      {!sent && 
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, p: 4, textAlign:'center' }}>
        <h1 className='gotham-black'>Book Demo</h1>

       <p className='gotham-bold'>If you have any questions or would like a demo, please get in touch by filling in the form below</p>
       </Container>}
    

        {error &&
        <Container>
          
          <h4>We're sorry there was an error</h4>

        <p>Please contact us directly by emailing info@cqd.org.uk</p>
        </Container>}

        {!error && sent &&
        <Container>
          <h4>Thank You For Getting In Touch</h4>

          <p>We aim to respond to all requests within 1 working day</p>
        </Container>}
        
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6, p:2, mt: 2 }}>
                <form style={{textAlign: 'center'}} onSubmit={handleSubmit}>
                <TextField label="Full Name" fullWidth  sx={{mb:2}} value={name} onChange={(e)=>setName(e.target.value)}/>
                <TextField label="Email" type={'email'} fullWidth  sx={{mb:2}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <TextField label="Number" type={'number'} fullWidth  sx={{mb:2}} value={number} onChange={(e)=>setNumber(e.target.value)}/>
                <TextField label="Please provide some basic info about your company or request" fullWidth multiline rows={5}  sx={{mb:2}} value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                <p style={{fontSize: '0.8rem', textAlign: 'left', display: 'inline-block'}}><span><input style={{height: 20, width: 20, marginRight: 10, display:'inline-block'}} type='checkbox'  onChange={()=>setChecked(!checked)}/></span>
            I accept the Care Quality Digital Terms of Service, Privacy Policy, and consent to allow Care Quality Digital to store and process the personal information submitted above to communicate with me and provide me with access to Care Quality Digital services.
            </p>
                <Button disabled={loading} type="submit" variant='outlined' sx={{mt:2, color: '#288', borderColor: '#288', width: '200px'}}>Submit</Button>
                </form>
        
      </Container>
      </>
  )
}
