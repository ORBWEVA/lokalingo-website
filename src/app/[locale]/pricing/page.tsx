import type { Metadata } from 'next';
import { getTranslations, getLocale } from 'next-intl/server';
import { generatePageMetadata, generateFAQSchema, generatePricingSchema } from '@/lib/seo';
import PricingContent from '@/components/pricing/PricingContent';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generatePageMetadata('pricing', locale, '/pricing');
}

export default async function PricingPage() {
  const t = await getTranslations('pricing');
  const locale = await getLocale();

  const faqItems = Array.from({ length: 4 }, (_, i) => ({
    question: t(`faq.items.${i}.question`),
    answer: t(`faq.items.${i}.answer`),
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqItems, locale)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePricingSchema(locale)) }}
      />
      <PricingContent />
    </>
  );
}
