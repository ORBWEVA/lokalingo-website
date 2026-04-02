import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

// Re-export shared types for server components
export type { BlogPostMeta, BlogPost, BlogCategory } from './blog-shared';
export { blogCategories } from './blog-shared';

import type { BlogPost } from './blog-shared';

// Legacy type alias — no longer used but kept for import compat
export interface BlogMessages {
  blog: { pageTitle: string; pageSubtitle: string; backToBlog: string; readMore: string; posts: Record<string, never> };
}

const contentDir = path.join(process.cwd(), 'content', 'blog');

const getMdxFiles = (locale: string): string[] => {
  const dir = path.join(contentDir, locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
};

const parsePost = (filePath: string): BlogPost => {
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  const stats = readingTime(content);
  const slug = path.basename(filePath, '.mdx');

  return {
    id: data.postId || slug,
    slug,
    date: data.date ?? '',
    category: data.category ?? '',
    readTime: data.readTime || `${Math.ceil(stats.minutes)} min read`,
    author: data.author ?? 'LokaLingo',
    heroImage: data.image ?? '',
    locale: data.locale ?? 'en',
    postId: data.postId ?? slug,
    title: data.title ?? '',
    excerpt: data.description ?? '',
    content,
  };
};

const postCache = new Map<string, BlogPost[]>();

export const getAllPosts = (locale: string): BlogPost[] => {
  if (postCache.has(locale)) return postCache.get(locale)!;
  const files = getMdxFiles(locale);
  const posts = files
    .map((f) => parsePost(path.join(contentDir, locale, f)))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  postCache.set(locale, posts);
  return posts;
};

export const getAllBlogPosts = getAllPosts;

export const getPostBySlug = (slug: string, locale: string): BlogPost | undefined => {
  const decodedSlug = decodeURIComponent(slug).toLowerCase();
  const posts = getAllPosts(locale);
  return posts.find((p) => p.slug.toLowerCase() === decodedSlug);
};

export const getBlogPost = (
  slug: string,
  _ignored: unknown,
  locale?: string,
): BlogPost | undefined => {
  const effectiveLocale = typeof _ignored === 'string' ? _ignored : (locale || 'en');
  return getPostBySlug(slug, effectiveLocale);
};

export const findSlugLocale = (slug: string): { post: BlogPost; locale: string } | undefined => {
  const decodedSlug = decodeURIComponent(slug).toLowerCase();
  for (const locale of ['en', 'ja', 'ko']) {
    const posts = getAllPosts(locale);
    const found = posts.find((p) => p.slug.toLowerCase() === decodedSlug);
    if (found) return { post: found, locale };
  }
  return undefined;
};

export const hasLocaleContent = (postOrMeta: { postId?: string; id?: string; slug?: string; slugs?: { ja?: string; ko?: string } }, locale: string): boolean => {
  if (postOrMeta.slugs) {
    if (locale === 'en') return !!postOrMeta.slug;
    if (locale === 'ja') return !!postOrMeta.slugs.ja;
    if (locale === 'ko') return !!postOrMeta.slugs.ko;
  }
  const postId = postOrMeta.postId || postOrMeta.id || '';
  const posts = getAllPosts(locale);
  return posts.some((p) => p.postId === postId);
};

export const getLocalizedSlug = (postOrMeta: { postId?: string; id?: string; slug?: string; slugs?: { ja?: string; ko?: string } }, locale: string): string => {
  if (postOrMeta.slugs) {
    if (locale === 'ja' && postOrMeta.slugs.ja) return postOrMeta.slugs.ja;
    if (locale === 'ko' && postOrMeta.slugs.ko) return postOrMeta.slugs.ko;
    return postOrMeta.slug || '';
  }
  const postId = postOrMeta.postId || postOrMeta.id || '';
  if (locale === 'en') return postOrMeta.slug || '';
  const posts = getAllPosts(locale);
  const found = posts.find((p) => p.postId === postId);
  return found?.slug || postOrMeta.slug || '';
};

// Cross-locale post index for static generation and sitemap
export interface BlogPostIndex {
  id: string;
  slug: string;
  slugs: { ja?: string; ko?: string };
  date: string;
  category: string;
  readTime: string;
  author: string;
  heroImage?: string;
  postId: string;
}

export const blogPosts: BlogPostIndex[] = (() => {
  const enPosts = getAllPosts('en');
  const jaPosts = getAllPosts('ja');
  const koPosts = getAllPosts('ko');

  const jaByPostId = new Map(jaPosts.map((p) => [p.postId, p]));
  const koByPostId = new Map(koPosts.map((p) => [p.postId, p]));

  const allPostIds = new Set([
    ...enPosts.map((p) => p.postId),
    ...jaPosts.map((p) => p.postId),
    ...koPosts.map((p) => p.postId),
  ]);

  return Array.from(allPostIds).map((postId) => {
    const en = enPosts.find((p) => p.postId === postId);
    const ja = jaByPostId.get(postId);
    const ko = koByPostId.get(postId);
    const base = en || ja || ko;
    if (!base) return null;

    return {
      id: postId,
      slug: en?.slug || ja?.slug || ko?.slug || '',
      slugs: {
        ...(ja ? { ja: ja.slug } : {}),
        ...(ko ? { ko: ko.slug } : {}),
      },
      date: base.date,
      category: base.category,
      readTime: base.readTime,
      author: base.author,
      heroImage: base.heroImage,
      postId,
    };
  }).filter((p): p is NonNullable<typeof p> => p !== null) as BlogPostIndex[];
})();

export const getBlogPostsByCategory = (category: string, locale: string): BlogPost[] => {
  return getAllPosts(locale).filter((post) => post.category === category);
};
