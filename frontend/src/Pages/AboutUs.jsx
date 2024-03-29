import React from "react";
import { Helmet } from "react-helmet";
import { Button } from "../Components/Button";
import { Input } from "../Components/Input";
import { Text } from "../Components/Text";
import { Heading } from "../Components/Heading";
import { Img } from "../Components/Img";

export default function AboutUsPage() {
  const addtionalDetails = [
    {
      imgsrc: "images/img_frame.svg",
      heading1: "$15.4M",
      heading2: " Owned from Properties transactions",
    },
    {
      imgsrc: "images/img_frame_orange_a700.svg",
      heading1: "25K+",
      heading2: "Properties for Buy & sell Successfully",
    },
    {
      imgsrc: "images/img_icon.svg",
      heading1: "500",
      heading2: "Daily completed  transactions",
    },
    {
      imgsrc: "images/img_icon_orange_a700.svg",
      heading1: " 600+",
      heading2: "Reagular Clients",
    },
  ];

  const teamMemberDetails = [
    {
      imgsrc: "images/img_rectangle_5596.png",
      name: "Floyd Miles",
      designation: "President of Sales",
    },
    {
      imgsrc: "images/img_rectangle_5596.png",
      name: " Darlene Robertson",
      designation: "Marketing Coordinator",
    },
    {
      imgsrc: "images/img_rectangle_5596.png",
      name: "Guy Hawkins",
      designation: "Marketing Coordinator",
    },
    {
      imgsrc: "images/img_rectangle_5596.png",
      name: "Jerome Bell",
      designation: "Marketing Coordinator",
    },
  ];

  const blogPost = [
    {
      blogSubject: " 9 Easy-to-Ambitious DIY Projects to Improve Your Home",
      imgsrc: "images/img_image_350x384.png",
    },
    {
      blogSubject: "Serie Shophouse Launch In July, Opportunity For Investors",
      imgsrc: "images/img_image_6.png",
    },
    {
      blogSubject:
        " Looking for a New Place? Use This Time to Create Your Wishlist",
      imgsrc: "images/img_image_7.png",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] bg-white-A700">
        <div className="flex flex-col items-center justify-start w-full gap-[100px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[38px] max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <Heading
                  size="6xl"
                  as="h1"
                  className="tracking-[-1.08px] text-center"
                >
                  Reimagining real estate to <br />
                  make it easier to unlock.
                </Heading>
                <Text as="p" className="text-center">
                  On the other hand, we denounce with righteous indignation and
                  dislike men who <br />
                  are so beguiled and demoralized by the charms of pleasure of
                  the moment, <br />
                  so blinded by desire, that they cannot foresee the pain and
                  trouble.
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-6">
                <div className="flex flex-row justify-start w-full gap-6">
                  <Img
                    src="images/img_rectangle_5592.png"
                    alt="image"
                    className="w-[66%] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_5593.png"
                    alt="image_one"
                    className="w-[32%] object-cover rounded-[10px]"
                  />
                </div>
                <div className="flex flex-row justify-start w-full gap-6">
                  <Img
                    src="images/img_rectangle_5595.png"
                    alt="image_two"
                    className="w-[32%] object-cover rounded-[10px]"
                  />
                  <Img
                    src="images/img_rectangle_5594.png"
                    alt="image_three"
                    className="w-[66%] object-cover rounded-[10px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-1 md:gap-8 lg:gap-12 p-2 md:p-8 lg:p-10 bg-gray-50">
            {addtionalDetails.map((link, index) => (
              <div
                key={index}
                className="flex  w-full md:w-1/5  gap-4 md:gap-6"
              >
                <Button
                  color="white_A700"
                  size="3xl"
                  shape="circle"
                  className="w-[60px]"
                >
                  <Img src={link.imgsrc} />
                </Button>
                <div className="flex flex-col items-start justify-start w-full gap-[13px]">
                  <Heading size="5xl" as="h2" className="tracking-[-0.92px]">
                    {link.heading1}
                  </Heading>
                  <Heading
                    size="lg"
                    as="h3"
                    className="!text-blue_gray-600 tracking-[-0.40px]"
                  >
                    {link.heading2}
                  </Heading>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row justify-start w-full pl-4 pr-4 lg:pl-[120px] lg:pr-14">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full mx-auto max-w-[1147px]">
              <div className="w-full lg:w-[47%] mx-auto lg:mx-0 lg:mr-8">
                <div className="flex flex-col items-start justify-start w-full gap-4 lg:gap-[18px]">
                  <Heading size="4xl" as="h2" className="tracking-[-0.72px]">
                    A note from our founders.
                  </Heading>
                  <Text as="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour,
                  </Text>
                </div>
                <div className="flex flex-col w-full gap-[30px]">
                  <div className="flex flex-row justify-start items-start w-full gap-[26px]">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h3"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                      >
                        1
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[89%] gap-4">
                      <Heading size="xl" as="h4" className="tracking-[-0.44px]">
                        It all started in 1995
                      </Heading>
                      <Text as="p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. In a free hour, On the other hand,
                        we denounce with righteous indignation and dislike men
                        who are so beguiled and demoralized by the charms of
                        pleasure of the moment.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-start w-full gap-[26px]">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                      >
                        2
                      </Heading>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[89%] gap-4">
                      <Heading size="xl" as="h6" className="tracking-[-0.44px]">
                        Donate launches in 2007
                      </Heading>
                      <Text as="p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. In a free hour, On the other hand,
                        we denounce with righteous indignation and dislike men
                        who are so beguiled and demoralized by the charms of
                        pleasure of the moment.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-start w-full gap-[26px]">
                    <div className="flex flex-col items-center justify-start h-[35px] w-[35px]">
                      <Heading
                        size="lg"
                        as="h5"
                        className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-gray-900 border-2 border-solid rounded-[17px]"
                      >
                        3
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[89%] pt-[3px] gap-[13px]">
                      <Heading size="xl" as="h5" className="tracking-[-0.44px]">
                        Building Blocks holds its initial public offering in
                        2008
                      </Heading>
                      <Text as="p">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. In a free hour, On the other hand,
                        we denounce with righteous indignation and dislike men
                        who are so beguiled and demoralized by the charms of
                        pleasure of the moment.
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <Img
                src="images/img_rectangle_20_589x531.png"
                alt="image_four"
                className="w-[47%] object-cover rounded-[10px]"
              />
            </div>
          </div>

          <div className="flex sm:flex-col lg:flex-row justify-end w-full pl-4 pr-4 lg:pl-14 lg:pr-[120px]">
            <div className="flex sm:flex-col  flex-row justify-between items-center w-full mx-auto max-w-[1150px]">
              <Img
                src="images/img_rectangle_20_589x496.png"
                alt="image_five"
                className="w-full lg:w-[44%] object-cover rounded-[10px] mb-8 lg:mb-0 lg:mr-8"
              />
              <div className="flex flex-col items-center lg:items-start justify-start w-full lg:w-[44%] gap-8">
                <div className="flex flex-col items-start justify-start w-full gap-4 lg:pt-[5px] lg:gap-3.5">
                  <Heading
                    size="4xl"
                    as="h2"
                    className="text-4xl lg:text-[2.5rem] font-semibold tracking-[-0.72px]"
                  >
                    Our vision is simple.
                  </Heading>
                  <Text as="p" className="text-base lg:text-lg">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. In a free hour, On the other hand, we
                    denounce with righteous indignation and dislike men who are
                    so beguiled and demoralized by the charms of pleasure of the
                    moment.
                    <br />
                    In a free hour, On the other hand, we denounce with
                    righteous indignation and dislike men .
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-2 lg:gap-[9px]">
                  <Heading
                    size="lg"
                    as="h3"
                    className="text-lg lg:text-base tracking-[-0.40px]"
                  >
                    Kausar Pial
                  </Heading>
                  <Heading
                    size="md"
                    as="h4"
                    className="text-md lg:text-base text-gray-700 font-semibold mb-1"
                  >
                    CEO at Static Mania
                  </Heading>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full gap-8 max-w-[1200px] px-4">
              <Heading
                size="4xl"
                as="h2"
                className="text-4xl tracking-[-0.72px] text-center"
              >
                Building Blocks Team members
              </Heading>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
                {teamMemberDetails.map((detail, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-start gap-4"
                  >
                    <Img
                      src={detail.imgsrc}
                      alt={detail.name}
                      className="w-[282px] h-[282px] object-cover rounded-[10px]"
                    />
                    <div className="flex flex-col items-start justify-center gap-2">
                      <Heading
                        size="lg"
                        as="h3"
                        className="text-lg tracking-[-0.40px]"
                      >
                        {detail.name}
                      </Heading>
                      <Text as="p" className="mb-0.5">
                        {detail.designation}
                      </Text>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* here */}
          <div className="flex flex-col items-center justify-start w-full px-4 lg:px-14 py-8 lg:py-[120px]">
            <div className="flex flex-col items-center justify-start w-full gap-8 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full gap-8">
                <div className="flex flex-row justify-between items-center w-full">
                  <Heading
                    size="4xl"
                    as="h2"
                    className="!text-white-A700 text-4xl tracking-[-0.72px] "
                  >
                    News & Consult
                  </Heading>
                  <div className="flex flex-row justify-start items-center gap-2">
                    <Heading size="md" as="h3" className="mt-1 text-orange-700">
                      Explore All
                    </Heading>
                    <Img
                      src="images/img_icon_24px_v.svg"
                      alt="icon24pxv_one"
                      className="h-6 w-6"
                    />
                  </div>
                </div>

                <div className="flex flex-col lg:flex-row w-full gap-6">
                  {blogPost.map((post, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-start w-full lg:w-[32%] gap-6"
                    >
                      <Img
                        src={post.imgsrc}
                        alt="image"
                        className="w-full object-cover rounded-[10px]"
                      />
                      <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                        <Heading
                          size="2xl"
                          as="h4"
                          className="!text-white-A700 text-2xl tracking-[-0.48px]"
                        >
                          {post.blogSubject}
                        </Heading>
                        <div className="flex flex-row justify-start items-center w-full gap-2">
                          <Heading
                            size="md"
                            as="h5"
                            className="mt-px !text-deep_orange-400"
                          >
                            Read the Article
                          </Heading>
                          <Img
                            src="images/img_icon_24px_v_deep_orange_400.svg"
                            alt="read_the"
                            className="h-6 w-6"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center justify-start w-full gap-8 p-6 lg:p-10 bg-gray-400_01 rounded-lg">
                <div className="flex flex-col items-center justify-start w-full lg:w-[54%] gap-4">
                  <Heading
                    size="3xl"
                    as="h3"
                    className="text-3xl tracking-[-0.56px]"
                  >
                    For Recent Update, News.
                  </Heading>
                  <Text as="p" className="text-gray-900 text-center">
                    We helps businesses customize, automate and scale up their
                    ad production and delivery.
                  </Text>
                </div>
                <div className="flex flex-col lg:flex-row justify-center w-full lg:w-[54%] gap-4">
                  <Input
                    color="gray_50_02"
                    size="sm"
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="w-full lg:w-[78%] py-2 px-4 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                  />
                  <Button className="py-2 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition duration-300 min-w-[126px]">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
