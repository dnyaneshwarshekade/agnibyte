// src/lib/contenful.ts

export interface BlogPost extends EntrySkeletonType {
  fields: {
    title: string;
    subtitle?: string;
    slug: string;
    author?: string;
    publishedDate: string;
    featuredImage: string;
    content: string;
    description?: string;
    coverImage?: string;
    date?: string;
    relatedBlogPosts?: string[];
  };
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await client.getEntries<BlogPost>({
    content_type: 'blogPost',
    'fields.slug': slug,
  });

  if (response.items.length > 0) {
    return response.items[0] as BlogPost;
  } else {
    return null;
  }
}

// Ensure you export other functions or types as needed
