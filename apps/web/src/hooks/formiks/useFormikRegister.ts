import { useFormik } from 'formik';
import * as Yup from 'yup';

const useFormikRegister = () => {
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
      });
      const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
        },
        validationSchema,
        onSubmit: (values, { resetForm }) => {},
    
      });

      return formik

}

export default useFormikRegister

