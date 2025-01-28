import { Typography } from "@material-tailwind/react";
import React from "react";

const NewsNConsult = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-6 lg:px-14 py-12 lg:py-20">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col justify-start items-center gap-6">
            <Typography
              variant="h2"
              className="text-white-A700 tracking-[-0.72px]"
            >
              News & Consult
            </Typography>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <Typography variant="h3" className="mt-0.5 text-orange-A700">
              Explore All
            </Typography>
            <img
              src="images/img_icon_24px_v.svg"
              alt="icon24pxv_seven"
              className="h-6 w-6"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12">
          <div className="flex flex-col items-center justify-start gap-6">
            <img
              src="images/img_image_350x384.png"
              alt="image"
              className="w-full object-cover rounded-lg"
            />
            <div className="flex flex-col items-center justify-start gap-3">
              <Typography
                variant="h4"
                className="text-white-A700 tracking-[-0.48px]"
              >
                9 Easy-to-Ambitious DIY Projects to Improve Your Home
              </Typography>
              <div className="flex flex-row items-center justify-start gap-2">
                <Typography variant="h5" className="mt-px text-deep_orange-400">
                  Read the Article
                </Typography>
                <img
                  src="images/img_icon_24px_v_deep_orange_400.svg"
                  alt="read_the"
                  className="h-6 w-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-6">
            <img
              src="images/img_image_6.png"
              alt="image_one"
              className="w-full object-cover rounded-lg"
            />
            <div className="flex flex-col items-center justify-start gap-3">
              <h4
                size="lg"
                variant="h4"
                className="text-white-A700 tracking-[-0.48px]"
              >
                Serie Shophouse Launch In July, Opportunity For Investors
              </h4>
              <div className="flex flex-row items-center justify-start gap-2">
                <h5
                  size="sm"
                  variant="h5"
                  className="mt-px text-deep_orange-400"
                >
                  Read the Article
                </h5>
                <img
                  src="images/img_icon_24px_v_deep_orange_400.svg"
                  alt="icon24pxv_one"
                  className="h-6 w-6"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start gap-6">
            <img
              src="images/img_image_7.png"
              alt="image_one"
              className="w-full object-cover rounded-lg"
            />
            <div className="flex flex-col items-center justify-start gap-3">
              <Typography
                size="lg"
                variant="h4"
                className="text-white-A700 tracking-[-0.48px]"
              >
                Looking for a New Place? Use This Time to Create Your Wishlist
              </Typography>
              <div className="flex flex-row items-center justify-start gap-2">
                <Typography
                  size="sm"
                  variant="h5"
                  className="mt-px text-deep_orange-400"
                >
                  Read the Article
                </Typography>
                <img
                  src="images/img_icon_24px_v_deep_orange_400.svg"
                  alt="icon24pxv_one"
                  className="h-6 w-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsNConsult;
