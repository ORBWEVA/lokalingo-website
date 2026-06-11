// Shared blog types and constants — safe for client and server components

export interface BlogPostMeta {
  id: string;
  slug: string;
  date: string;
  category: string;
  readTime: string;
  author: string;
  heroImage?: string;
  locale: string;
  postId: string;
}

export interface BlogPost extends BlogPostMeta {
  title: string;
  excerpt: string;
  content: string;
}

// Loka blog categories — union of all categories used in content/blog MDX frontmatter, ordered by post count
export const blogCategories = ['Language Learning', 'AI', 'Technology', 'Teaching Methods', 'AI in Education', 'EdTech', 'Language Education', 'Trending', 'Platform', 'Learning Science', 'Assessment', 'Teaching'] as const;
export type BlogCategory = typeof blogCategories[number];
