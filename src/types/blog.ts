// types/blog.ts

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  html: string;
}

export interface SingleBlogProps {
  post: Post;
}
