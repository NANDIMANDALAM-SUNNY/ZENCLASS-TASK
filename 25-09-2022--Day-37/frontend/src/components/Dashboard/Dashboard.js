import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {store} from '../../App'
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';


const Dashboard = () => {
  const navigate = useNavigate();
  const [token,setToken] = useContext(store);
  const [data,setData] = useState([]);
 

  
  const getData =async ()=>{
    await axios.get('https://forgot-password.onrender.com/userData',{
      headers:{
        'jwttoken':token
      }
    }).then(res=>{
      setData(res.data.data)
      }
      )
      .catch(err=>console.log(err))
  }
  useEffect(()=>{
    if(token === null) {
      navigate('/login')
    } 
    if(token){
      getData()
    }  
  },[token])
  if(data == null || data == undefined){
    localStorage.removeItem('jwttoken')
  }

  return (
    <>
       {
       data  && <Box>
            <Typography variant='h6'>This webite is still in construction <br /> Registration,Login and Forgot Password is been implemented according to guvi task</Typography>
            <Typography variant='h3'>Welcome : {data.name}</Typography>
            <Button onClick={()=>setToken(null)} variant="contained">Logout</Button>
            </Box>
       }    
      
       </>
  )
}

export default Dashboard
