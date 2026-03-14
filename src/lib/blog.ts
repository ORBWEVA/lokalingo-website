// Blog post metadata - managed by n8n workflow
// New posts are prepended to the array (newest first)

export interface BlogPostMeta {
  id: string;
  slug: string;
  slugs?: { ja?: string; ko?: string };
  date: string;
  category: string;
  readTime: string;
  author: string;
  heroImage?: string;
}

export interface BlogPost extends BlogPostMeta {
  title: string;
  excerpt: string;
  content: string;
}

export interface BlogMessages {
  blog: {
    pageTitle: string;
    pageSubtitle: string;
    backToBlog: string;
    readMore: string;
    noPosts?: string;
    posts: {
      [id: string]: {
        title: string;
        excerpt: string;
        content: string;
      };
    };
  };
}

// Blog posts array - n8n workflow prepends new posts here
// Start empty — posts added via n8n automation
export const blogPosts: BlogPostMeta[] = [
  {
    id: 'loka-1773518704821',
    slug: 'interactive-whiteboard-language-teaching-20260315',
    slugs: {
      ja: 'インタラクティブ-ホワイトボド-語学-20260315',
    },
    date: '2026-03-14',
    category: 'Language Learning',
    readTime: '10 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773518704821.png',
  },
  {
    id: 'loka-1773432304367',
    slug: 'ai-powered-emotion-recognition-in-language-learnin-20260314',
    slugs: {
      ja: 'EdTech-トレンド-2026-語学-20260314',
    },
    date: '2026-03-13',
    category: 'Language Learning',
    readTime: '10 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773432304367.png',
  },
  {
    id: 'loka-1773259504913',
    slug: 'cefr-aligned-language-assessment-tools-20260312',
    slugs: {
      ko: 'CEFR-기반-어학-평가-도구-20260312',
    },
    date: '2026-03-11',
    category: 'Language Learning',
    readTime: '12 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773259504913.png',
  },
  {
    id: 'loka-1773173104333',
    slug: 'independent-language-teacher-tools-2026-20260311',
    slugs: {
      ko: '학원-관리-소프트웨어-20260311',
    },
    date: '2026-03-10',
    category: 'Teaching Methods',
    readTime: '9 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773173104333.png',
  },
  {
    id: 'loka-1773086704442',
    slug: 'ai-language-teaching-assistant-2026-20260310',
    slugs: {
      ja: 'AI-語学教育-アシスタント-2026-20260310',
      ko: 'AI-어학-교육-보조-2026-20260310',
    },
    date: '2026-03-09',
    category: 'AI in Education',
    readTime: '12 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1773086704442.png',
  },
  {
    id: 'loka-1772913904509',
    slug: 'interactive-whiteboard-language-teaching-20260308',
    slugs: {
      ko: '인터랙티브-화이트보드-어학-20260308',
    },
    date: '2026-03-07',
    category: 'Language Learning',
    readTime: '10 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772913904509.png',
  },
  {
    id: 'loka-1772827504163',
    slug: 'ai-powered-emotional-intelligence-tutors-revolutio-20260307',
    slugs: {
      ja: 'EdTech-トレンド-2026-語学-20260307',
      ko: '에드테크-트렌드-2026-어학-20260307',
    },
    date: '2026-03-06',
    category: 'Language Learning',
    readTime: '10 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772827504163.png',
  },
  {
    id: 'loka-1772741104626',
    slug: 'language-learning-platform-comparison-2026-20260306',
    slugs: {
      ja: '語学-学習-プラットフォム-比較-2026-20260306',
      ko: '어학-학습-플랫폼-비교-2026-20260306',
    },
    date: '2026-03-05',
    category: 'EdTech',
    readTime: '18 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772741104626.png',
  },
  {
    id: 'loka-1772654704674',
    slug: 'cefr-aligned-language-assessment-tools-20260305',
    slugs: {
      ja: 'CEFR-対応-語学-評価-ツル-20260305',
      ko: 'CEFR-기반-어학-평가-도구-20260305',
    },
    date: '2026-03-04',
    category: 'Language Learning',
    readTime: '20 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772654704674.png',
  },
  {
    id: 'loka-1772568306984',
    slug: 'independent-language-teacher-tools-2026-20260304',
    slugs: {
      ja: '英会話-スクル-管理-ソフト-20260304',
    },
    date: '2026-03-03',
    category: 'Teaching Methods',
    readTime: '12 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772568306984.png',
  },
  {
    id: 'loka-1772481904715',
    slug: 'ai-language-teaching-assistant-2026-20260303',
    slugs: {
      ja: 'AI-語学教育-アシスタント-2026-20260303',
      ko: 'AI-어학-교육-보조-2026-20260303',
    },
    date: '2026-03-02',
    category: 'AI in Education',
    readTime: '10 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772481904715.png',
  },
  {
    id: 'loka-1772395504494',
    slug: 'spaced-repetition-language-learning-2026-20260302',
    slugs: {
      ja: '間隔反復-語学学習-2026-20260302',
      ko: '간격-반복-어학-학습-2026-20260302',
    },
    date: '2026-03-01',
    category: 'Language Learning',
    readTime: '18 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772395504494.png',
  },
  {
    id: 'loka-1772309104935',
    slug: 'interactive-whiteboard-language-teaching-20260301',
    slugs: {
      ja: 'インタラクティブ-ホワイトボド-語学-20260301',
      ko: '인터랙티브-화이트보드-어학-20260301',
    },
    date: '2026-02-28',
    category: 'Language Learning',
    readTime: '10 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772309104935.png',
  },
  {
    id: 'loka-1772222704591',
    slug: 'ai-powered-emotional-intelligence-tutors-revolutio-20260228',
    slugs: {
      ja: 'EdTech-トレンド-2026-語学-20260228',
      ko: '에드테크-트렌드-2026-어학-20260228',
    },
    date: '2026-02-27',
    category: 'Language Learning',
    readTime: '12 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772222704591.png',
  },
  {
    id: 'loka-1772136304294',
    slug: 'language-learning-platform-comparison-2026-20260227',
    slugs: {
      ja: '語学-学習-プラットフォム-比較-2026-20260227',
      ko: '어학-학습-플랫폼-비교-2026-20260227',
    },
    date: '2026-02-26',
    category: 'EdTech',
    readTime: '12 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772136304294.png',
  },
  {
    id: 'loka-1772057304289',
    slug: 'cefr-aligned-language-assessment-tools-20260226',
    date: '2026-02-25',
    category: 'Language Learning',
    readTime: '15 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1772057304289.png',
  },
  {
    id: 'loka-1771963504944',
    slug: 'independent-language-teacher-tools-2026-20260225',
    slugs: {
      ja: 'eikaiwa-kanri-soft-trend-2026',
      ko: 'hagwon-gwanri-software-mirae-2026',
    },
    date: '2026-02-24',
    category: 'Teaching Methods',
    readTime: '10 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771963504944.png?v=2',
  },
  {
    id: 'loka-1771877104945',
    slug: 'ai-language-teaching-assistant-2026-20260224',
    date: '2026-02-23',
    category: 'AI in Education',
    readTime: '12 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771877104945.png',
  },
  {
    id: 'loka-1771790704723',
    slug: 'spaced-repetition-language-learning-2026-20260223',
    slugs: {
      ko: 'gangyeok-banbog-eoneo-jeongbog-2026',
    },
    date: '2026-02-22',
    category: 'Language Learning',
    readTime: '15 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771790704723.png?v=2',
  },
  {
    id: 'loka-1771704304162',
    slug: 'interactive-whiteboard-language-teaching-20260222',
    slugs: {
      ja: 'vr-ar-gogaku-kyouiku-iwb',
      ko: 'interactive-whiteboard-eoneo-hakseup',
    },
    date: '2026-02-21',
    category: 'Language Learning',
    readTime: '8 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771704304162.png',
  },
  {
    id: 'loka-1771617904087',
    slug: 'ai-powered-real-time-language-tutoring-how-multimo-20260221',
    slugs: {
      ja: 'gogaku-edtech-trend-2026',
      ko: 'edtech-eoneo-hakseup-hyeogsin-2026',
    },
    date: '2026-02-20',
    category: 'Language Learning',
    readTime: '12 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771617904087.png?v=2',
  },
  {
    id: 'loka-1771531504101',
    slug: 'language-learning-platform-comparison-2026-20260220',
    slugs: {
      ja: 'gogaku-gakushuu-platform-hikaku-2026',
      ko: 'eohag-hakseup-platform-bigyo-2026',
    },
    date: '2026-02-19',
    category: 'EdTech',
    readTime: '18 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771531504101.png',
  },
  {
    id: 'loka-1771445104318',
    slug: 'cefr-aligned-language-assessment-tools-20260219',
    slugs: {
      ko: 'cefr-eohag-pyeongga-dogu',
    },
    date: '2026-02-18',
    category: 'Language Learning',
    readTime: '18 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771445104318.png',
  },
  {
    id: 'loka-1771358705349',
    slug: 'independent-language-teacher-tools-2026-20260218',
    slugs: {
      ja: 'eikaiwa-school-kanri-soft-2025',
      ko: 'hagwon-gwanri-software-guide-2025',
    },
    date: '2026-02-17',
    category: 'Teaching Methods',
    readTime: '8 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771358705349.png',
  },
  {
    id: 'loka-1771297210445',
    slug: 'ai-language-teaching-assistant-2026-20260217',
    slugs: {
      ja: 'ai-gogaku-kyouiku-assistant-2026',
      ko: 'ai-eohag-gyoyug-bojo-2026',
    },
    date: '2026-02-17',
    category: 'AI in Education',
    readTime: '9 min read',
    author: 'LokaLingo',
    heroImage: 'https://tskaeijjtjnbjofecpiz.supabase.co/storage/v1/object/public/blog-images/heroes/loka-1771297210445.png?v=3',
  },
];

export function getLocalizedSlug(post: BlogPostMeta, locale: string): string {
  if (locale === 'ja' && post.slugs?.ja) return post.slugs.ja;
  if (locale === 'ko' && post.slugs?.ko) return post.slugs.ko;
  return post.slug;
}

export function findSlugLocale(slug: string): { post: BlogPostMeta; locale: string } | undefined {
  const decodedSlug = decodeURIComponent(slug);
  for (const post of blogPosts) {
    if (post.slug === decodedSlug) return { post, locale: 'en' };
    if (post.slugs?.ja === decodedSlug) return { post, locale: 'ja' };
    if (post.slugs?.ko === decodedSlug) return { post, locale: 'ko' };
  }
  return undefined;
}

export function getBlogPost(slug: string, messages: BlogMessages, locale?: string): BlogPost | undefined {
  const decodedSlug = decodeURIComponent(slug);

  const meta = blogPosts.find(post => {
    if (locale === 'ja' && post.slugs?.ja === decodedSlug) return true;
    if (locale === 'ko' && post.slugs?.ko === decodedSlug) return true;
    return post.slug === decodedSlug;
  });
  if (!meta) return undefined;

  const postContent = messages.blog?.posts?.[meta.id];
  if (!postContent) return undefined;

  return { ...meta, ...postContent };
}

export function getAllBlogPosts(messages: BlogMessages): BlogPost[] {
  return blogPosts
    .map(meta => {
      const postContent = messages.blog?.posts?.[meta.id];
      if (!postContent) return null;
      return { ...meta, ...postContent };
    })
    .filter((post): post is BlogPost => post !== null);
}

export function getBlogPostsByCategory(category: string, messages: BlogMessages): BlogPost[] {
  return getAllBlogPosts(messages).filter(post => post.category === category);
}

// Loka blog categories — education-focused
export const blogCategories = ['Language Learning', 'EdTech', 'Teaching Methods', 'AI in Education'] as const;
export type BlogCategory = typeof blogCategories[number];
