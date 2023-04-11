import { useRef } from 'react'

const Navbar = ({ path, login, isAuthenticated }) => {
    const toggleRef = useRef()
  // div that wraps everything
  // props that bring in path, account balance (or we need to call it here)
  // mobile nav
  // desktop nav
    
    const handleToggle = () => {
        const toggle = toggleRef.current
        toggle.classList.toggle('rotate-45')
    }
    

    return (
        <div className='h-12 flex justify-center items-center bg-mono-900 min-w-full min-h-full'>
            <div className='max-w-6xl w-full flex justify-between items-center px-3'>

                {/* logo */}
                <div className='h-5 w-full'>
                    <a className='overflow-hidden whitespace-nowrap duration-200 ease-linear' href='/' target='_parent'>
                        <img className='w-auto h-full' src='https://d2vbw9783wnvea.cloudfront.net/sb_logo.svg' alt='SweatBets Logo' />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div ref={toggleRef} onClick={() => handleToggle()} className='w-2 h-full flex flex-col justify-right gap-1 duration-200 ease-linear'>
                    <div className='bg-mono-100 h-1.5 w-1.5 rounded-full'></div>
                    <div className='bg-mono-100 h-1.5 w-1.5 rounded-full'></div>
                    <div className='bg-mono-100 h-1.5 w-1.5 rounded-full'></div>
                </div>

                {/* desktop nav */}
                <div className='hidden md:block md:flex md:flex-row md:items-center md:justify-center '>
                    <ul className=''>
                        <li className=''><a className='overflow-hidden whitespace-nowrap duration-200 ease-linear' href='' target='_parent'>{login !== 'false' ? <p>not logged in</p> : <p>logged in</p>}</a></li>
                        {isAuthenticated ?
                            ''
                            :
                            ''
                        }
                    </ul>
                </div>

                {/* mobile nav */}
            </div>
      </div>
  )
};

export default Navbar;
