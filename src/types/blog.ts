// src/types/blog.ts
export interface BlogPostFields {
  title: string;
  slug: string;
  content: string;
  // Add other fields as necessary
}

export type BlogPost = {
  fields: BlogPostFields;
};
