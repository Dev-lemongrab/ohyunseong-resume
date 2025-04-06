'use client';

import { useEffect, useState } from "react";

import Header from '../components/Header'
import Section from '../components/Section'

const sections = [
  { id: "about", title: "자기소개" },
  { id: "skills", title: "기술 스택" },
  { id: "work", title: "경력" },
  { id: "portfolio", title: "포트폴리오" },
];

export default function Home() {
  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      const scrollRatio = scrollHeight > 0 ? scrollTop / scrollHeight : 0;

      const sectionIndex = Math.floor(scrollRatio * sections.length);
      const target = sections[Math.min(sectionIndex, sections.length - 1)];

      setActiveId(target.id);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header activeId={activeId} setActiveId={setActiveId} />
      <main className="pt-0 px-4">
        {sections.map(({ id, title }) => (
          <Section
            key={id}
            id={id}
            title={title}
            isActive={activeId === id}
          >
            {/* 해당 섹션 내용 */}
            <p>{title} 섹션입니다.<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
          </Section>
        ))}
      </main>
    </>
  )
}
