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

// Loka blog categories — education-focused
export const blogCategories = ['Platform', 'Learning Science', 'AI', 'Teaching', 'Assessment', 'Technology', 'Trending'] as const;
export type BlogCategory = typeof blogCategories[number];
