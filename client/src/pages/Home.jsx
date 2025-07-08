import { useEffect,useState } from "react";
import {Link} from 'react-router-dom';
import BlogCard from "../components/BlogCard";
import homeHero from "../assets/home-hero.jpg";

               
import axios from "axios";

function Home () {
    const [posts,setPosts] = useState([]);
    const [loading ,setLoading] = useState(true);

    const fetchPosts = async() => {
        try{
            const res = await axios.get("http://localhost:5000/api/posts");
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

    return(
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
                </div>
              </div>
            </section>

            {/*Latest Posts */}
            <section className="py-12 px-4 md:px-8 max-w-6xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6">📄 Latest Posts</h2>

                {loading ? (
                    <p>Loading...</p>
                ) : posts.length === 0 ? (
                    <p>No posts found. Please check back later!</p>
                ) : (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {posts.map((post) => (
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