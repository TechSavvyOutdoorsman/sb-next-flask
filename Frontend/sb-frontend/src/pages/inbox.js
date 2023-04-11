import { DragControls } from 'framer-motion'
import { useEffect, useState } from 'react'
import Layout from '../../components/layouts/InternalPage'
import { getCookie } from '../../hooks/getCookie'
import * as cookie from 'cookie'



const Inbox = (props) => {
    console.log(props)
    const [isLoading, setLoading] = useState(false)
    const [inboxData, setInboxData] = useState(null || {})

    // useEffect(() => {
    //     setLoading(true)
    //     fetch('/api/inbox')
    //         .then(res => res.json())
    //         .then(data => {
    //             setInboxData(data)
    //             setLoading(false)
    //         })
    //     }, [])
    // console.log(inboxData.viewedMessages)
    
    // const vMessages = inboxData.viewedMessages
    
    return (
        <Layout>
            {/* {vMessages.map((message) => {
                return (
                    <>
                        <h1>{message.game}</h1>
                    </>
                )
            })} */}
        </Layout>
    )
}

export default Inbox


export async function getServerSideProps(ctx) {

    try {
        const res = await fetch('http://127.0.0.1:5000/api/test/inbox', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!res.ok) {
            throw new Error('Failed to fetch data')
        }

        const data = await res.json()

        return {
            props: { data }
        }

    } catch (e) {

        console.log(e)

        // return {
        //     redirect: {
        //         destination: '/login',
        //         permanent: false
        //     }
        // }
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
    
    return {
        props: {
            cookieReq
        }
    }
}