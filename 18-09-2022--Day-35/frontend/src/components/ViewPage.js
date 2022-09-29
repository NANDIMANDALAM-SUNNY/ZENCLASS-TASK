import axios from 'axios'
import React,{useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


const ViewPage = () => {
    const  params = useParams() 
    const [data,setData]= useState([])
    const fetchData =async ()=>{
        await axios.get(`https://guvi-task-bk.onrender.com/mentor/${params.id}`)
        .then((res)=>setData(res.data.data))
    }
    useEffect(() => {
      fetchData()
    }, [])
    console.log(data)
  return (
    <>
       <h1>Mentor Name : {data.mentorName}</h1>
       <h3 className='mt-4'>Available Students</h3>
       <table class="table">
  <thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Student Name</th>
    </tr>
  </thead>
  <tbody>
  {
           data.students && data.students.map((item,i)=>{
            return <>
                <tr>
                    <td key={i+1}>{i+1}</td>
                    <td>{item}</td>
                </tr>
            </>
           })
        }
  </tbody>
</table>


       
    </>
  )
}

export default ViewPage