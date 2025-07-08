import { useEffect,useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";

const SingleBlog = () => {
    const {id} = useParams();
    const [post,setPost] = useState(null);
    const [loading,setLoading] = useState(true);

    const fetchPost = async() => {
        try{
            const res = await axios.get(`http://localhost:5000/api/posts/${id}`);
            setPost(res.data);
        } catch (error) {
            console.error("Error fetching single post",error);
        } finally {
            setLoading(false);
        }
    };

    useEffect (() =>{
        fetchPost();
    },[]);

    if (loading) return <p className="text-center py-20 text-lg">Loading...</p>;
    if (!post) return <p className="text-center py-20 text-red-500">❌ Post not found</p>

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-zinc-900 dark:text-white">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-4">Published on {new Date(post.createdAt).toDateString()}</p>
            <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <div className="prose prose-invert prose-lg max-w-none" dangerouslySetInnerHTML={{__html: post.content}}/>

            <div className="mt-6 text-sm text-gray-500">
                Category:<span className="font-medium">{post.category?.name}</span><br/>
                Tags: {post.tags.map((tag,index) => (
                    <span key={index} className="inline-block bg-gray-200 dark:bg-gray-700 text-sm px-2 py-1 mr-2 rounded">
                        #{tag}
                    </span>
                ))}

            </div>

            <div className="mt-8">
                <Link to="/blogs" className="text-blue-600 hover:underline ">
                    ⬅ Back to all posts
                </Link>

            </div>
        </div>
    );
};

export default SingleBlog;