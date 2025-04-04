
import Header from '../components/Header'
import Section from '../components/Section'

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <Header />
      <Section title="자기소개">
        안녕하세요, 저는 프로덕트를 만들어가는 과정을 좋아하는 개발자 입니다.
      </Section>
      <Section title="기술 스택">
        - JavaScript, TypeScript<br/>
        - React, Next.js<br/>
        - Java, SpringBoot<br/>
        - Git, Vercel, Jenkins
      </Section>
      <Section title="경력">
        <p><strong>더존비즈온</strong> – 웹 개발자 (2022.08 ~ 현재)</p>
        <p>- ERP 시스템 커스터마이징 및 고객사 운영</p>
        <p>- SQL 최적화 및 API 설계로 성능 개선 주도</p>
      </Section>
      <Section title="포트폴리오">
        <p>포트폴리오 이미지는 추후 추가 예정입니다.</p>
      </Section>
    </main>
  )
}
