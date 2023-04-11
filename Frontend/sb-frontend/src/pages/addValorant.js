import { useRouter } from 'next/router'
import Layout from '../../components/layouts/InternalPage'
import { Formik, Form, useField } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

const MySelect = ({ label, actions, ...props }) => {
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
          <select
            className='outline-none text-mono-100 text-sm font-normal bg-mono-900 p-2 rounded h-10 border-2 border-solid border-mono-800 focus:border-primary-200 active:border-primary-200 active:bg-mono-800'
            {...props}
            {...field}
                > 
            </select>
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

const ValorantForm = () => {
    const router = useRouter()
    return (
        <>
        <Formik
            initialValues={{
                valorantAccountName: "",
                valorantAccountTag: "",
            }}
            validationSchema={
                Yup.object({
                    valorantAccountName: Yup.string().min(1).required("Required"),
                    valorantAccountTag: Yup.string().max(8).required("Required"),
                    valorantAccountRegion: Yup.string().oneOf(['eu', 'na', 'kr', 'ap' ], 'Region Required').required("Required"),
            })}
            onSubmit={ async (values, { setSubmitting, resetForm }) => {

                const apiReq = await fetch("/api/valorant/", {
                    method: "POST",
                    headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                });

                console.log(values)

                const data = await apiReq.json();

                // console.log(data);

                resetForm();

                setSubmitting(false);

                if (data.status == "200") {

                    router.push(data.redirect);
                

                    const sendToast = () =>
                      toast.success(data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                      });
                    
                      sendToast();
                        

                } else if (data.status == "400") {

                router.push(data.redirect);

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
                <div className=' w-full flex  flex-col md:flex-row justify-between items-center gap-1 md:gap-4'>
                    <MyTextInput
                        label='Valorant Account Name'
                        name='valorantAccountName'
                        type='text'
                        placeholder=''
                    />
                    <MyTextInput
                        label='Valorant Account Tag'
                        name='valorantAccountTag'
                        type='text'
                        placeholder=''
                                />
                    <MySelect
                        label='Valorant Account Region'
                        name='valorantAccountRegion'
                    >
                        <option value=''>Select an Account Type</option>
                        <option value='eu'>EU</option>
                        <option value='na'>NA</option>
                        <option value='kr'>KR</option>
                        <option value='ap'>AP</option>
                    </MySelect>
                </div>               
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
        </>
    )
}

const Valorant = () => {
    return (
        <Layout>
            <ValorantForm />
        </Layout>
    )
}

export default Valorant