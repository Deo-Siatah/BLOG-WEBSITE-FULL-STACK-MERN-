import {useState,useEffect} from 'react';
import axios from "axios";
import BlogCard from '@/components/BlogCard';

const Blogs = () => {
    const [posts,setPosts] = useState([]);
    const [visibleCount,setVisibleCount] = useState(5);
    const [loading, setLoading] = useState(true);

    //fetch all posts once 
    const fetchPosts = async () => {
        try{
            const res = await axios.get("http://localhost:5000/api/posts");
            setPosts(res.data);
        }catch (error){
            console.error("❌ Error fetching all posts:",error);
        } finally{
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosts();
    },[]);

    const loadMore = () => {
        setVisibleCount((prev) => prev + 5);
    };

    return (
        <div className='py-12 px-4 md:px-8 max-w-6xl mx-auto'>
            <h1 className='text-3xl font-bold mb-8 text-center'>📄 All Blog Posts</h1>

            {loading? (
                <p className='text-center'>Loading posts...</p>
            ): posts.length === 0 ? (
                <p>No posts available at the moment</p>
            ): (
                <>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {posts.slice(0, visibleCount).map((post) => (
                        <BlogCard key={post._id} post={post}/>
                      ))}
                  </div>

                   {visibleCount < posts.length && (
                    <div className='mt-10 text-center'>
                        <button
                          onClick={loadMore}
                          className='px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition'
                        >
                            Load More
                        </button>

                    </div>
                   )}
                </>
            )}

        </div>
    );
};


export default Blogs;