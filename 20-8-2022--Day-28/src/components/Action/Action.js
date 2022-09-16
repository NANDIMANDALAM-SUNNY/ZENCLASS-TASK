import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import {signUpSchema} from './FormValidation'
import { useFormik } from "formik";
import axios from 'axios';



const Action = () => {
    const {id} = useParams()
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
     initialValues: {
        name: "",
        email: "",
        profession: "",
        place: "",
        vehicle: "",
     },
     validationSchema: signUpSchema,
     onSubmit :async (values,action)=>{
        if(id){
            await  axios.put(`https://632405b85c1b4357279ef41b.mockapi.io/users/${id}`,values)
            .then((res)=>{
                console.log(res.data)
                alert("Updated User Successfully")
                navigate('/')
            })
            .catch((err)=>{
                console.log(err);
                alert(err)
            })
           console.log(values)
            action.resetForm()
        }
        else{

       await  axios.post(`https://632405b85c1b4357279ef41b.mockapi.io/users`,values)
         .then((res)=>{
             console.log(res.data)
             alert("Added User Successfully")
             navigate('/')
         })
         .catch((err)=>{
             console.log(err);
             alert(err)
         })
        console.log(values)
         action.resetForm()
        }

     },
     onChange:(values)=>{
         console.log(values)
     }
   });


   useEffect (()=>{
    if(id){
        axios.get(`https://632405b85c1b4357279ef41b.mockapi.io/users/${id}`)
        .then((res)=>values.data).catch((err)=>alert(err))
    }
   },[id])

   console.log(values)
  return (
    <>

            <div>
            <h1 className='text-center mb-5'>{id?"Update a Profile":"Create a Profile"}</h1>
            <form noValidate autoComplete='off' onSubmit={handleSubmit}>
                <div class="form-group">
                    <label >Name</label>
                    <input 
                     onChange={handleChange} 
                     onBlur={handleBlur} 
                     value={values.name} 
                     id='name'
                    //    name='name'
                    autoFocus   
                    class="form-control"
                    type="name"
                    placeholder="Default input" />
                    {errors.name && touched.name && <p className="error">{errors.name}</p>}
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input  onChange={handleChange} onBlur={handleBlur} value={values.email} id='email'  name='email' autoFocus  type="email" class="form-control"  aria-describedby="emailHelp" placeholder="Enter email" />
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}

                </div>
                <div class="form-group">
                    <label >Profession</label>
                    <input onChange={handleChange} onBlur={handleBlur} value={values.profession} id='profession'  name='profession' autoFocus   class="form-control" type="text" placeholder="Default input" />
                </div>
                <div class="form-group">
                    <label >Place</label>
                    <input onChange={handleChange} onBlur={handleBlur} value={values.place} id='place'  name='place' autoFocus   class="form-control" type="text" placeholder="Default input" />
                    {errors.place && touched.place && <p className="error">{errors.place}</p>}

                </div>               
                 <div class="form-group">
                    <label >Vehicle</label>
                    <input onChange={handleChange} onBlur={handleBlur} value={values.vehicle} id='vehicle'  name='vehicle' autoFocus   class="form-control" type="text" placeholder="Default input" />
                    {errors.vehicle && touched.vehicle && <p className="error">{errors.vehicle}</p>}
                </div>
                <button type='submit' class="btn btn-primary">{id?"Edit":"Create"}</button>
                <button type='submit' class="btn btn-primary" onClick={()=>navigate('/')}>Go Back</button>
                </form>
            </div>
    </>
  )
}

export default Action

