// src/components/Blog/BlogPost.tsx

interface BlogPostProps {
  title: string;
  subtitle?: string;
  content: string;
  // Add other props as needed
}

const BlogPost: React.FC<BlogPostProps> = ({ title, subtitle, content }) => {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      <div>{content}</div>
      {/* Render other properties as needed */}
    </div>
  );
};

export default BlogPost;
