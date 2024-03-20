import React from "react";
import { Heading } from "../Components/Heading";
import { Button } from "../Components/Button";
import { Img } from "../Components/Img";
import { Text } from "../Components/Text";

const SimpleNEasy = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-y-8 max-w-[1200px] mx-auto px-4 md:px-0 mt-14">
      <div className="flex flex-col items-center gap-6 justify-start w-full gap-y-8 md:gap-y-0 md:flex-row">
        <div className="flex flex-col  items-start justify-start w-full md:w-[47%] gap-y-8 md:gap-y-0 md:gap-x-8">
          <div className="flex flex-col items-center justify-start gap-y-4">
            <Heading
              size="4xl"
              as="h2"
              className="tracking-[-0.72px] text-center md:text-left"
            >
              Simple & easy way to find your dream Appointment
            </Heading>
            <Text as="p" className="text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. In a free hour, when our power of choice is untrammelled
              and when nothing prevents our being able to do what we like best,
              every pleasure is to be welcomed.
            </Text>
          </div>
          <Button className="font-semibold min-w-[138px] mx-auto md:mx-0 mt-4 text-white">
            Get Started
          </Button>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[47%] gap-4 md:gap-8">
          <div className="flex flex-col items-center justify-start w-full md:w-[49%] gap-4">
            <Img
              src="images/img_rectangle_18.png"
              alt="image_two"
              className="w-full object-cover rounded-[10px]"
            />
            <Img
              src="images/img_rectangle_21.png"
              alt="image_three"
              className="w-full object-cover rounded-[10px]"
            />
          </div>
          <div className="flex flex-col items-center justify-start w-full md:w-[49%] gap-4">
            <Img
              src="images/img_rectangle_19.png"
              alt="image_four"
              className="w-full object-cover rounded-[10px]"
            />
            <Img
              src="images/img_rectangle_20.png"
              alt="image_five"
              className="w-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start w-full  md:flex-row-reverse">
        <Img
          src="images/img_rectangle_20_589x521.png"
          alt="image_six"
          className="w-[44%] object-cover rounded-[10px]"
        />

        <div className="flex flex-col items-start justify-start w-full md:w-[44%] gap-y-8 md:gap-y-0 md:gap-x-8">
          <div className="flex flex-col items-center justify-start w-full gap-y-4">
            <Heading
              size="4xl"
              as="h3"
              className="tracking-[-0.72px] text-center md:text-left"
            >
              Best rated host on popular rental sites
            </Heading>
            <Text as="p" className="text-center md:text-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. In a free hour, when our power of choice is
              untrammelled.
            </Text>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-3">
            <div className="flex flex-row justify-start items-center w-full gap-3.5 py-0.5">
              <Img
                src="images/img_icon_check.svg"
                alt="iconcheck_one"
                className="h-6 w-6"
              />
              <Heading size="md" as="h4" className="!font-semibold">
                Find excellent deals
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-3.5">
              <Img
                src="images/img_icon_check.svg"
                alt="iconcheck_three"
                className="h-6 w-6"
              />
              <Heading size="md" as="h5" className="mt-[5px] !font-semibold">
                Friendly host & Fast support
              </Heading>
            </div>
            <div className="flex flex-row justify-start items-center w-full gap-3.5">
              <Img
                src="images/img_icon_check.svg"
                alt="iconcheck_five"
                className="h-6 w-6"
              />
              <Heading size="md" as="h6" className="mt-[5px] !font-semibold">
                Secure payment system
              </Heading>
            </div>
          </div>
          <Button className="font-semibold min-w-[134px] mx-auto md:mx-0 text-white mt-5">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimpleNEasy;
