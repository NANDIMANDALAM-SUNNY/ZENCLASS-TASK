import axios from 'axios'
import React,{useState,useEffect} from 'react'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import {useNavigate} from 'react-router-dom'



const AddStudents = () => {
    const [data,setData] = useState([])
    const [studata,setStuData] = useState([])
    const [student,setStudent] = useState({
      mentor:"",
      name:""
    })
    const navigate = useNavigate()
const getData = ()=>{
  axios.get(`https://guvi-task-bk.onrender.com/checkmentor`).then((response) => {
    setData(response.data.data);
  });
}
    const handleSubmit =async ()=>{
     await axios.post(`https://guvi-task-bk.onrender.com/addstudents`,student)
     .then(res=>{
      alert(res.data.message)
      studentData()
    })
    }

    const studentData =async () =>{
      await axios.get(`https://guvi-task-bk.onrender.com/students`)
      .then(res=>setStuData(res.data.data))
    }

    useEffect(()=>{
      getData()
      studentData()
    },[])
    console.log(studata)
  return (
   <>
    <h1 className='text-center m-4'>Students</h1>
    <div className='row'>
        <div className='col-md-6'>
          <div className="container">
          <label for="exampleInputEmail1">Mentor Name</label>

            <DropdownButton
            alignRight
            title={`${student.mentor}` || "select"}
            id="dropdown-menu-align-right"
            onSelect={(e)=>setStudent({...student,"mentor":e})}
              >
              {
                data && data.map((item,i)=>{
                      return <>
                      <Dropdown.Item key={i}  eventKey={`${item.mentorName}`}>{`${item.mentorName}`}</Dropdown.Item>
                      </>
                  })
              }
            </DropdownButton>
                  <div class="form-group">
                        <label for="exampleInputEmail1">Student Name</label>
                        <input type="text" class="form-control" name='name'  onChange={(e)=>setStudent({...student,"name":e.target.value})} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Student Name" />
                      </div>
                      <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>

      </div>
      <button className='btn btn-success mt-5 ' onClick={()=>navigate('/')} >Go to Mentors</button>

        </div>
        <div className='col-md-6'>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Student Name</th>
      <th scope="col">Mentor Name</th>
    </tr>
  </thead>
  <tbody>
    {
      studata && studata.map((item,i)=>{
        return <>
          <tr key={i+1}>
            <td>{i+1}</td>
            <td>{item.name}</td>
            <td>{item.mentor}</td>
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

export default AddStudents
