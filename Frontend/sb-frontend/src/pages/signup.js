import { useRef, useState } from 'react'
import MiddleHeader from "components/base/MiddleHeader";
import { Formik, Form, useField } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as Yup from "yup";

const MyTextInput = ({ label, actions, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='flex flex-col w-full'>
      <div className='flex flex-col '>
        <label
          className='text-mono-100 text-md font-semibold'
          htmlFor={props.id || props.name}
        >
          {label}
        </label>
        <input
          className='outline-none text-mono-100 text-sm font-normal bg-mono-900 p-2 rounded h-10 border-2 border-solid border-mono-800 focus:border-primary-200 active:border-primary-200 active:bg-mono-800'
          {...field}
          {...props}
        />
      </div>
      <div className='py-1 text-highlight-red'>
        {meta.touched && meta.error ? (
          <p className='first-letter:uppercase'>
            <i className='whitespace-nowrap fa-solid fa-circle-exclamation'></i>
            {meta.error}
          </p>
        ) : null}
      </div>
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
        <div className='flex flex-col w-full'>
        <div className='flex flex-col'>
            <label  className='text-mono-100 text-md font-semibold' htmlFor={props.id || props.name}>{label}</label>
            <select className='outline-none text-mono-100 text-sm font-normal bg-mono-900 p-2 rounded h-10 border-2 border-solid border-mono-800 focus:border-primary-200 active:border-primary-200 active:bg-mono-800' {...field} {...props} />
            {meta.touched && meta.error ? (
            <p className='whitespace-nowrap py-1 text-highlight-red first-letter:uppercase'>{meta.error}</p>
            ) : null}
        </div>
      </div>
  );
};

const MyCheckbox = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className='flex flex-col'>
      <div className='flex align-center flex-row-reverse gap-4'>
        <label
          className='mt-2 h-full text-mono-100 text-md font-semibold'
          htmlFor={props.id || props.name}
        >
          By checking this, you have read and agree to our <a href='/terms' className='text-primary-200 duration-200 ease-in hover:duration-200 hover:ease-in hover:text-primary-100 '>Terms and Conditions.</a>
        </label>
        <input
          className='w-4  outline-none text-mono-100 text-sm font-normal bg-mono-900 p-2 rounded h-10 border-2 border-solid border-mono-800 focus:border-primary-200 active:border-primary-200 active:bg-mono-800'
          {...field}
          {...props}
        />
      </div>
      <div className='py-1 text-highlight-red'>
        {meta.touched && meta.error ? (
          <p className='first-letter:uppercase'>
            <i class='whitespace-nowrap fa-solid fa-circle-exclamation'></i>
            {meta.error}
          </p>
        ) : null}
      </div>
    </div>
  );
};

const LoginForm = () => {
    const router = useRouter();


  return (
    <div className='min-w-full'>
      <Formik
        initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  username: "",
                  birthday: "",
                  password: "",
                  confirmPassword: "",
                //   fortniteName: "",
                //   fortniteType: "",
                //   valorantName: "",
                //   valorantTag: "",
                //   valorantRegion: "",
                  id: "",
                //   toggle: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Required"),
          lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required("Required"),
          email: Yup.string().email('Invalid email').required("Required"),
          username: Yup.string().min(3, 'Too Short!').max(20, 'Too Long!').required("Required"),
          birthday: Yup.string().min(10, 'Too Short!').max(10, 'Too Long!').required("Required"),
          password: Yup.string().min(7, 'Too Short!').max(25, 'Too Long!').required("Required"),
          confirmPassword: Yup.string().min(7, 'Too Short!').max(25, 'Too Long!').required("Required"),
        //   fortniteName: Yup.string(),
        //   fortniteType: Yup.string().oneOf(["Epic/PC", "Xbox", "Playstation"], 'Invalid Selection'),
        //   valorantName: Yup.string(),
        //   valorantTag: Yup.string().min(4, 'Too Short!').max(10, 'Too Long!'),
        //   valorantRegion: Yup.string().oneOf(["NA", "EU", "AP", "KR"], 'Invalid Selection'),
            // id: Yup.required("Required"),

        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const apiReq = await fetch("/register/", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          });

            // console.log(values)

          const data = await apiReq.json();

          // console.log(data);

          resetForm();

          setSubmitting(false);

            if (data.status == "200") {
              
                // account has been created successfully
                // verification email is then sent to user
                // modal pops up with input for verification code + resend verification code option
                // after correct code is submitted, push to home page 
                // send toast saying "Account is created successfully"



            router.push("/verification");

            // const sendToast = () =>
            //   toast.success("Account has been created successfully!", {
            //     position: "top-center",
            //     autoClose: 5000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: false,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "colored",
            //   });
            
            //   sendToast();
              

            } else if (data.status == "400") {

            router.push("/signup");

            const sendToast = () =>
              toast.warning(
                data.message,
                {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                }
              );
            
            sendToast();

          }
        }}
      >
     {({ isSubmitting }) => (
          <Form>
            <div className='gap-4 min-h-fit flex flex-col items-center justify-center'>      
                <div className=' w-full flex  justify-between items-center gap-4'>                     
                    <MyTextInput
                    label='First Name'
                    name='firstName'
                    type='text'
                    placeholder=''
                    />
                    <MyTextInput
                    label='Last Name'
                    name='lastName'
                    type='text'
                    placeholder=''
                    />
                </div>
                    <div className=' w-full flex  flex-col md:flex-row justify-between items-center gap-1 md:gap-4'>

                    <MyTextInput
                    label='Email'
                    name='email'
                    type='email'
                    placeholder=''
                    />
                    <MyTextInput
                    label='Date of Birth'
                    name='birthday'
                    type='date'
                    placeholder=''
                    />
                    <MyTextInput
                    label='Username'
                    name='username'
                    type='text'
                    placeholder=''
                    />
                </div>
                <div className=' w-full flex flex-col md:flex-row justify-between items-center gap-1 md:gap-4'>                     
                    <MyTextInput
                    label='Password'
                    name='password'
                    type='password'
                    placeholder=''
                    />
                    <MyTextInput
                    label='Confirm Password'
                    name='confirmPassword'
                    type='password'
                    placeholder=''
                    />
                </div>
                {/* <div className=' w-full flex flex-col md:flex-row justify-between items-center gap-1 md:gap-4'>                     
                    <MyTextInput
                    label='Fortnite Account Name'
                    name='fortniteName'
                    type='text'
                    placeholder=''
                    />
                    <MySelect label='Fortnite Account Type' name='forniteType'>
                        <option value='Epic/PC'>Epic/PC</option>
                        <option value='Xbox'>Xbox</option>
                        <option value='Playstion'>Playstation</option>
                    </MySelect>
                </div>
                <div className=' w-full flex flex-col md:flex-row justify-between items-center gap-1 md:gap-4'>                     
                    <MyTextInput
                    label='Valorant Account Name'
                    name='valorantName'
                    type='text'
                    placeholder=''
                    />
                    <MyTextInput
                    label='Valorant Account Tag'
                    name='valorantTag'
                    type='string'
                    placeholder=''
                    />
                    <MySelect label='Valorant Account Region' name='valorantRegion'>
                        <option value='NA'>NA</option>
                        <option value='EU'>EU</option>
                        <option value='AP'>AP</option>
                        <option value='KR'>KR</option>
                    </MySelect>
                </div> */}
                {/* <div className=' w-full flex flex-col md:flex-row justify-between items-center gap-1 md:gap-4'>                     
                    <MyTextInput
                    label='Picture of Photo ID'
                    name='form_picture_id'
                    type='file'
                    placeholder=''
                    />
                </div> */}
                {/* <div className='w-full flex flex-col md:flex-row justify-between items-center gap-1 md:gap-4'>                     
                    <MyCheckbox
                        name='toggle'
                        type='checkbox'
                        placeholder=''
                    />
                </div> */}
                <button
                type='submit'
                className='" mt-2 mb-2 w-full inline-block px-6 py-2.5 bg-primary-200 text-mono-900 font-medium text-s leading-normal uppercase rounded shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-0 transition duration-200 ease-in-out'
                disabled={isSubmitting}
                >
                Submit
                </button>
          </div>
        </Form>
      )}
          </Formik>
          
          
    </div>
  );
};

const HelperLinks = () => {
  return (
    <div className='min-w-full flex flex-col justify-center items-center whitespace-nowrap py-8'>
      <div className='whitespace-nowrap overflow-hidden flex gap-1'>
        <p className='text-mono-100 text-sm whitespace-nowrap'>
                  Already have an account?
        </p>
    
              <a href='/login'>      
        <p className='text-primary-200 duration-200 ease-in hover:duration-200 hover:ease-in hover:text-primary-100  text-sm'>Sign In</p>
        </a>
      </div>
    </div>
  );
};



const SignUp = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full'>
        <MiddleHeader>Sign Up</MiddleHeader>
        <div className='max-w-md w-full md:max-w-none'>      
              <LoginForm />
        </div>
        <HelperLinks />
    </div>
  );
};

export default SignUp;