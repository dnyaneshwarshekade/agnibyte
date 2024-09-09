import React from 'react';
import { SingleBlogProps } from '../../types/blog';

const SingleBlog: React.FC<SingleBlogProps> = ({ post }) => {
  // Check if post is undefined or missing properties
  if (!post) {
    return <div>Loading...</div>;
  }

  // Render the blog post content
  return (
    <div className="single-blog">
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export default SingleBlog;
