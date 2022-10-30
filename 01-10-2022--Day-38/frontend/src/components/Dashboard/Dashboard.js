import { Box, Grid, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Modal, Button, TextField} from '@mui/material'
import axios from 'axios'
import React, { useEffect, useContext, useState } from 'react'
import { store } from '../../App'
import {  useNavigate } from 'react-router-dom';
import './dashboard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};



const Dashboard = () => {
	const {token,profile} = useContext(store)
  const navigate = useNavigate()
	const [url,setUrls] = useState([])
  const [open, setOpen] = useState(false);
  const [postUrl, setPosturl] = useState("")
  const [notification,setNotification] = useState("")


	const getUrls = async ()=>{
     await axios.get('https://urlshortners.onrender.com/url')
      .then((res)=>setUrls(res.data.data))
      .catch(err=>console.log(err))
	}

  const handleClick = (short)=>{
    getUrls()
    window.open(`https://urlshortners.onrender.com/url/${short}`)
  }

  const postFullUrl = async ()=>{
    await axios.post("https://urlshortners.onrender.com/url/shortUrls",{"full":postUrl})
      .then(res=>setNotification(res.data.message))
      .catch(error=>console.log(error))
      await getUrls() 
    setOpen(false)
  }

	useEffect(()=>{
		postFullUrl()
    if(!token) {
      navigate('/login')
    } 
	},[])

const notifications = (msg)=>{
  if(notification  == "Already this url used"){
    toast.warning(notification, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      setNotification("")
  }
  else if (notification == "Error"){
    toast.error(notification, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      setNotification("")
  }
  else if (notification == "Success"){
    toast.success(notification, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
      setNotification("")
  }
}






notifications()
  return (
	<>
  {
    profile && <>
    <Box>
      <Button onClick={ () => setOpen(true)}>Create Short Url</Button>
      <Modal
        open={open}
        onClose={ () => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <TextField onChange={(e)=>setPosturl(e.target.value)}/>
            <Button onClick={postFullUrl}>COnvert</Button>
        </Box>
      </Modal>
    </Box>

  <div class="h-100 d-flex align-items-center justify-content-center">


  <table class="table">
  <thead>
    <tr>
        <th scope="col">S.no</th>
        <th scope="col">Full Url</th>
        <th scope="col">Short Url</th>
        <th scope="col">Clicks</th>
    </tr>
  </thead>
  <tbody>
   

    {
      url?.map((url,idx)=>{
         return <>
         <tr key={idx}>
         <td>{idx}</td>
            <td>{url.full}</td>
            <td  className="cursor-pointer short" onClick={()=>handleClick(url.short)} >{url.short}</td>
            <td >{url.clicks}</td>
          </tr> 
        </>
    })
    }
  </tbody>
</table>

</div>
    </>
  
  }
  <ToastContainer />
	</>
  )
}

export default Dashboard