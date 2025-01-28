import React from "react";
import { Typography, Button } from "@material-tailwind/react";

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full mx-auto max-w-[1200px] p-7 gap-6">
      <div className="flex flex-col items-center justify-center w-full md:w-[49%] gap-[49px] p-[50px] bg-red-100 rounded-[20px]">
        <div className="flex flex-col items-center justify-start mt-[23px] gap-[15px]">
          <Typography variant="h2" className="tracking-[-0.72px] text-center">
            Simple & easy way to find your dream Appointment
          </Typography>
          <Typography variant="paragraph" className="text-gray-900 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{" "}
          </Typography>
        </div>
        <Button className="mt-[23px] w-[fit-content] font-semibold text-white">
          Get Started
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full md:w-[49%]">
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <img
            src="images/img_search_status.svg"
            alt="image"
            className="h-[30px] w-[30px] mt-[7px]"
          />
          <Typography
            variant="h3"
            className="mb-[7px] tracking-[-0.56px] text-center"
          >
            Search <br />
            your location
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <img
            src="images/img_eye.svg"
            alt="eye_one"
            className="h-[30px] w-[30px] mt-[7px]"
          />
          <Typography
            variant="h4"
            className="mb-[7px] tracking-[-0.56px] text-center"
          >
            Visit <br />
            Appointment
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <img
            src="images/img_wallet.svg"
            alt="wallet_one"
            className="h-[30px] w-[30px] mt-[7px]"
          />
          <Typography
            variant="h5"
            className="mb-[7px] tracking-[-0.56px] text-center"
          >
            Get your <br />
            dream house
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <img
            src="images/img_emoji_happy.svg"
            alt="emojihappy_one"
            className="h-[30px] w-[30px] mt-[7px]"
          />
          <Typography
            variant="h6"
            className="mb-[7px] tracking-[-0.56px] text-center"
          >
            Enjoy your <br />
            Appointment
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Services;
