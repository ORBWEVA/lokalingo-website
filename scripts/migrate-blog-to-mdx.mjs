#!/usr/bin/env node
/**
 * One-time migration: Convert LokaLingo blog from JSON+blog.ts to MDX files
 */
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const BLOG_TS = path.join(ROOT, 'src/lib/blog.ts');
const CONTENT_DIR = path.join(ROOT, 'content/blog');

const blogTsContent = fs.readFileSync(BLOG_TS, 'utf-8');

const postRegex = /\{\s*id:\s*'([^']+)',\s*slug:\s*'([^']+)',(?:\s*slugs:\s*\{([^}]*)\},?)?\s*date:\s*'([^']+)',\s*category:\s*'([^']+)',\s*readTime:\s*'([^']+)',\s*author:\s*'([^']+)',(?:\s*heroImage:\s*'([^']+)',?)?\s*\}/g;

const posts = [];
let match;
while ((match = postRegex.exec(blogTsContent)) !== null) {
  const [, id, slug, slugsBlock, date, category, readTime, author, heroImage] = match;
  const slugs = {};
  if (slugsBlock) {
    const jaMatch = slugsBlock.match(/ja:\s*'([^']+)'/);
    const koMatch = slugsBlock.match(/ko:\s*'([^']+)'/);
    if (jaMatch) slugs.ja = jaMatch[1];
    if (koMatch) slugs.ko = koMatch[1];
  }
  posts.push({ id, slug, slugs, date, category, readTime, author, heroImage: heroImage || '' });
}
console.log(`Found ${posts.length} posts in blog.ts`);

const INVALID_SLUGS = new Set(['SKIPPED_LEGACY', 'skipped_legacy', 'SKIPPED_NO_EN_POST', 'SKIPPED_NO_SLUG', 'SKIPPED_OFF_BRAND']);

const locales = ['en', 'ja', 'ko'];
const messages = {};
for (const locale of locales) {
  const msgPath = path.join(ROOT, `messages/${locale}.json`);
  const data = JSON.parse(fs.readFileSync(msgPath, 'utf-8'));
  messages[locale] = data.blog?.posts || {};
  console.log(`${locale}: ${Object.keys(messages[locale]).length} posts in messages`);
}

function escapeTitle(title) {
  return title.replace(/"/g, '\\"');
}

let created = { en: 0, ja: 0, ko: 0 };

for (const post of posts) {
  // EN
  const enContent = messages.en[post.id] || messages.en[post.slug];
  if (enContent) {
    const mdx = [
      '---',
      `title: "${escapeTitle(enContent.title)}"`,
      `description: "${escapeTitle(enContent.excerpt)}"`,
      `date: "${post.date}"`,
      `author: "${post.author}"`,
      `category: "${post.category}"`,
      `image: "${post.heroImage}"`,
      `locale: "en"`,
      `postId: "${post.id}"`,
      `readTime: "${post.readTime}"`,
      '---',
      '',
      enContent.content,
    ].join('\n');
    fs.writeFileSync(path.join(CONTENT_DIR, 'en', `${post.slug}.mdx`), mdx, 'utf-8');
    created.en++;
  }

  // JA
  const jaSlug = post.slugs?.ja;
  if (jaSlug && !INVALID_SLUGS.has(jaSlug)) {
    const jaContent = messages.ja[post.id] || messages.ja[post.slug];
    if (jaContent) {
      const mdx = [
        '---',
        `title: "${escapeTitle(jaContent.title)}"`,
        `description: "${escapeTitle(jaContent.excerpt)}"`,
        `date: "${post.date}"`,
        `author: "${post.author}"`,
        `category: "${post.category}"`,
        `image: "${post.heroImage}"`,
        `locale: "ja"`,
        `postId: "${post.id}"`,
        `readTime: "${post.readTime}"`,
        '---',
        '',
        jaContent.content,
      ].join('\n');
      fs.writeFileSync(path.join(CONTENT_DIR, 'ja', `${jaSlug}.mdx`), mdx, 'utf-8');
      created.ja++;
    }
  }

  // KO
  const koSlug = post.slugs?.ko;
  if (koSlug && !INVALID_SLUGS.has(koSlug)) {
    const koContent = messages.ko[post.id] || messages.ko[post.slug];
    if (koContent) {
      const mdx = [
        '---',
        `title: "${escapeTitle(koContent.title)}"`,
        `description: "${escapeTitle(koContent.excerpt)}"`,
        `date: "${post.date}"`,
        `author: "${post.author}"`,
        `category: "${post.category}"`,
        `image: "${post.heroImage}"`,
        `locale: "ko"`,
        `postId: "${post.id}"`,
        `readTime: "${post.readTime}"`,
        '---',
        '',
        koContent.content,
      ].join('\n');
      fs.writeFileSync(path.join(CONTENT_DIR, 'ko', `${koSlug}.mdx`), mdx, 'utf-8');
      created.ko++;
    }
  }
}

console.log(`\nCreated: EN=${created.en}, JA=${created.ja}, KO=${created.ko}`);
console.log(`Total: ${created.en + created.ja + created.ko} files`);
