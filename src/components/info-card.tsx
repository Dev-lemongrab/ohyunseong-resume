import {
  Card,
  CardHeader,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import Typography from "@/components/common/Typography";

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  date: string;
  children: React.ReactNode;
}

export function InfoCard({ icon: Icon, title, date, children }: InfoCardProps) {
  return (
    <Card>
      <CardHeader
        className="flex items-center justify-between rounded-none overflow-visible"
        floated={false}
        shadow={false}
      >
        <div className="flex flex-col gap-1 w-full">
          <Typography color="blue" className="font-bold text-xs">
            {date}
          </Typography>
          <Typography color="blue-gray" variant="h5" className="w-full">
            {title}
          </Typography>
        </div>
        <IconButton
          className="flex-shrink-0 pointer-events-none"
          ripple={false}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </IconButton>
      </CardHeader>
      <CardBody className="grid justify-start !px-3.5 pt-2">
        <Typography className=" font-normal !text-gray-800">
          {children}
        {title === '사이드프로젝트 - CHOOZ' && (
         <a
            href="https://www.chooz.site/"
            target="_blank"
          >

          <Typography as="span" href="https://www.chooz.site/" target="_blank" color="blue" className="font-bold">
             츄즈로 이동하기!&nbsp;🚀
          </Typography>
        </a>
          )}

          {title === '더존비즈온' && (
          <a
              href="https://ohyunseong.notion.site/yunseong-oh-portfolio"
              target="_blank"
            >

            <Typography as="span" color="blue" className="font-bold">
               Portfolio 이동하기!&nbsp;🚀
            </Typography>
             </a>
          )}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default InfoCard;
