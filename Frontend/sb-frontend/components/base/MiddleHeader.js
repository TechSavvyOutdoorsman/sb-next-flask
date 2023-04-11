

const MiddleHeader = ({ children }) => {
    return (
        <div className='flex items-center justify-center py-8'>
            <h1 className='text-mono-100 font-semibold text-4xl'>{children}</h1>
        </div>
    )
}

export default MiddleHeader