import React from "react";
import CountUp from "react-countup";
import { Img } from "../Components/Img";
import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";

const Feature = () => {
  return (
    <div className="flex flex-row md:flex-row w-full gap-6 justify-center items-center mx-auto px-20 mt-7">
      <div className="flex flex-row items-center justify-center w-full gap-[18px]">
        <Button
          color="white_A700"
          size="3xl"
          shape="circle"
          className="w-[60px]  "
        >
          <Img src="images/img_frame.svg" />
        </Button>
        <div className="flex flex-col items-start justify-start w-full gap-[13px]">
          <Heading
            size="5xl"
            as="h2"
            className="tracking-[-0.92px] text-blue_gray-900"
          >
            <CountUp
              start={10.7}
              end={15.4}
              delay={2}
              prefix="$ "
              suffix=" M"
              duration={3}
              decimals={1}
            />
          </Heading>
          <Heading
            size="lg"
            as="h3"
            className="text-blue_gray-600 tracking-[-0.40px] text-blue_gray-700"
          >
            Owned from  Properties transactions
          </Heading>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-[18px]">
        <Button
          color="white_A700"
          size="3xl"
          shape="circle"
          className="w-[60px]"
        >
          <Img src="images/img_frame_orange_a700.svg" />
        </Button>
        <div className="flex flex-col items-start justify-start w-full gap-[13px]">
          <Heading
            size="5xl"
            as="h4"
            className="tracking-[-0.92px] text-blue_gray-900"
          >
            <CountUp start={20} end={25} delay={2} suffix=" K+" duration={3} />
          </Heading>
          <Heading
            size="lg"
            as="h5"
            className="!text-blue_gray-600 tracking-[-0.40px] text-blue_gray-700"
          >
            Properties for Buy & sell Successfully
          </Heading>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-[18px]">
        <Button
          color="white_A700"
          size="3xl"
          shape="circle"
          className="w-[60px]"
        >
          <Img src="images/img_icon.svg" />
        </Button>
        <div className="flex flex-col items-start justify-start w-full gap-[13px]">
          <Heading
            size="5xl"
            as="h6"
            className="tracking-[-0.92px] text-blue_gray-900"
          >
            <CountUp start={490} end={500} delay={2} duration={3} />
          </Heading>
          <Heading
            size="lg"
            as="h5"
            className="!text-blue_gray-600 tracking-[-0.40px] text-blue_gray-700"
          >
            Daily completed <br /> transactions
          </Heading>
        </div>
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-[18px]">
        <Button
          color="white_A700"
          size="3xl"
          shape="circle"
          className="w-[60px]"
        >
          <Img src="images/img_icon_orange_a700.svg" />
        </Button>
        <div className="flex flex-col items-start justify-start w-full gap-4">
          <Heading
            size="5xl"
            as="h1"
            className="tracking-[-0.92px] text-blue_gray-900"
          >
            <CountUp start={550} end={600} delay={2} suffix=" +" duration={3} />
          </Heading>
          <Heading
            size="lg"
            as="h5"
            className="!text-blue_gray-600 tracking-[-0.40px] text-blue_gray-700"
          >
            Regular Clients
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default Feature;
