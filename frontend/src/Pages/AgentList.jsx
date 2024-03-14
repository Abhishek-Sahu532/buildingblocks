import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../assets/images";
import { Button } from "../Components/Button";
import { Img } from "../Components/Img";
import { Heading } from "../Components/Heading";
import { RatingBar } from "../Components/RatingBar";
import { SelectBox } from "../Components/SelectBox";
import { Input } from "../Components/Input";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AgentListPage() {
  const [searchBarValue9, setSearchBarValue9] = useState("");
  const agentList = [
    {
      imgSrc: "images/img_rectangle_5615.png",
      name: "  Bruno Fernandes",
      review: "",
    },
    {
      imgSrc: "images/img_rectangle_5616.png",
      name: "  Bruno Fernandes",
      review: "",
    },
    {
      imgSrc: "images/img_rectangle_5614.png",
      name: "  Bruno Fernandes",
      review: "",
    },
    {
      imgSrc: "images/img_rectangle_5614_282x282.png",
      name: "  Bruno Fernandes",
      review: "",
    },
    {
      imgSrc: "images/img_rectangle_5619.png",
      name: "  Bruno Fernandes",
      review: "",
    },
    {
      imgSrc: "images/img_rectangle_5618.png",
      name: "  Bruno Fernandes",
      review: "",
    },
    {
      imgSrc: "images/img_rectangle_5620.png",
      name: "  Bruno Fernandes",
      review: "",
    },
    {
      imgSrc: "images/img_rectangle_5621.png",
      name: "  Bruno Fernandes",
      review: "",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Agents</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>

      <div className="flex flex-col items-center justify-start w-full gap-y-8 overflow-auto bg-gray-50_01 p-4 md:p-10">
        <div className="flex flex-col items-center justify-start w-full gap-14">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full pt-5 gap-8 max-w-[1200px]">
              <Heading
                size="4xl"
                as="h1"
                className="text-4xl tracking-[-0.72px]"
              >
                Some Nearby Good Agents
              </Heading>
              <div className="flex flex-row justify-start gap-4">
                <Input
                  name="search"
                  placeholder="Enter your address"
                  value={searchBarValue9}
                  onChange={(e) => setSearchBarValue9(e)}
                  suffix={
                    searchBarValue9?.length > 0 ? (
                      <CloseSVG
                        onClick={() => setSearchBarValue9("")}
                        height={24}
                        width={24}
                        fillColor="#6e6e6eff"
                      />
                    ) : (
                      <Img
                        src="images/img_icon_24px_search_gray_600_02.svg"
                        alt="icon / 24px / search"
                        className="cursor-pointer"
                      />
                    )
                  }
                  className="w-full md:w-76% gap-[35px] font-semibold border-blue_gray-100_01 border border-solid"
                />
                <SelectBox
                  indicator={
                    <Img
                      src="images/img_arrowdown_gray_600_02.svg"
                      alt="arrow_down"
                    />
                  }
                  name="active"
                  placeholder="Review"
                  options={dropDownOptions}
                  className="w-[55px] md:w-[12%] gap-px !text-gray-600_02 font-bold border-blue_gray-100_01 border border-solid"
                />
                <Button
                  size="4xl"
                  rightIcon={
                    <Img
                      src="images/img_icon_20px_search.svg"
                      alt="icon / 20px / search"
                    />
                  }
                  className="gap-2.5 font-bold min-w-[128px]"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start w-full gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-[1200px]">
              {agentList.map((agent, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start"
                >
                  <Img
                    src={agent.imgSrc}
                    alt="bruno_fernandes"
                    className="w-full rounded-[10px] object-cover"
                  />
                  <div className="flex flex-col justify-between w-full p-5 rounded-b-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                    <div className="flex flex-row justify-between items-center">
                      <Heading
                        size="lg"
                        as="h2"
                        className="text-lg tracking-[-0.40px]"
                      >
                        {agent.name}
                      </Heading>
                      <div className="flex items-center gap-3.5">
                        <RatingBar
                          value={1}
                          isEditable={true}
                          size={16}
                          className="flex justify-between w-24"
                        />
                        <Heading as="h3">4.5 review</Heading>
                      </div>

                      <Button
                        color="blue_gray_100_01"
                        variant="outline"
                        className="w-full font-semibold"
                      >
                        View Profile
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* pagination */}
            <div className="flex flex-row justify-between w-full max-w-[1200px]">
              <div className="flex flex-row justify-start gap-3">
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
          </div>
        </div>
      </div>
    </>
  );
}
