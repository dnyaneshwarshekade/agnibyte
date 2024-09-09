// components/Blog/RelatedPost.tsx
import React from 'react';

interface RelatedPostProps {
  posts: { id: string; title: string }[];
}

const RelatedPost: React.FC<RelatedPostProps> = ({ posts }) => (
  <div className="related-posts">
    <h3>Related Posts</h3>
    <ul>
      {posts.map(post => (
        <li key={post.id}>
          <a href={`/blog/${post.id}`}>{post.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default RelatedPost;
