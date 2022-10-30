import * as Yup from 'yup'

export const signUpSchema = Yup.object({
   name: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Name Required'),
   email: Yup.string().email('Invalid email').required('Email Required'),
   mobileNumber: Yup.string().min(2, 'Too Short!').max(11, 'Too Long!').required('Mobile NumberRequired'),
   role: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Role Required'),
   password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Password Required'),
})