import React, { useState } from 'react'
import { Grid, Typography ,TextField,Box, Button} from '@mui/material'
import  forgot_password  from './forgot_password.svg';
import { styled } from '@mui/material/styles';
import { Link as RouterLink,useNavigate } from 'react-router-dom';
import axios from 'axios'


const Root = styled('div')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display:"none"
  }
}));

const ForgotPassWord = () => {
  const [emailData,setEmailData] = useState()
const navigate = useNavigate()
  const handleSubmit = (e)=>{
    e.preventDefault()
    axios.post('https://forgot-password.onrender.com/forgotpassword',emailData)
    .then((res)=>{
      alert(res.data.message)
      navigate('/login')
    })    
  }

  return (
   <>
    <Grid container spacing={2}>
        <Grid item xs={0} md={6} ><Root><img src={forgot_password} style={{display:"block",marginLeft: "auto",marginRight: "auto",marginTop:"150px",width: "50%"}}/></Root> </Grid>
        <Grid item xs={12} md={6}>
            <Typography variant='h3' align='center' sx={{mt:10,mb:7,color:"#526AD4"}} >Forgot Password?🤔</Typography>
            <Typography variant='h6' fontWeight='100' textAlign="center" sx={{color:"#526AD4"}} >Enter the email associated with your account <br /> and we we'll send you a link to reset your password</Typography>
            <Box >    
               <TextField id="outlined-basic" name="email"  onChange={(e)=>setEmailData({[e.target.name]:e.target.value}) }   sx={{mt:10,ml:5,width:"75%"}} label="Email" variant="outlined"  />
              <Typography sx={{mt:3,ml:5}}>Dont Have an account ?<Typography component={RouterLink} to='/register'  sx={{ m: 4 }}>Sign up here</Typography> </Typography>
              <Button sx={{mt:3,ml:5}} onClick={handleSubmit} variant='contained'>Submit</Button>
            </Box>
        </Grid>

    </Grid>
   </>
  )
}

export default ForgotPassWord