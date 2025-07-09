import { useState } from "react";
import {Link} from "react-router-dom";
import {Menu, X} from "lucide-react";

function Navbar() {
    const [isOpen,setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="bg-gray-900 text-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-700 shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Logo /Site Name*/}
            <Link to="/" className="text-xl font-bold text-blue-600 dark:text-white ">
                <span className=" border border-white px-2 py-1 rounded">🌐Webtalks.io</span>
            </Link>
            {/*Hamburger Icon*/}
            <div className="md:hidden">
                <button
                   onClick={toggleMenu}
                   className="text-gray-700 dark:text-white focus:outline-none"
                >
                    {isOpen ? <X size={28}/>: <Menu size={28}/>}

                </button>
            </div>
            {/*Links(Desktop)*/}
            <div className="hidden md:flex space-x-6 items-center">
                <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                <Link to="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
                <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
                <Link to="/blogs" className="hover:text-blue-600 dark:hover:text-blue-400">Blogs</Link>
                <Link to="/create" className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">➕ Add Blog</Link>
            </div>
          </div>
          {/*Mobile Menu*/}
          {isOpen && (
            <div className="md:hidden text-white px-4 pb-4 space-y-2 bg-white dark:bg-zinc-900">
                <Link to="/" onClick={closeMenu} className="block">Home</Link>
                <Link to="/about" onClick={closeMenu} className="block">About</Link>
                <Link to="/contact" onClick={closeMenu} className="block">Contact</Link>
                <Link to="/blogs" onClick={closeMenu} className="block">Blogs</Link>
                <Link
                    to="/create"
                    onClick={closeMenu}
                    className="block bg-blue-600 text-white px-4 py-1 rounded mt-2"
                >
                    ➕ Add Blog 
                </Link>
            </div>
          )}
        </nav>
    );
}

export default Navbar;