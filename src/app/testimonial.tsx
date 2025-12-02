"use client";

import React from "react";
import Image from "next/image";
import { Card, CardBody, Avatar } from "@material-tailwind/react";
import Typography from "@/components/common/Typography";


export function Testimonial() {
  const [active, setActive] = React.useState(3);

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
                ERP 백앤드 개발자
              </Typography>
              <Typography className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500">
                I had the pleasure of working with Lily on a critical web
                development project, and I can confidently say that their
                expertise and professionalism exceeded my expectations.
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                Michael - Technical Manager
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
              >
                Marketing @ APPLE INC.
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/image/profile1.jpeg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src="/image/profile1.jpeg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Avatar
                  variant="rounded"
                  src="/image/profile1.jpeg"
                  alt="spotify"
                  size="sm"
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
