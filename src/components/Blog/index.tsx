import { BlogPost } from '@/types/blog'; // Adjust import path

interface BlogListProps {
  posts: BlogPost[];
}

const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{post.description}</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">Date: {new Date(post.date).toLocaleDateString()}</p>
          <a href={`/blog/${post.slug}`} className="text-primary hover:underline">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
