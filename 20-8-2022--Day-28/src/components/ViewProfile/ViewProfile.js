import React,{useEffect, useState} from 'react'
import { Link, useParams ,useNavigate} from 'react-router-dom';
import axios from 'axios'



const ViewProfile = () => {
    const params = useParams()
    const [view,setView] = useState({})


    useEffect(() => {
        axios.get(`https://632405b85c1b4357279ef41b.mockapi.io/users/${params.id}`)
        .then((res) => {
            setView(res.data)
        }).catch((err) => {
          console.log(err)
        });
      
      }, [])
    console.log(view)

  return (
    <>

      <h1>{view.name}</h1>
      <h2>{view.profession}</h2>
      <h3>{view.vehicle}</h3>
      <h4>{view.place}</h4>
      <Link to='/'><button className='btn btn-warning' > Go Back </button></Link>
    </>
  )
}

export default ViewProfile