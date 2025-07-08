import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Image */}
      <img
        src={post.featuredImage}
        alt={post.title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[220px]">
        <div>
          {/* Category badge */}
          <span className="inline-block mb-2 px-3 py-1 text-sm font-semibold text-white bg-blue-600 rounded-full">
            {post.category?.name || "Uncategorized"}
          </span>

          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-white line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-zinc-600 dark:text-zinc-300 text-sm line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        {/* Read More Link */}
        <div className="mt-4">
          <Link
            to={`/blogs/${post._id}`}
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Read more →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
