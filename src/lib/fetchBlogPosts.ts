// src/lib/fetchBlogPosts.ts

import { createClient } from 'contentful';
import { BlogPost } from './contenful'; // Adjust import based on your actual path

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function fetchAllBlogPosts(): Promise<BlogPost[]> {
  const response = await client.getEntries<BlogPost>({
    content_type: 'blogPost',
  });

  return response.items as BlogPost[];
}
