import React from "react";
import { Helmet } from "react-helmet";
import { Img } from "../Components/Img";
import { Heading } from "../Components/Heading";
import { Button } from "../Components/Button";
import { TextArea } from "../Components/TextArea";
import { Input } from "../Components/Input";
import { Text } from "../Components/Text";


export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact-Us</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full gap-[60px]">
           <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-11 max-w-[1200px]">
              <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-[15px]">
                <Heading size="4xl" as="h1" className="tracking-[-1.08px] text-center">
                  Get in touch
                </Heading>
                <Text as="p" className="text-center">
                  On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                  demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee
                  the pain and trouble.
                </Text>
              </div>
              <div className="flex flex-row justify-start items-center w-full gap-[50px] p-[23px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px]">
                <div className="flex flex-col items-center justify-start w-[44%] ml-[25px] gap-10">
                  <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[19px]">
                    <Heading size="xl" as="h2" className="tracking-[-0.56px]">
                      Send a message
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full gap-3">
                      <Input
                        type="text"
                        name="message"
                        placeholder="Full Name"
                        prefix={<Img src="images/img_icon_24px_user.svg" alt="icon / 24px / user" />}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        prefix={<Img src="images/img_icon_24px_email.svg" alt="icon / 24px / email" />}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <Input
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        prefix={<Img src="images/img_icon_20px_call.svg" alt="icon / 24px / call" />}
                        className="w-full gap-3.5 font-semibold border-blue_gray-100_01 border border-solid"
                      />
                      <TextArea
                        name="inputbox_one"
                        placeholder="Message"
                        className="w-full text-gray-600_02 font-semibold"
                      />
                    </div>
                  </div>
                  <Button size="2xl" className="w-full font-semibold">
                    Send Request
                  </Button>
                </div>
                <div className="h-[534px] w-px my-[25px] bg-blue_gray-100_01" />
                <div className="flex flex-col items-center justify-start w-[46%] gap-10">
                  <div className="flex flex-col items-center justify-start w-[96%] gap-4">
                    <div className="flex flex-col items-start justify-start w-full gap-[3px]">
                      <Heading size="md" as="h3" className="tracking-[-0.40px]">
                        Office Address
                      </Heading>
                      <Heading size="s" as="h4" className="!text-gray-600_02 !font-semibold !leading-[180%]">
                        1421 San Pedro St, Los Angeles, <br />
                        CA 90015
                      </Heading>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-2.5">
                      <div className="flex flex-row justify-start items-center w-full gap-[13px] py-0.5">
                        <Img src="images/img_icon_20px_call.svg" alt="icon24pxcall" className="h-6 w-6" />
                        <Heading size="s" as="h5" className="!text-gray-600_02 !font-semibold">
                          (123) 456-7890
                        </Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                        <Img src="images/img_icon_24px_email.svg" alt="icon24pxemail" className="h-6 w-6" />
                        <Heading size="s" as="h6" className="mt-0.5 !text-gray-600_02 !font-semibold">
                          info@mail.com
                        </Heading>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-3">
                    <Heading size="md" as="h5" className="tracking-[-0.40px]">
                      Social
                    </Heading>
                    <div className="flex flex-row justify-start gap-4">
                      <Img
                        src="images/img_social_icon_facebook.svg"
                        alt="socialicon_one"
                        className="h-[30px] w-[30px]"
                      />
                      <Img src="images/img_social_icon_linkedin.svg" alt="socialicon" className="h-[30px] w-[30px]" />
                      <Img
                        src="images/img_social_icon_twitter.svg"
                        alt="socialicon_five"
                        className="h-[30px] w-[30px]"
                      />
                      <Img src="images/img_social_icon_youtube.svg" alt="socialicon" className="h-[30px] w-[30px]" />
                      <Img src="images/img_social_icon_rss.svg" alt="socialiconrss" className="h-[30px] w-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </>
  );
}
