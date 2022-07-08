import React, {useState} from 'react'
import { TextField, Button, Container, Typography } from '@mui/material'
import { toast } from 'react-toastify'

export default function Contact() {
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [msg, setMsg] = useState("")
    const [number, setNumber] = useState("")

    const payload ={
        name, number, email, msg
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true)
        if(!name || !email || !number || !msg){
            toast.error("Please add all fields");
            setLoading(false)
            return;
        } else{
            console.log(payload)
            clearFields();
        }
    }

    const clearFields = () =>{
        setName("");setNumber("");setEmail("");setMsg("")
    }
  return (
      <>
    <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, p: 4 }}>
       <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Book Demo
        </Typography>

        <Typography
          variant="h5" align="center" color="text.secondary" component="p"
        >
          If you have any questions or would like a demo, please get in touch by filling in the form below
        </Typography>
        </Container>
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6, p:2, mt: 2 }}>
                <form style={{textAlign: 'center'}} onSubmit={handleSubmit}>
                <TextField label="Full Name" fullWidth  sx={{mb:2}} value={name} onChange={(e)=>setName(e.target.value)}/>
                <TextField label="Email" type={'email'} fullWidth  sx={{mb:2}} value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <TextField label="Number" type={'number'} fullWidth  sx={{mb:2}} value={number} onChange={(e)=>setNumber(e.target.value)}/>
                <TextField label="Please provide some basic info about your company or request" fullWidth multiline rows={5}  sx={{mb:2}} value={msg} onChange={(e)=>setMsg(e.target.value)}/>
                <Button disabled={loading} type="submit" variant='outlined' sx={{color: '#288', borderColor: '#288', width: '200px'}}>Submit</Button>
                </form>
        
      </Container>
      </>
  )
}
