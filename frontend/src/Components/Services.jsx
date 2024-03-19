import React from "react";
import { Heading } from "../Components/Heading";
import { Button } from "../Components/Button";
import { Img } from "../Components/Img";
import { Text } from "../Components/Text";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full mx-auto max-w-[1200px] p-7 gap-6">
      <div className="flex flex-col items-center justify-center w-full md:w-[49%] gap-[49px] p-[50px] bg-red-100 rounded-[20px]">
        <div className="flex flex-col items-center justify-start mt-[23px] gap-[15px]">
          <Heading
            size="4xl"
            as="h2"
            className="tracking-[-0.72px] text-center"
          >
            Simple & easy way to find your dream Appointment
          </Heading>
          <Text as="p" className="text-gray-900 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </Text>
        </div>
        <Button className="mt-[23px] w-[fit-content] font-semibold text-white">
          Get Started
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full md:w-[49%]">
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <Img
            src="images/img_search_status.svg"
            alt="image"
            className="h-[30px] w-[30px] mt-[7px]"
          />
          <Heading
            size="3xl"
            as="h3"
            className="mb-[7px] tracking-[-0.56px] text-center"
          >
            Search <br />
            your location
          </Heading>
        </div>
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <Img
            src="images/img_eye.svg"
            alt="eye_one"
            className="h-[30px] w-[30px] mt-[7px]"
          />
          <Heading
            size="3xl"
            as="h4"
            className="mb-[7px] tracking-[-0.56px] text-center"
          >
            Visit <br />
            Appointment
          </Heading>
        </div>
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <Img
            src="images/img_wallet.svg"
            alt="wallet_one"
            className="h-[30px] w-[30px] mt-[7px]"
          />
          <Heading
            size="3xl"
            as="h5"
            className="mb-[7px] tracking-[-0.56px] text-center"
          >
            Get your <br />
            dream house
          </Heading>
        </div>
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <Img
            src="images/img_emoji_happy.svg"
            alt="emojihappy_one"
            className="h-[30px] w-[30px] mt-[7px]"
          />
          <Heading
            size="3xl"
            as="h6"
            className="mb-[7px] tracking-[-0.56px] text-center"
          >
            Enjoy your <br />
            Appointment
          </Heading>
        </div>
      </div>
    </div>
  );
};

export default Services;
