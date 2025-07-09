import { useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import BlogCard from "../components/BlogCard";
import homeHero from "../assets/home-hero.jpg";

               
import axios from "axios";

function Home () {
    const [posts,setPosts] = useState([]);
    const [loading ,setLoading] = useState(true);
    const [searchTerm,setSearchTerm] = useState("");

    const API_BASE = import.meta.env.VITE_API_URL;

    const fetchPosts = async() => {
        try{
            const res = await axios.get(`${API_BASE}/api/posts`);
            const latestPosts = res.data.slice(0,3);
            setPosts(latestPosts);
        } catch (error){
            console.error("❌Error fetching posts:",err);
        } finally {
            setLoading(false)
        }

    }
     useEffect(() => {
        fetchPosts();
    },[]);

    const filteredPosts = posts.filter(
        (post) => 
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            {/*Hero section*/}
            <section className="relative h-[30vh] sm:h-[70vh] md:h-[75vh]  rounded-b-lg overflow-hidden">
            <img
                src={homeHero}
                alt="Hero"
                className="w-full h-full object-cover brightness-20"
            />
            
              <div className="absolute inset-0  bg-opacity-90 flex items-center justify-center text-white ">
                <div className="text-center px-4">
                 <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Webtalks.io 🚀</h1>
                 <p className="text-lg md:text-xl">Your source of dev tips, stories and inspiration</p>
                 <Link to="/blogs" className="mt-6 inline-block bg-white text-black px-6 py-2 rounded-lg shadow hover:bg-gray-200 ">
                 Explore Blogs
                 </Link>
                 <Link to="/create" className="mt-6 inline-block bg-white text-black px-4 py-2 rounded-lg shadow hover:bg-gray-200 ml-10"> 
                 ➕ Add Blog 
                 </Link>
                </div>
              </div>
            </section>

            {/*Latest Posts */}
            <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">📄 Latest Posts</h2>
            {/*Search Input*/}
            <div className="mb-8">
                <input
                    type="text"
                    placeholder="Search blog titles or content..."
                    className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
                {loading ? (
                    <p>Loading...</p>
                ) : filteredPosts.length === 0 ? (
                    <p>No posts found. Please check back later!</p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredPosts.map((post) => (
                            <BlogCard key={post._id} post={post}/>
                        ))}

                    </div>
                )}

                <div className="mt-8 text-center">
                    <Link to="/blogs" className="text-blue-600 hover:underline">
                        View all posts ➡
                    </Link>
                </div>

            </section>
        </div>
    );
};

export default Home;