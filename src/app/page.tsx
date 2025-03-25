// app/page.tsx
export default function Home() {
  return (
    <main className="mx-auto max-w-3xl p-6 font-sans text-gray-800">
      {/* 프로필 */}
      <section className="mb-10 text-center">
        <h1 className="text-primary text-4xl font-bold">오윤성</h1>
        <p className="mt-2 text-lg">웹 개발자 | 프론트엔드 & 백엔드</p>
        <p className="mt-1 text-sm text-gray-500">
          📧 ohyuns0716@gmail.com |
          <a
            href="https://github.com/Dev-lemongrab"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:underline"
          >
            💻 {'My Github Address'}
          </a>
        </p>
      </section>

      {/* 경력 */}
      <section className="mb-10">
        <h2 className="text-primary mb-2 text-2xl font-semibold">경력</h2>
        <div className="mb-4">
          <p className="font-medium">더존비즈온</p>
          <p className="text-sm text-gray-600">2022.08 ~ 현재</p>
          <ul className="mt-1 list-inside list-disc text-sm text-gray-700">
            <li>ERP 풀스택 개발</li>
            <li>소프트웨어 영업모듈 패키지 기획 / 설계 및 개발</li>
            <li>
              🔗{' '}
              <a
                href="https://portfolio-ohyunseong.notion.site/douzone-work"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                🔥더존 업무정리 노션 바로가기 👉
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 경험 */}
      <section className="mb-10">
        <h2 className="text-primary mb-2 text-2xl font-semibold">
          사이드 프로젝트
        </h2>
        <div className="mb-4">
          <p className="font-medium">뽀또픽 (Photopic)</p>
          <p className="text-sm text-gray-600">2025.02 ~ 현재</p>
          <ul className="mt-1 list-inside list-disc text-sm text-gray-700">
            <li>PM 역할 수행: 팀 리딩, 기획, 리서치, 이터레이션 관리</li>
            <li>SQL을 활용한 데이터 분석</li>
            <li>
              커뮤니티형 투표 웹/모바일 어플리케이션
              <br />
              🔗{' '}
              <a
                href="https://photopic.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                🔥뽀또픽 바로가기 👉
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="mb-10">
        <h2 className="text-primary mb-2 text-2xl font-semibold">기술 스택</h2>
        <p className="text-sm text-gray-700">
          Java, Spring Boot, React, JavaScript, MySQL, AWS
        </p>
      </section>
    </main>
  );
}
