import React from "react";
import { Input } from "../Components/Input";
import { Img } from "../Components/Img";
import { Button } from "../Components/Button";
import { Text } from "../Components/Text";
import { Heading } from "../Components/Heading";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const Hero1 = () => {
  return (
    <div className="flex flex-row  justify-center items-center w-full mx-auto max-w-[1396px]">
      <div className="flex flex-col items-center justify-start w-full md:w-[50%] gap-[15px]">
        <div className="flex flex-col items-center justify-start w-full gap-6">
          <Heading
            size="5xl"
            as="h1"
            className="tracking-[-0.92px] text-center"
          >
            Find a perfect property
            <br />
            {`Where you'll love to live`}
          </Heading>
          <Text size="md" as="p" className="text-center px-2">
            We helps businesses customize, automate and scale up their ad
            production and delivery.
          </Text>
        </div>
        <div className="flex flex-row justify-center w-full p-5 bg-white-A700 rounded-[16px]">
          <Tabs
            className="flex flex-col items-center justify-start w-full gap-[38px]"
            selectedTabClassName="text-white-A700 bg-gray-900 rounded-[10px]"
            selectedTabPanelClassName="relative tab-panel--selected"
          >
            <TabList className="flex flex-row justify-between w-full gap-3 sm:gap-3 sm:text-white p-[9px]">
              <Tab className="mt-[5px] ml-[62px] text-white-A700 text-lg font-bold px-5 py-2">
                Buy
              </Tab>
              <Tab className="text-gray-900 text-lg font-bold  px-5 py-2">Sell</Tab>
              <Tab className="mr-[57px] text-gray-900 text-lg font-bold  px-5 py-2">
                Rent
              </Tab>
            </TabList>
            {[...Array(3)].map((_, index) => (
              <TabPanel
                key={`tab-panel${index}`}
                className="items-center w-full absolute"
              >
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <div className="flex flex-col items-center justify-start w-full gap-5">
                      <Input
                        name="city"
                        placeholder="City/Street"
                        suffix={
                          <Img
                            src="images/img_icon_20px_map.svg"
                            alt="icon / 20px / map"
                          />
                        }
                        className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <Input
                        name="icon20pxupdowna"
                        placeholder="Property Type"
                        suffix={
                          <Img
                            src="images/img_icon_20px_updown_arrow.svg"
                            alt="icon / 20px / up-down arrow"
                          />
                        }
                        className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <Input
                        name="price"
                        placeholder="Price Range"
                        suffix={
                          <Img
                            src="images/img_icon_20px_updown_arrow.svg"
                            alt="icon / 20px / up-down arrow"
                          />
                        }
                        className="w-full gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                      />
                    </div>
                    <Button size="4xl" className="w-full font-bold text-white">
                      Search
                    </Button>
                  </div>
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-[50%]">
        <Img
          src="images/img_image.png"
          alt="image_one"
          className="w-full md:max-w-[89%] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero1;
