export interface BlogPost {
  id: string;
  title: string;
  subtitle?: string; // Optional field
  slug: string;
  author?: string; // Adjust based on whether it's a string or a nested object
  publishedDate: string;
  featuredImage?: string; // Adjust based on whether it's a string or a nested object
  content: any; // Adjust based on how you want to handle rich text
  description?: string; // Optional field
  coverImage?: string; // Optional field
  date?: string; // Optional field
  relatedBlogPosts?: BlogPost[]; // Adjust based on how you want to handle related posts
}
