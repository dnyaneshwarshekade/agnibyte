import Breadcrumb from "@/components/Common/Breadcrumb";
import { fetchBlogPostBySlug } from '@/lib/contenful';
import { BlogPost } from '@/types/blog';
import { Metadata } from "next";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: "Agnibyte - Blog Post",
  description: "Read the detailed blog post.",
};

const BlogPostPage: React.FC<BlogPostPageProps> = async ({ params }) => {
  const { slug } = params;
  let post: BlogPost | null = null;

  try {
    post = await fetchBlogPostBySlug(slug);
  } catch (error) {
    console.error('Error fetching blog post:', error);
  }

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <>
      <Breadcrumb
        pageName={post.title}
        description={post.description}
      />

      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          {post.title}
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12">
          {post.description}
        </p>
        <div className="prose">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </>
  );
};

export default BlogPostPage;
