import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const NAVY = '#0B2074';
const RED = '#ED1E68';

async function loadGoogleFont(family: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}:wght@700&text=${encodeURIComponent(text)}`;
  const css = await (await fetch(url)).text();
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) return null;
  return (await fetch(match[1])).arrayBuffer();
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const title = (searchParams.get('title') || 'LokaLingo').slice(0, 120);
  const subtitle = (searchParams.get('subtitle') || '').slice(0, 180);

  const text = `${title}${subtitle}LokaLingolokalingo.com`;
  const family = /[가-힣]/.test(text)
    ? 'Noto Sans KR'
    : /[぀-ヿ㐀-鿿]/.test(text)
      ? 'Noto Sans JP'
      : 'Noto Sans';
  const fontData = await loadGoogleFont(family, text);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 72px',
          backgroundColor: NAVY,
          backgroundImage: 'radial-gradient(ellipse at top right, rgba(56,150,255,0.25), transparent 60%)',
          color: '#FFFFFF',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={`${origin}/logo.png`} width={64} height={64} alt="" />
          <div style={{ fontSize: 40, fontWeight: 700 }}>LokaLingo</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ width: 96, height: 8, backgroundColor: RED, borderRadius: 4 }} />
          <div style={{ fontSize: title.length > 60 ? 52 : 64, fontWeight: 700, lineHeight: 1.15 }}>{title}</div>
          {subtitle ? (
            <div style={{ fontSize: 28, lineHeight: 1.4, color: 'rgba(255,255,255,0.78)' }}>{subtitle}</div>
          ) : null}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: 'rgba(255,255,255,0.7)' }}>
          <div>lokalingo.com</div>
          <div style={{ color: RED, fontWeight: 700 }}>Where Conversations Become Curriculum</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontData ? [{ name: family, data: await fontData, weight: 700 as const, style: 'normal' as const }] : undefined,
      headers: { 'Cache-Control': 'public, max-age=86400, s-maxage=31536000, immutable' },
    }
  );
}
