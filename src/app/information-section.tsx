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
    title: "Certified Web Developer - Web Development Institute",
    date: "2016",
    children:
      "This comprehensive program covered HTML5, CSS3, JavaScript, responsive design, server-side scripting, and web security.",
  },
  {
    icon: AcademicCapIcon,
    title: "Responsive Web Design Certification - FreeCodeCamp",
    date: "2015",
    children:
      "The Responsive Web Design certification signifies competence in designing and developing websites that adapt seamlessly to various screen sizes and devices.",
  },
  {
    icon: AcademicCapIcon,
    title: "JavaScript Developer Certification - Code Academy",
    date: "2014",
    children:
      "This certification demonstrates advanced proficiency in JavaScript programming, including ES6 features and practical applications.",
  },
  {
    icon: AcademicCapIcon,
    title: "Bachelor of Science in Computer Science - XYZ University",
    date: "2014-2016",
    children:
      "Relevant Coursework: Data Structures, Algorithms, Web Development, Software Engineering, Database Management.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "더존비즈온",
    date: "2022 - 2025",
    children:
      "더존비즈온 ERP10 소프트웨어영업 모듈(SS) 설계 및 개발 & PM. ",
  },
  {
    icon: BriefcaseIcon,
    title: "CHOOZ",
    date: "2022 - present",
    children:
      "고민되는 사진을 올리고, 투표 하는 커뮤니티형 서비스",
  },
  {
    icon: BriefcaseIcon,
    title: "Senior Web Developer",
    date: "2017 - 2021",
    children:
      "Revamped the automated test framework for web services, resulting in a remarkable 90% reduction in debugging and issue resolution time.",
  },
  {
    icon: BriefcaseIcon,
    title: "Junior Web Developer",
    date: "2015 - 2017",
    children:
      "Developed 10+ responsive websites for clients in a variety of industries.",
  },
];

const SKILLS = [
  {
    icon: FireIcon,
    title: "Java, Js, Ts",
    date: "Technical Skills",
    children:
      "",
  },
  {
    icon: FireIcon,
    title: "Spring boot(Security, Batch, JPA)",
    date: "Web Framework",
    children:
      "",
  },
  {
    icon: FireIcon,
    title: "Oracle, MySql, MariaDB, QDSL, My-batis",
    date: "SQL & ORM",
    children:
      "",
  },
  {
    icon: FireIcon,
    title: "AWS(EC2, RDS, S3, FrontCloud)",
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
