import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(Yup);

const useFormikRegister = (setNext: CallableFunction) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('This FIeld is Required'),
    lastName: Yup.string().required('This FIeld is Required'),
    email: Yup.string()
      .email('Please enter a valid email')
      .required('This Field is Required'),
    phoneNumber: Yup.string()
      .required('This Field is Required')
      .min(12)
      .matches(/^[0-9]+$/, 'plese enter from 0 to 9'),
    password: Yup.string()
      .required('Password cannot be empty')
      .min(6)
      .minLowercase(1)
      .minUppercase(1),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password') ?? ''], 'Password must match')
      .required('Password cannot be empty'),
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: async(values, { resetForm }) => {
      try {
        setNext('input2')
        console.log(values);
        
      //  await axios.post('http://localhost:8000/users/register',{
      //   firstName: values.firstName,
      //   lastName: values.lastName,
      //   phoneNumber: values.phoneNumber,
      //   email: values.email,
      //   password: values.password
      //  })
      } catch (error) {
        console.log(error);
        
      }
      
    },
  });

  return formik;
};

export default useFormikRegister;
