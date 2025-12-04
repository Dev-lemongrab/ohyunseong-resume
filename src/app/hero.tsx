"use client";

import Typography from "@/components/common/Typography";
import { IconButton } from "@material-tailwind/react";

function Hero() {
  return (

    <div className="relative w-full">

      <div className="grid place-items-center px-8 lg:py-24">

        <div className="container mx-auto grid place-items-center h-max">
            <Typography
              variant="h3"
              color="blue-gray"
              className="mb-4 font-bold lg:max-w-xs"
            >
             안녕하세요! 저는...
            </Typography>
          <Typography
            variant="lead"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl text-gray-800"
          >
          문제를 구조화하고 해결하는 과정에서 가장 큰 동력을 얻는 개발자입니다.<br/>
          더존비즈온에서 ERP 영업·EC 모듈을 설계·개발하며, 요구사항 구현을 넘어서 왜 이 문제가 발생했는지, 더 나은 프로세스는 무엇인지를 정의하는 데 집중해왔습니다.
          실제로 복잡한 수주·라이선스·주문 흐름을 DDD 기반으로 재설계하고, 공통 모듈화·전략 패턴 적용·SQL 튜닝 등을 통해 유지보수성과 성능을 개선한 경험이 있습니다.<br/><br/>

          저는 빠르게 실험하고 검증하는 환경을 선호합니다.<br/>
          고객 피드백을 기반으로 MVP를 잘게 나누어 반복적으로 검증했고, 이를 통해 “실제로 고객이 가치를 느끼는 지점까지” 끌고 가는 일에 익숙합니다.
          사이드 프로젝트 CHOOZ에서는 PM과 백엔드 역할을 동시에 수행했습니다.<br/>
          PM으로서는 스프린트·회고·스탠드업 등 팀 운영을 리드하고, 가설 설정–문제 정의–인터뷰·설문–GA4 기반 분석까지 전 과정을 주도했습니다.
          백엔드로서는 서버 구축과 도메인 연결, DDD 기반 설계, TDD 중심 기능 개발을 맡아 작은 조직에서의 기획–설계–개발–검증 전 주기를 경험했습니다.<br/><br/>

          앞으로도 기술적 깊이에 머무르지 않고 도메인을 빠르게 파악해 문제를 정의하며, 실험을 반복하고 실제 사용자에게 가치를 전달하는 개발자로 성장하고 싶습니다.<br/>
          다양한 환경에서 축적한 경험을 기반으로 더 나은 문제 정의와 더 빠른 검증 사이클을 만들어내는 것이 저의 목표입니다.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Hero;
