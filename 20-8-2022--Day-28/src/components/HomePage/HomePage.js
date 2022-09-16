import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Link,useNavigate} from 'react-router-dom'
import {AiFillDelete} from 'react-icons/ai'
import {BsFillPenFill} from 'react-icons/bs'

const HomePage = () => {

    const navigate = useNavigate()
    const [data, setData] = useState([])

    const getData =async ()=>{
     await axios.get("https://632405b85c1b4357279ef41b.mockapi.io/users")
      .then((res) => {
        setData(res.data)
      }).catch((err) => {
        console.log(err)
      });
    }
   

    const handleDelete =async (id)=>{
      alert('deleting the data mockapi is responding slow it is taking alomost 10 sec to respond')
    await  axios.delete(`https://632405b85c1b4357279ef41b.mockapi.io/users/${id}`,{
          method:'DELETE'})
      .then(response=>{
        getData()
        alert("Deleted")
      }).catch((err)=>{
        alert(err)
      })
  }


    useEffect(() => {
     getData()
    }, [])
    console.log(data)
  return (
<>
    <button className='btn btn-success' onClick={()=>navigate('/action')}>Create a profile</button>
    <table class="table table-dark">

        <thead>

            <tr>
            
                <th scope="col">S.No</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Gender</th>
                <th scope="col">Profession</th>
                <th scope="col">Place</th>
                <th scope="col">vehicle</th>
                <th scope="col">Update/Delete</th>
            </tr>
        </thead>
        <tbody>
            {
                data && data.map((item)=>{
                    return <>
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.profession}</td>
                            <td>{item.place}</td>
                            <td>{item.vehicle}</td>
                            <td>
                                <button className='btn btn-primary'  variant="contained" color="secondary" onClick={()=>navigate('/action/'+item.id)}><BsFillPenFill /></button>
                                <button className='btn btn-info'  variant="contained" color="secondary" onClick={()=>navigate('/user/'+item.id)}>View</button>
                                <button className='btn btn-danger'  variant="contained" color="secondary"  onClick={()=>handleDelete(item.id)} > <AiFillDelete /></button>
                               
                            </td>  
                        </tr>
                    </>
                })
            }
        </tbody>
    </table>
    </>
  )
}

export default HomePage