import React from 'react';
import InputFields from '../InputFields';

const Input1 = ({ setNext, formik }: any) => {
  const isEmptyObject = (obj: {}) => obj.constructor === Object && Object.keys(obj).length === 0;
  console.log(
    
  );

  

  return (
    <section className="m-10 ">
      <div className="mb-5 flex ">
        <div className="mr-6">
          <InputFields
            label="firstName"
            name="firstName"
            type="text"
            placeholder="text..."
            id="firstName"
            formik={formik}
          />
        </div>
        <div>
          <InputFields
            label="lastName"
            name="lastName"
            type="text"
            id="firstName"
            formik={formik}
          />
        </div>
      </div>
      <div className="mb-5">
        <InputFields
          label="phoneNumber"
          name="phoneNumber"
          type="text"
          id="phoneNumber"
          formik={formik}
        />
      </div>
      <div className="mb-5">
        <InputFields
          label="email"
          name="email"
          type="email"
          id="email"
          formik={formik}
        />
      </div>
      <div className="text-center">
        <div className="text-start ">
          <p className="hover:text-blue-500 hover:underline cursor-pointer">
            Have Account?
          </p>
        </div>
        <button
          disabled={!((Boolean(formik.values.firstName) &&
            Boolean(formik.values.lastName) &&
            Boolean(formik.values.phoneNumber) &&
            Boolean(formik.values.email)) && isEmptyObject(formik.errors))}
          className="text-white text-center bg-[#4f4cee] hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={() => setNext('input2')}
        >
          Continue
        </button>
      </div>
    </section>
  );
};

export default Input1;
