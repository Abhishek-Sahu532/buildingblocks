import CountUp from 'react-countup';
import { Typography } from '@material-tailwind/react';

const Feature = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row w-full gap-6 justify-center items-center text-primaryText mx-auto px-7 md:px-20 mt-7">
      <div className="flex flex-row items-center justify-center w-full gap-[18px]">
        <div className="flex flex-col items-start justify-start w-full gap-[13px]">
          <Typography variant="h2" className="tracking-[-0.92px] text-blue_gray-900">
            <CountUp start={10.7} end={15.4} delay={2} prefix="$ " suffix=" M" duration={3} decimals={1} />
          </Typography>
          <Typography variant="h4" className="text-blue_gray-600 tracking-[-0.40px] text-blue_gray-700">
            Owned from Properties transactions
          </Typography>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-[18px]">
        <div className="flex flex-col items-start justify-start w-full gap-[13px]">
          <Typography variant="h2" className="tracking-[-0.92px] text-blue_gray-900">
            <CountUp start={20} end={25} delay={2} suffix=" K+" duration={3} />
          </Typography>
          <Typography variant="h4" className="!text-blue_gray-600 tracking-[-0.40px] text-blue_gray-700">
            Properties for Buy & sell Successfully
          </Typography>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-[18px]">
        <div className="flex flex-col items-start justify-start w-full gap-[13px]">
          <Typography variant="h2" className="tracking-[-0.92px] text-blue_gray-900">
            <CountUp start={490} end={500} delay={2} duration={3} />
          </Typography>
          <Typography variant="h4" className="!text-blue_gray-600 tracking-[-0.40px] text-blue_gray-700">
            Daily completed <br /> transactions
          </Typography>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-[18px]">
        <div className="flex flex-col items-start justify-start w-full gap-4">
          <Typography variant="h2" className="text-center tracking-[-0.92px] text-blue_gray-900">
            <CountUp start={550} end={600} delay={2} suffix=" +" duration={3} />
          </Typography>
          <Typography variant="h4" className="!text-blue_gray-600 tracking-[-0.40px] text-blue_gray-700">
            Regular Clients
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Feature;
