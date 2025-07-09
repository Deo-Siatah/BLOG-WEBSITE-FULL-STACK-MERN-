// src/components/Footer.jsx
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6 mt-16 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center ">

        {/* Description */}
        <div>
          <h2 className="text-xl font-bold mb-2">🌐 Webtalks.io</h2>
          <p className="text-gray-300">
            A developer-focused blog where we share the latest tech tips,
            tutorials, and inspiration to power up your web development journey.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:items-center">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-300">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/blogs" className="hover:underline">Explore Blogs</Link></li>
            <li><Link to="/create" className="hover:underline">Add Blog</Link></li>
            <li><Link to="/about" className="hover:underline">About Us</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-start md:items-end">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-500 text-xl"><FaFacebookF /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-400 text-xl"><FaLinkedinIn /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-pink-500 text-xl"><FaInstagram /></a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Webtalks.io. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
