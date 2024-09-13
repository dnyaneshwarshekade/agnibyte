import { BlogPost } from '../../types/blog'; // Adjusted import path

const BlogPostDetail = ({ post }: { post: BlogPost }) => {
  return (
    <div className="blog-post-detail">
      <h1>{post.title}</h1>
      <img src={post.coverImage.url} alt={post.title} />
      <div>{post.content.json}</div>
    </div>
  );
};

export default BlogPostDetail;
