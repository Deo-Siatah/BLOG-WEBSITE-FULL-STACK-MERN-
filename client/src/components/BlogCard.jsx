import {Link} from "react-router-dom";

const BlogCard = ({post}) => {
    return(
        <>
        <div className="rounded-lg overflow-hidden shadow-md bg-white dark:bg-zinc-800 transition hover:shadow-lg">
          <img
           src={post.featuredImage}
           alt={post.title}
           className="w-full h-48 object-cover"
          />
        
        <div className="p-4">
            <h3 className="text-lg font-bold mb-2">{post.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{post.excerpt}</p>
            <Link
              to = {`/blogs/${post.slug}`}
              className="text-blue-500 hover:underline text-sm mt-2 inline-block"
            >
                Read more ➡
            </Link>

        </div>
        </div>
        </>
    );
};

export default BlogCard;