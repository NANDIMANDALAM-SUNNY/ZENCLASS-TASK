import React, { useState,useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


const AddMentor = () => {
    const [mentor,setMentor]=useState("")
    const [data,setData] = useState([])
    const navigate = useNavigate()
      const handleSubmit =async (e)=>{
        e.preventDefault()
       await axios.post('https://guvi-task-bk.onrender.com/addmentors',mentor)
        .then(res=>{
          alert(res.data.message)
          getData()
        })
      }

        const getData =async ()=>{
          await  axios.get(`https://guvi-task-bk.onrender.com/mentors`)
         .then((res)=>setData(res.data.data))
      }

      useEffect(() => {
        getData()
      }, [])
    
console.log(data)
  return (
    <>
    <h1 className='text-center m-4'>Mentors</h1>
      <div className='row'>
              <div className='col-md-6'>
                <form>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Mentor Name</label>
                      <input type="text" class="form-control" name='mentorName'  onChange={(e)=>setMentor({...mentor,"mentorName":e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter mentor Name" />
                    </div>
                  <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>
               </form>
               <button className='btn btn-success mt-5 ' onClick={()=>navigate('students')} >Go to Students </button>
            </div>
            <div className='col-md-6'>
            <table class="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">MentorName</th>
      <th scope="col">MentorId</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
            {
              data.map((item,i)=>{
                return <>
                <tr>
                <td key={i+1}>{i+1}</td>
                <td>{item.mentorName}</td>
                <td>{item._id}</td>
                <td><button style={{display:"inline-block"}} className='btn btn-primary' onClick={()=>navigate(`/view/${item._id}`)}> View </button></td>  
                  </tr>
                </>
              })
            }
             
  </tbody>
</table>

            </div>
      </div>
    </>
  )
}

export default AddMentor