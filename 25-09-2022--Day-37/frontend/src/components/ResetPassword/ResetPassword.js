import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Grid, Typography ,TextField,Box, Button} from '@mui/material'
import { useParams,useNavigate } from 'react-router-dom'
import { Link as RouterLink } from 'react-router-dom';
import expired from './expired.svg'
import { styled } from '@mui/material/styles';


const Root = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
      display:"none"
    }
  }));
  

const ResetPassword = () => {
const {token,id} = useParams()
const navigate = useNavigate()
const [response,setResponse]=useState("")
const [password,setPassword] = useState()

const verifyToken =async ()=>{
   await axios.get(`https://forgot-password.onrender.com/resetpassword/${id}/${token}`)
    .then(res=>{
        setResponse(res.data.message)
        
    })
}

const handleSubmit=async ()=>{
await axios.post(`https://forgot-password.onrender.com/newpassword/${id}/${token}`,password)
.then(res=>{
    alert("Success")
    navigate("/login")
})
}

useEffect(() => {
verifyToken()
}, [])

  return (
    <>
        {
            response && response==="User Verified"?<>
                <Grid container >
                    <Grid item xs={1} md={3}></Grid>
                    <Grid item xs={10} md={6}>
                    <Box >    
                    <Typography variant='h3'  align='center' sx={{mt:4,mb:2,color:"#526AD4"}} >Enter new password</Typography>
                            <TextField id="outlined-basic" name="password"  onChange={(e)=>setPassword({[e.target.name]:e.target.value}) }   sx={{mt:10,ml:5,width:"75%"}} label="Password" variant="outlined"  />
                            <Button sx={{ml:5}} onClick={handleSubmit} variant='contained' >Submit</Button>
                        </Box>
                    </Grid>
                    <Grid item xs={1} md={3}></Grid>
                </Grid>
            </>
            : response==="Link has been expired"?<>
                    <Grid container spacing={2}>
                    <Grid item xs={0} md={6} ><Root><img src={expired} style={{display:"block",marginLeft: "auto",marginRight: "auto",marginTop:"150px",width: "50%"}}/></Root> </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3' fontWeight='400' align='center' sx={{mt:10,mb:7,color:"#526AD4"}} >Your Verification link has been expired⌛</Typography>
                        <Typography variant='h6'  fontWeight='100' textAlign="center" sx={{color:"#526AD4"}} >Please click below to request a new Verification link to your mail </Typography>
                        <Button sx={{m:3,ml:5}} variant='contained' component={RouterLink} to='/forgotpassword'>Forgot PassWord</Button>
                    </Grid>
            </Grid>
            </>:response==="The Link has been already used"?<>
            <Grid container spacing={2}>
                    <Grid item xs={0} md={6} ><Root><img src={expired} style={{display:"block",marginLeft: "auto",marginRight: "auto",marginTop:"150px",width: "50%"}}/></Root> </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant='h3' fontWeight='400' align='center' sx={{mt:10,mb:7,color:"#526AD4"}} >This Link has been already used ⌛</Typography>
                        <Typography variant='h6'  fontWeight='100' textAlign="center" sx={{color:"#526AD4"}} >Please click below to request a new Verification link to your mail </Typography>
                        <Button sx={{m:3,ml:5}} variant='contained' component={RouterLink} to='/forgotpassword'>Forgot PassWord</Button>
                    </Grid>
            </Grid>
            </>
            :<h1>"Internal Server"</h1>
        }
    </>
  )
}

export default ResetPassword