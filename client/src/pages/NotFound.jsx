import notFoundImage from '@/assets/not-found.jpg'
const  NotFound = () => {
    return(
        <div className='flex flex-col items-center justify-center min-h-[80vh] p-8 text-center'> 
            <img src={notFoundImage} alt='404 Not Found' className='w-80 mb-4 rounded-lg shadow-md '></img>
            <h1 className='text-3xl font-bold text-red-600'>Page Not Found🚫</h1>
            <p className='text-gray-600 mt-2'>Oops! The page doesn't exist</p>
        </div>
    );
};
export default NotFound;