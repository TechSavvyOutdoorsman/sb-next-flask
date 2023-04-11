import R6  from 'r6s-stats-api'

const Rainbow = (props) => {
    console.log(props)
    return (
        <div className=''>
            <h1>Rainbow Six Siege</h1>
        </div>
    )
}

export default Rainbow

export async function getServerSideProps() {
    let platform = 'pc'
    let name = 'waifu_-.'
    let data = await R6.general(platform, name)

    console.log(data)

    return {
        props: {
            data
        }
    }
}