import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoins, faDollar, faEye, faEyeSlash, faCopy, faPaperPlane, faMoneyCheck, faUser, faGamepad, faBell, faUserHeadset, faLoader } from '@fortawesome/pro-light-svg-icons'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'


const Account = () => {
    const router = useRouter()
    
    
    const WalletWrapper = () => {
        const [isShowing, setShowing] = useState(false)
        const [isLoading, setLoading] = useState(false)
        const [accountData, setAccountData] = useState(null || {})
        
        useEffect(() => {
            setLoading(true)
            fetch('/api/account')
                .then(res => res.json())
                .then(data => {
                    setAccountData(data)
                    setLoading(false)
                })
        }, [])
        
        
        const handleCopyClick = () => {
    
            navigator.clipboard.writeText(accountData.wallet)
    
            const sendToast = () =>
                toast.info("Copied to Clipboard", {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
          
            sendToast();
        }

        const CopyButton = ({ children }) => (
            <div
                className='relative max-h-3'
                whileTap={{ scale: 0.9 }}
            >
                {children}
            </div>
        )
        
        const SmallSkeleton = () => {
            return (
                <div className='px-2 py-4 flex flex-col h-full w-full min-w-full min-h-full items-start justify-start gap-8 rounded-lg'>
                <div className='animate-pulse h-4 w-36 bg-mono-800 rounded-full'></div>
                <div className='flex flex-col w-48 gap-2 justify-start items-center'>
                    <div className='animate-pulse h-6 min-w-full bg-mono-800 rounded-full'></div>
                    <div className='animate-pulse h-6 min-w-full bg-mono-800 rounded-full'></div>
                </div>
                <div className='flex flex-col w-full gap-2 justify-start items-center'>
                    <div className='animate-pulse h-12 min-w-full bg-mono-800 rounded-full'></div>
                    <div className='animate-pulse h-12 min-w-full bg-mono-800 rounded-full'></div>
                </div>
            </div>
            )
        }
        
        
            const AccountWallets = () => {
                return (
                    <div className='flex flex-col justify-start gap-6'>
                    <div className='flex min-w-full'>
                        {isShowing ?
                            <div className='flex h-full min-h-full m-0 items-start justify-start gap-16'>
                                <h3 onClick={() => setShowing(false)} title='Your Wallet Address' className='hover:text-mono-100 hover:duration-200 hover:ease-linear duration-200 ease-linear text-mono-200  leading-none text-md cursor-pointer'><FontAwesomeIcon className='hover:text-mono-100 hover:duration-200 hover:ease-linear duration-200 ease-linear text-mono-200' icon={faEyeSlash} /> {accountData.wallet.slice(0, 6)}****************</h3> 
                                <CopyButton><FontAwesomeIcon onClick={handleCopyClick} className='cursor-pointer text-mono-200 duration-200 ease-linear hover:duration-200 hover:ease-linear hover:text-mono-100' title='Copy Wallet Address' icon={faCopy} /></CopyButton>
                            </div>
                            : <h3 onClick={() => setShowing(true)} className='hover:text-mono-100 hover:duration-200 hover:ease-linear duration-200 ease-linear min-h-full text-mono-200 leading-none text-md break-words text-md cursor-pointer'><FontAwesomeIcon className='hover:text-mono-100 hover:duration-200 hover:ease-linear duration-200 ease-linear text-mono-200' icon={faEye} /> View Wallet Address</h3>}
                    </div>
                    <div className='flex flex-col justify-start gap-3'>
                        <div className='flex justify-start items-center gap-2'>
                            <h2 title='Wallet Balance In Dollars' className='text-mono-100 leading-none font-regular text-2xl'><FontAwesomeIcon className='text-mono-100' icon={faDollar} /> {accountData.walletBalanceDollars}</h2>
                            <h2 className='text-mono-100 leading-none font-regular text-2xl'>/</h2>
                            <div className='flex justify-start items-center gap-2'>
                                <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4753 17.997H15.6575L13.8275 11.1897L9.89302 17.9977H6.74725L12.8284 7.45954L11.8497 3.80102L3.64973 18H0.502441L10.8944 0H13.6496L14.856 4.4721H17.6987L15.7578 7.8471L18.4753 17.997Z" fill="#EBEAEB" /></svg>
                                <h2 title='Wallet Balance in Algorand' className='text-mono-100 leading-none font-regular text-2xl'>{accountData.walletBalanceAlgo}</h2>
                            </div>
        
                        </div>
                        <h2 title='SweatCoins Balance' className='text-primary-200 leading-none font-regular text-2xl'><FontAwesomeIcon className='text-primary-200' icon={faCoins} /> {accountData.accountBalance}</h2>
                    </div>
                    <div className='flex flex-col justify-center align-center gap-3'>
                        <div className='flex justify-center align-center w-full min-w-full gap-3'>
                            <button onClick={() => router.push('/sendAlgo')} title='Send Algorand' className='w-full h-full bg-mono-800 rounded-full px-2 py-4 text-mono-100 font-regular text-md'><FontAwesomeIcon className='text-mono-100' icon={faPaperPlane} /> Send</button>
                            <button onClick={() => router.push('/withdraw')} title='Withdraw Money' className='w-full h-full bg-mono-800 rounded-full px-2 py-4 text-mono-100 font-regular text-md'><FontAwesomeIcon className='text-mono-100' icon={faMoneyCheck} /> Withdraw</button>
                        </div>
                        <button onClick={() => router.push('/convert')} title='Convert Algo to SweatCoins' className='w-full h-full bg-primary-200 rounded-full px-2 py-4 text-mono-800 font-regular text-md'><FontAwesomeIcon className='text-mono-800' icon={faCoins} /> Convert to SweatCoins</button>
                    </div>
                </div>
                )
            }
        
        
        return (
            <>
                { isLoading ? <SmallSkeleton /> : <AccountWallets /> }
            </>
        )
    }

    
    return (
        // Build List
        
        // Profile / Username Section //
        // -- Profile Pic
        // -- Profile Username
        
        // Wallet Section // 
        // -- Wallet Address
        // -- Balance in Dollars & Algo
        // -- Coin Wallet Balance
        // -- Transfer Button
        // -- Withdraw Button
        // -- Buy / Convert Coins Button
        
        // Actions Section //
        // -- Update Profile Button
        // -- Add Accounts Button
        // -- Inbox Button
        // -- Feedback / Help Button
        
        // Descriptions Section //
        // -- Explain what Account page is, how wallet & coins system works
        
        // Logout Button //
        
        // Badges Section //
            // <div className='flex items-center justify-center'>
            //     <FontAwesomeIcon onClick={handleCopyClick} className='min-h-[64px] min-w-[64px] animate-spin text-mono-200 duration-200 ease-linear hover:duration-200 hover:ease-linear hover:text-mono-100' icon={faLoader} />
            // </div>      
        
        <>
            <div className='flex flex-col justify-start gap-20'>
                <WalletWrapper />
                <div className='flex flex-col gap-6'>
                    <h2 className='leading-none text-mono-100 font-semibold text-lg'>Actions</h2>
                    <div className='grid grid-cols-2 md:grid-cols-4 grid-rows-2 md:grid-rows-none px-3 gap-3 md:gap-6'>
                            <button onClick={() => router.push('/updateProfile')} title='Update Your Profile' className='w-full h-full bg-mono-800 rounded-lg md:rounded-full px-2 py-4 text-mono-100 font-regular text-md'>
                                <div className='grid grid-cols-4 md:grid-cols-1 md:grid-rows-2 items-center md:h-[64px] md:gap-2 '>
                                    <FontAwesomeIcon className='text-highlight-blue min-w-full md:row-span-2 min-h-full' icon={faUser} />
                                    <h3 className='text-mono-100 text-sm min-w-full col-span-3 md:col-span-1'>Update Profile</h3>
                                </div>
                            </button>
                            <button onClick={() => router.push('/addGameAccounts')} title='Add Game Accounts to Your Profile' className='w-full h-full bg-mono-800 rounded-lg md:rounded-full px-2 py-4 text-mono-100 font-regular text-md'>
                                <div className='grid grid-cols-4 md:grid-cols-1 md:grid-rows-2 items-center md:h-[64px] md:gap-2'>
                                    <FontAwesomeIcon className='text-highlight-green min-w-full md:row-span-2 min-h-full' icon={faGamepad} />
                                    <h3 className='text-mono-100 text-sm min-w-full col-span-3 md:col-span-1'>Add Accounts</h3>
                                </div>    
                            </button>
                            <button onClick={() => router.push('/inbox')} title='View Messages' className='w-full h-full bg-mono-800 rounded-lg md:rounded-full px-2 py-4 text-mono-100 font-regular text-md'>
                                <div className='grid grid-cols-4 md:grid-cols-1 md:grid-rows-2 items-center md:h-[64px] md:gap-2'>
                                    <FontAwesomeIcon className='text-highlight-yellow min-w-full md:row-span-2 min-h-full' icon={faBell} />
                                    <h3 className='text-mono-100 text-sm col-span-3 md:col-span-1 min-w-full'>Inbox</h3>
                                </div>
                            </button>
                            <button onClick={() => router.push('/feedback')} title='Get Help & Give Feedback' className='w-full h-full bg-mono-800 rounded-lg md:rounded-full px-2 py-4 text-mono-100 font-regular text-md'>
                                <div className='grid grid-cols-4 md:grid-cols-1 md:grid-rows-2 items-center md:h-[64px] md:gap-2'>
                                    <FontAwesomeIcon className='text-highlight-red min-w-full md:row-span-2 min-h-full' icon={faUserHeadset} />
                                    <h3 className='text-mono-100 text-sm col-span-3 md:col-span-1 min-w-full'>Feedback / Help</h3>
                                </div>    
                            </button>
                    </div>
                </div>

                <div className='flex flex-col gap-6'>
                    <h2 className='leading-none text-mono-100 font-semibold text-lg'>Description</h2>
                    <div className='flex flex-col gap-1'>
                        <p className='text-mono-100 font-light text-md'>This is where the description of the Account page will go.</p>
                    </div>
                </div>

                <div className='flex align-center justify-center'>
                    <h4 className='leading-none text-highlight-red font-semibold text-lg'>Logout</h4>
                </div>
            </div>
        </>

    )
}

export default Account
// 