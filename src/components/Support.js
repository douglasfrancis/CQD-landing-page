import React, { useState} from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import { toast } from 'react-toastify'
import axios from 'axios'
import './Support.css'

export default function Support() {
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
    <div>
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, p: 4, textAlign:'center' }}>
            <h1 className='gotham-black'>Support</h1>
            <p className='gotham-bold'>If you have ay enquiries, please get in touch using the form below.</p>
        </Container>

        <form id='support-form' onSubmit={handleSubmit}>
                <TextField label="Full Name" fullWidth  sx={{mb:2}} value={name} onChange={(e)=>setName(e.target.value)}/>
                <TextField label="Email" type={'email'} fullWidth  sx={{mb:2}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <TextField label="Number" type={'number'} fullWidth  sx={{mb:2}} value={number} onChange={(e)=>setNumber(e.target.value)}/>
                <TextField label="Enquiry" fullWidth multiline rows={5}  sx={{mb:2}} value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                <p style={{fontSize: '0.8rem', textAlign: 'left', display: 'inline-block'}}><span><input style={{height: 20, width: 20, marginRight: 10, display:'inline-block'}} type='checkbox'  onChange={()=>setChecked(!checked)}/></span>
                I accept the Care Quality Digital Terms of Service, Privacy Policy, and consent to allow Care Quality Digital to store and process the personal information submitted above to communicate with me and provide me with access to Care Quality Digital services.
                </p>
                <Button disabled={loading} type="submit" variant='outlined' sx={{mt:2, color: '#288', borderColor: '#288', width: '200px'}}>Submit</Button>
                </form>
    </div>
  )
}
