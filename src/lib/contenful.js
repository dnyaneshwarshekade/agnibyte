import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID, // Remove the '!' operator
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, // Remove the '!' operator
});

export const fetchBlogPosts = async () => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: '-fields.date', // Order by date
    });
    
    return response.items.map(item => item.fields);
  } catch (error) {
    console.error('Error fetching blog posts from Contentful:', error);
    return []; // Return an empty array on error
  }
};

export const fetchBlogPostBySlug = async (slug) => {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
    
    return response.items.length > 0 ? response.items[0].fields : null;
  } catch (error) {
    console.error('Error fetching blog post by slug from Contentful:', error);
    return null;
  }
};
