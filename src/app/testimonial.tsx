"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody, Avatar } from "@material-tailwind/react";
import Typography from "@/components/common/Typography";


export function Testimonial() {
  const [active, setActive] = React.useState(1);
  const start = 2022;
  const now = new Date().getFullYear();
  const career = now - start + 1;


  return (
    <section className="px-8">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography variant="h2" color="blue-gray" className="mb-4">
          </Typography>
        </div>

        <Card color="transparent" shadow={false} className="py-8 lg:flex-row">
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between ">
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h2"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                ERP 서버 개발자
              </Typography>
              <Typography as="div" className="mb-4 w-full xls:w-8/12 font-normal !text-gray-500">
                총 경력 {career}년차로 ERP 소프트웨어영업(SS) 모듈을 담당했습니다.<br/>
                더존비즈온에서 2년 6개월 동안 도메인의 비즈니스 모델 분석, 도메인 설계,<br/>서버 개발을 진행했습니다.<br/>
                8개월간은 PM 역할을 겸하며 고객 중심의 서비스 가치 제공에 집중했습니다.<br/>
                고객가치에 대해 깊이 고민해볼 수 있는 기회를 갖고 싶습니다.<br/>
                고객이 원하고, 필요로 하는 프로덕트 개발에 기여하고자 합니다.
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                오윤성 - oyuns0716@gmail.com
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
               Developer @ Douzone.
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/image/profile1.jpeg"
                  alt=""
                  size="lg"
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src="/image/profile2.jpeg"
                  alt=""
                  size="lg"
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Avatar
                  variant="rounded"
                  src="/image/profile3.jpeg"
                  alt=""
                  size="lg"
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                src={`/image/profile${active}.jpeg`}
                alt="testimonial image"
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
