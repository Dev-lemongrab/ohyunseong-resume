import Header from '@/components/Header';
import Section from '@/components/Section';
import HighlightText from '@/components/HighlightText';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <Header />

      <Section title="자기소개">
        안녕하세요, 저는{' '}
        <HighlightText text="문제를 해결하는 데 집착하는 개발자" />
        입니다. 프론트엔드와 백엔드를 두루 경험하며 사용자 중심의 서비스를
        만드는 것에 관심이 많습니다.
      </Section>

      <Section title="기술 스택">
        - JavaScript, TypeScript - React, Next.js - Node.js, Express - Git,
        Vercel, Docker
      </Section>

      <Section title="경력">
        <p>
          <strong>더존비즈온</strong> – 웹 개발자 (2022.03 ~ 현재)
          <br />
          - ERP 시스템 커스터마이징 및 고객사 운영
          <br />
          - <HighlightText text="SQL 최적화 및 API 설계" />로 성능 개선 주도
        </p>
      </Section>
    </main>
  );
}
