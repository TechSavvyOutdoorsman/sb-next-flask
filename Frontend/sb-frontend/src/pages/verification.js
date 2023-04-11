import { Formik, Form, useField } from "formik";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as Yup from "yup";

const ResendEmail = () => {

    const handleClick = async () => {
        try {
            await fetch("/resend/")

            const sendToast = () =>
                
            toast.info("A new code has been sent to your email.", {
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
        } catch (e) {
            print(error)
        }

    }
        
    return (
        <div className='flex items-center justify-center py-2'>
            <p onClick={handleClick} className='text-primary-200'>Resend Email</p>
        </div>
    )
}

const MyTextInput = ({ label, actions, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <div className='flex flex-col w-full h-full'>
        <div className='flex flex-col h-full w-full'>
          <input
            className='outline-none text-mono-100 text-sm font-normal bg-mono-900 p-2 rounded min-h-full w-32 border-2 border-solid border-mono-800 focus:border-primary-200 active:border-primary-200 active:bg-mono-800'
            {...field}
            {...props}
          />
        </div>
          {meta.touched && meta.error ? (
            <div className='py-1 text-highlight-red'>
            <p className='first-letter:uppercase'>
              <i className='whitespace-nowrap fa-solid fa-circle-exclamation'></i>
              {meta.error}
            </p>
            </div>
          ) : null}
      </div>
    );
  };

const VerificationForm = () => {
    const router = useRouter()

    return (
        <>
        <Formik
            initialValues={{
                verificationCode: "",
                formSubmitted: "submitted_code"
            }}
            validationSchema={Yup.object({
                verificationCode: Yup.string().required("Required"),
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
            const apiReq = await fetch("/verify/", {
                method: "POST",
                headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
                body: JSON.stringify(values),
            });

            console.log(values)

            const data = await apiReq.json();

            console.log(data);

            resetForm();

            setSubmitting(false);

                if (data.status == "200") {
                
                    // account has been created successfully
                    // verification email is then sent to user
                    // modal pops up with input for verification code + resend verification code option
                    // after correct code is submitted, push to home page 
                    // send toast saying "Account is created successfully"

                    console.log('your email has been verified G')

                    router.push("/login");

                    const sendToast = () =>
                    toast.success("Account has been created successfully!", {
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

                console.log('your code was incorrect')

                router.push("/register");

                const sendToast = () =>
                toast.warning(
                    "We're sorry but your account was unable to be created at the moment. Please try again.",
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
            <div className='flex items-center justify-center min-h-full gap-2'>      
                <div className='min-h-full w-full flex items-center '>                     
                    <MyTextInput
                        name='verificationCode'
                        type='text'
                        placeholder=''
                    />
                </div>
                <button
                    type='submit'
                    className='" mt-2 mb-2 w-full inline-block px-6 py-2 bg-primary-200 text-mono-900 font-medium text-xs leading-normal uppercase rounded shadow-md hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-0 transition duration-200 ease-in-out'
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


const Verification = () => {
    return (
        <>
        <div
            className="bg-mono-900 bg-opacity-90 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
            {/*content*/}
            <div className="bg-mono-800 border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className='flex items-center justify-center min-w-full min-h-full py-4'>
                            <h2 className='text-mono-100 '>Check Your Email</h2>
                        </div>
                {/*body*/}
                <div className="bg-mono-800 rounded relative p-6 ">
                            <VerificationForm />
                            <ResendEmail />
                </div>
            </div>
            </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}

export default Verification