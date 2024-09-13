// src/app/blog/[slug].tsx

import { GetServerSideProps } from 'next';
import { fetchBlogPostBySlug } from '@/lib/contenful';
import { BlogPost } from '@/lib/contenful';

interface BlogPostProps {
  blogPost: BlogPost | null;
}

const BlogPostPage: React.FC<BlogPostProps> = ({ blogPost }) => {
  if (!blogPost) return <div>Blog post not found</div>;

  return (
    <div>
      <h1>{blogPost.fields.title}</h1>
      <h2>{blogPost.fields.subtitle}</h2>
      <p>{blogPost.fields.content}</p>
      {/* Render other properties as needed */}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;
  const blogPost = await fetchBlogPostBySlug(slug as string);

  return {
    props: {
      blogPost,
    },
  };
};

export default BlogPostPage;
