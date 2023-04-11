import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons'

const Layout = ({ children }) => {
    const router = useRouter()
    return (
    <div className='h-full w-full flex flex-col gap-24'>
            <h4 onClick={() => router.push('/account')} className='cursor-pointer text-mono-200 text-md hover:text-mono-100 duration-200 ease-linear md:duration-200 md:ease-linear'><FontAwesomeIcon icon={faArrowLeft} /> Go Back</h4>
            {children}
    </div>
    )
}

export default Layout