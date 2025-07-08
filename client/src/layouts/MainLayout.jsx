import {Outlet, } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            {/*Navbar*/}
{/* 
        <nav className='bg-gray-900 text-white p-4 flex justify-between'>
            <Link to="/" className='font-bold text-xl'>🌐Webtalks.io</Link>
            <div className='space-x-4'>
                <Link to='/'>Home</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </nav> */}
        {/*Page Content*/}
        <main className='flex-grow'>
            <Outlet/>
        </main>

        {/* Footer */}
        {/* <footer className='bg-gray-100 text-center p-4 mt-8'>
            &copy; {new Date().getFullYear()} 🌐Webtalks.All rights reserved.

        </footer> */}
        </div>
    )
};

export default MainLayout;