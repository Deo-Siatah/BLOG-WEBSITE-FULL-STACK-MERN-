//src/pages/CreateBlog.jsx
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

function CreateBlog() {
    const [title,setTitle] = useState("");
    const [slug,setSlug] = useState("");
    const [content,setContent] = useState("");
    const [imageUrl,setImageUrl] = useState("");
    const [category,setCategory] = useState("");
    const [categories,setCategories] = useState([]);
    const [error,setError] = useState("");
    const [excerpt,setExcerpt] = useState("");
    const navigate = useNavigate();

    const API_BASE = import.meta.env.VITE_API_URL;

    //Fetch categories on mount 
    useEffect(() => {
        const fetchCategories = async() => {
        try{
            const res = await axios.get(`${API_BASE}/api/categories`);
            setCategories(res.data);
        }catch (err){
            console.error("Error fetching categories:",err);
            setError("Failed to load categories")
        }
    };
    fetchCategories();

    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !slug || !content || !category){
            setError("Please fill in all required fields");
            return;
        }
        if (excerpt.length > 200) {
        setError("Excerpt must be under 200 characters.");
        return;
        }

        try{
            const postData = {
                title,
                slug,
                content,
                category,
                excerpt,
                featuredImage: imageUrl || undefined
            };

            await axios.post(`${API_BASE}/api/posts`,postData);
            navigate("/blogs");
        } catch (err) {
            console.error("Error creating post:",err);
            setError("Failed to create blog post");
        }

    };

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 text-black dark:text-white">
            <h1 className="text-2xl font-bold mb-6">📝Create a New Blog Post</h1>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
                {/*Title*/}
                <div>
                    <label className="block mb-1 font-medium ">Title *</label>
                    <input
                        type="text"
                        className="w-full bg-gray-500 border border-gray-700 px-4 py-2 rounded text-white dark:text-white"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                {/*slug*/}
                <div>
                    <label className="block mb-1 font-medium">Slug *</label>
                    <input
                        type="text"
                        className="w-full bg-gray-500 border border-gray-700 px-4 py-2 rounded text-white dark:text-white"
                        value={slug}
                        onChange={(e) => setSlug(e.target.value)}
                        placeholder="i.e mern-stack-blog"
                        required
                    />

                </div>
                {/*excerpt*/}
                <div>
                    <label className="block mb-1 font-medium">Excerpt</label>
                    <textarea
                        className="w-full bg-gray-500 border border-gray-700 px-4 py-2 rounded h-40 text-white dark:text-white"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        placeholder="write a short summary of the post"
                    ></textarea>

                </div>
                
                {/*Content*/}
                <div>
                    <label className="block mb-1 font-medium">Content *</label>
                    <textarea
                        className="w-full bg-gray-500 border border-gray-700 px-4 py-2 rounded h-40 text-white dark:text-white"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="write the main content for your blog.."
                        required
                    ></textarea>

                </div>
                {/*Image URL*/}
                <div>
                    <label className="block mb-1 font-medium">Image URL </label>
                    <input
                        type="text"
                        className="w-full bg-gray-500 border border-gray-700 px-4 py-2 rounded text-white dark:text-white"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                </div>
                {/*Category Dropdown*/}
                <div>
                    <label className="block mb-1 font-medium">Category *</label>
                    <select
                      className="w-full bg-gray-500 border border-gray-700 px-4 py-2 rounded"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      required
                    >
                        <option value="">-- Select a Category --</option>
                        {categories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/*Submit Button */}
                <div>
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded"
                    >
                        Create Post

                    </button>
                </div>

            </form>
        </div>
    );
}

export default CreateBlog;