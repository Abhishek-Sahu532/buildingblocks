import React from "react";
import { LandingPageCard } from "../Components";
import { Button, Typography } from "@material-tailwind/react";

const FeaturedProperties = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full mt-14 px-4 md:px-0">
      <div className="flex flex-col items-center justify-start max-w-[1200px] w-full gap-8">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-between items-start w-full">
            <Typography variant="h2" className="tracking-[-0.72px]">
              Featured Properties
            </Typography>
            <div className="flex items-center mt-2 space-x-2">
              <Typography variant="h3" className="text-orange-A700">
                Explore All
              </Typography>
              <img
                src="images/img_icon_24px_v.svg"
                alt="icon24pxv_one"
                className="h-6 w-6"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-start w-full mt-2 space-y-2 md:space-y-0 md:space-x-10">
            <Button
              shape="square"
              className="font-bold min-w-[120px] md:min-w-[159px] text-gray-400 p-3 md:p-4 rounded-xl"
            >
              Resident
            </Button>
            <Button
              shape="square"
              className="text-gray-400 font-bold min-w-[150px] md:min-w-[186px] p-3 md:p-4 rounded-xl"
            >
              Commercial
            </Button>
            <Button
              shape="square"
              className="text-gray-400 font-bold min-w-[120px] md:min-w-[164px] p-3 md:p-4 rounded-xl"
            >
              Industrial
            </Button>
            <Button
              shape="square"
              className="text-gray-400 font-bold min-w-[150px] md:min-w-[180px] p-3 md:p-4 rounded-xl"
            >
              Agriculture
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <LandingPageCard className="flex flex-col items-center justify-start" />
          <LandingPageCard
            imageOne="images/img_image_1.png"
            className="flex flex-col items-center justify-start"
          />
          <LandingPageCard
            imageOne="images/img_image_2.png"
            className="flex flex-col items-center justify-start"
          />
          <LandingPageCard
            imageOne="images/img_image_3.png"
            className="flex flex-col items-center justify-start"
          />
          <LandingPageCard
            imageOne="images/img_image_4.png"
            className="flex flex-col items-center justify-start"
          />
          <LandingPageCard
            imageOne="images/img_image_5.png"
            className="flex flex-col items-center justify-start"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
