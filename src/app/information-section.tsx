"use client";
import Typography from "@/components/common/Typography";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";
import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "SQLD",
    date: "2022.6",
    children:
      "한국데이터산업진흥원",
  },
  {
    icon: AcademicCapIcon,
    title: "정보처리기사",
    date: "2021.8",
    children:
      "한국산업인력공단",
  },
  {
    icon: AcademicCapIcon,
    title: "학점은행",
    date: "2021 - 2022",
    children:
      "컴퓨터공학",
  },
  {
    icon: AcademicCapIcon,
    title: "수원대학교",
    date: "2011-2018",
    children:
      "언론정보학과",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "더존비즈온",
    date: "2022.8 - 2025.12",
    children:
      "더존비즈온 ERP10 소프트웨어영업 모듈(SS) 설계 및 개발 & PM",
  },
  {
    icon: BriefcaseIcon,
    title: "사이드프로젝트 - CHOOZ",
    date: "2025.1 - present",
    children:
      "고민되는 사진을 올리고, 투표 하는 커뮤니티 서비스",
  },
  {
    icon: BriefcaseIcon,
    title: "더존비즈온 신입 교육 프로젝트 발표 대상",
    date: "2022.6 - 2022.8",
    children:
      "더존 - 한국소프트웨어산업협회, 사내 실시간 공유 자원 예약 시스템",
  },
  {
    icon: BriefcaseIcon,
    title: "AWS를 활용한 클라우드 기반 웹서비스 엔지니어 양성과정",
    date: "2022.1 - 2022.7",
    children:
      "AWS 클라우드 기반 Web Full-Stack(Springboot & React.Js)",
  },
];

const SKILLS = [
  {
    icon: FireIcon,
    title: "Java, Js",
    date: "Technical Skills",
    children:
      "Ts, Python",
  },
  {
    icon: FireIcon,
    title: "Spring boot - Batch, JPA",
    date: "Web Framework",
    children:
      "Security",
  },
  {
    icon: FireIcon,
    title: "Oracle, MySql, QDSL, My-batis",
    date: "SQL & ORM",
    children:
      "",
  },
  {
    icon: FireIcon,
    title: "AWS(EC2, RDS, S3, CloudFront)",
    date: "Dev-ops",
    children:
      "",
  },
];

export function InformationSection() {
  return (
    <section className="px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              💼 경력과 활동
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              개발 경력과 관련 활동을 확인해보세요.
            </Typography>
          </div>
            <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              📚 교육과 자격증명
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              학력, 교육, 자격증을 확인해보세요.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>

      </div>
      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              🛠️기술스택
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              활용가능한 기술을 확인해보세요.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {SKILLS.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
