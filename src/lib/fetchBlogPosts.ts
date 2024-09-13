// src/lib/contenful.ts
import { createClient, Entry, EntrySkeletonType } from 'contentful';

// Define the BlogPost interface to match Contentful's blog post entry structure
export interface BlogPostFields {
  title: string;
  slug: string;
  content: string;
  // Add other fields as needed
}

export type BlogPost = Entry<BlogPostFields>;

// Initialize the Contentful client
const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

// Fetch all blog posts from Contentful
export async function fetchBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries<BlogPost>({
      content_type: 'blogPost', // Ensure this matches your Contentful content model
    });
    return response.items;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch a single blog post by slug
export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  try {
    const response = await client.getEntries<BlogPost>({
      content_type: 'blogPost',
      'fields.slug': slug,
    });
    return response.items[0];
  } catch (error) {
    console.error('Error fetching blog post by slug:', error);
    return undefined;
  }
}
