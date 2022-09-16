import * as Yup from 'yup'

export const signUpSchema = Yup.object({
    name:Yup.string().min(5).max(15).required("Please Enter Your Name"),
    email:Yup.string().min(3).max(25).required("Please Enter Your Email"),
    profession:Yup.string().min(2).max(15).required("Please Enter Your Profession"),
    place:Yup.string().min(2).max(10).required("Please Enter Your Place"),
    vehicle:Yup.string().min(2).max(10).required("Please Enter Your Vehicle"),

})