import React, { useState } from "react";
import { CloseSVG } from "../assets/images";
import { Button } from "../Components/Button";
import { Img } from "../Components/Img";
import { GoogleMap } from "../Components/GoogleMap";
import { SelectBox } from "../Components/SelectBox";
import { Input } from "../Components/Input";
import { Heading } from "../Components/Heading";
import LandingPageCard from "../Components/LandingPageCard";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const Listing = () => {
  const [searchBarValue8, setSearchBarValue8] = useState("");

  return (
    <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
      <div className="flex flex-col items-center justify-start w-full gap-[60px]">
        <div className="flex flex-col items-center justify-start w-full gap-y-8 overflow-auto bg-gray-50_01 px-6 lg:px-0 py-12 lg:py-20">
          <div className="max-w-6xl w-full">
            <div className="flex flex-col items-center justify-start w-full gap-y-6">
              <Heading size="4xl" as="h1" className="tracking-[-0.72px]">
                Find Property
              </Heading>
              <div className="flex flex-col items-center justify-start w-full gap-3 max-w-[1200px]">
                <div className="flex flex-row justify-between items-center w-full gap-5">
                  <Input
                    name="search"
                    placeholder="Enter your address"
                    value={searchBarValue8}
                    onChange={(e) => setSearchBarValue8(e.target.value)}
                    suffix={
                      searchBarValue8?.length > 0 ? (
                        <CloseSVG
                          onClick={() => setSearchBarValue8("")}
                          height={24}
                          width={24}
                          fillColor="#626262ff"
                        />
                      ) : (
                        <Img
                          src="images/img_icon_24px_search_gray_700.svg"
                          alt="icon / 24px / search"
                          className="cursor-pointer"
                        />
                      )
                    }
                    className="w-full sm:w-[36%] !text-gray-700 font-semibold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_700.svg"
                        alt="arrow_down"
                      />
                    }
                    name="active"
                    placeholder="Buy"
                    options={dropDownOptions}
                    className="w-[9%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_700.svg"
                        alt="arrow_down"
                      />
                    }
                    name="price"
                    placeholder="$15000 - $18000"
                    options={dropDownOptions}
                    className="w-[18%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <SelectBox
                    indicator={
                      <Img
                        src="images/img_arrowdown_gray_700.svg"
                        alt="arrow_down"
                      />
                    }
                    name="pressed"
                    placeholder="Bed - 3"
                    options={dropDownOptions}
                    className="w-[11%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                  />
                  <Button
                    color="white_A700"
                    size="4xl"
                    rightIcon={
                      <Img
                        src="images/img_icon_24px_plus.svg"
                        alt="icon / 24px / plus"
                      />
                    }
                    className="gap-3 text-gray-700 font-bold border-blue_gray-100_01 border border-solid min-w-[113px]"
                  >
                    More
                  </Button>
                  <Button
                    size="4xl"
                    rightIcon={
                      <Img
                        src="images/img_icon_20px_search.svg"
                        alt="icon / 20px / search"
                      />
                    }
                    className="gap-2.5 font-bold min-w-[124px] text-white"
                  >
                    Search
                  </Button>
                </div>
                <div className="flex flex-row justify-start w-full gap-2.5 flex-wrap">
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    rightIcon={
                      <Img
                        src="images/img_icon_16px_close.svg"
                        alt="icon / 16px / close"
                      />
                    }
                    className="gap-2 font-semibold min-w-[145px]"
                  >
                    Bathrooms 2+
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    rightIcon={
                      <Img
                        src="images/img_icon_16px_close.svg"
                        alt="icon / 16px / close"
                      />
                    }
                    className="gap-2 font-semibold min-w-[243px]"
                  >
                    Square Feet 750 - 2000 sq. ft
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    rightIcon={
                      <Img
                        src="images/img_icon_16px_close.svg"
                        alt="icon / 16px / close"
                      />
                    }
                    className="gap-2 font-semibold min-w-[151px]"
                  >
                    Year Built 5 - 15
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    rightIcon={
                      <Img
                        src="images/img_icon_16px_close.svg"
                        alt="icon / 16px / close"
                      />
                    }
                    className="gap-2 !text-gray-900 font-semibold min-w-[168px]"
                  >
                    For Sale By Agent
                  </Button>
                  <Button
                    color="blue_gray_100"
                    size="md"
                    variant="outline"
                    rightIcon={
                      <Img
                        src="images/img_icon_16px_close.svg"
                        alt="icon / 16px / close"
                      />
                    }
                    className="gap-2 !text-gray-900 font-semibold min-w-[174px]"
                  >
                    New Construction
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <GoogleMap showMarker={false} className="h-[511px] w-full md:w-[32%]" />
        <div className="flex flex-col items-center justify-start w-full">
        <div className="max-w-[1200px] w-full px-4 lg:px-0 flex flex-row justify-start items-start gap-6">
        
          <div className="w-full md:w-[66%] gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <LandingPageCard className="flex flex-col items-center justify-start w-full" />
              <LandingPageCard imageOne="images/img_image_1.png" className="flex flex-col items-center justify-start w-full" />
              <LandingPageCard imageOne="images/img_image_3.png" className="flex flex-col items-center justify-start w-full" />
              <LandingPageCard imageOne="images/img_image_4.png" className="flex flex-col items-center justify-start w-full" />
              <LandingPageCard imageOne="images/img_image_5.png" className="flex flex-col items-center justify-start w-full" />
              <LandingPageCard imageOne="images/img_image_2.png" className="flex flex-col items-center justify-start w-full" />
              <LandingPageCard imageOne="images/img_image_1.png" className="flex flex-col items-center justify-start w-full" />
              <LandingPageCard imageOne="images/img_image_3.png" className="flex flex-col items-center justify-start w-full" />
            </div>
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
};

{
  /**   PAGINATION           <div className="flex flex-row justify-between w-full">
                <div className="flex flex-row justify-start gap-[5px]">
                  <Button
                    color="gray_700"
                    variant="outline"
                    className="font-semibold min-w-[48px]"
                  >
                    1
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    className="font-semibold min-w-[48px]"
                  >
                    2
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    className="font-semibold min-w-[48px]"
                  >
                    3
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    className="font-semibold min-w-[48px]"
                  >
                    4
                  </Button>
                  <Button
                    color="blue_gray_100_02"
                    variant="outline"
                    className="font-semibold min-w-[48px]"
                  >
                    5
                  </Button>
                </div>
                <Button
                  color="blue_gray_100_02"
                  variant="outline"
                  rightIcon={
                    <Img
                      src="images/img_icon_16px_arrow_right.svg"
                      alt="icon / 16px / arrow - right"
                    />
                  }
                  className="gap-1 font-semibold min-w-[134px]"
                >
                  Next Page
                </Button>
              </div>
 */
}

export default Listing;
