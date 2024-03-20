import React from 'react'
import { Img } from "../Components/Img";
import { Heading } from "../Components/Heading";



const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full max-w-[1010px] mx-auto mt-11">
    <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-[30px] lg:justify-between">
      <Img
        src="images/img_rectangle_5591.png"
        alt="image_seven"
        className="w-full lg:w-[46%] max-w-[100%] object-cover rounded-lg"
      />
      <div className="flex flex-col items-start justify-start w-full lg:w-[46%] gap-[30px] p-4">
        <div className="flex flex-col items-start justify-center gap-[5px]">
          <Heading
            size="3xl"
            as="h2"
            className="mt-0.5 tracking-[-0.56px] text-center lg:text-left"
          >
            Taylor Wilson
          </Heading>
          <Heading size="md" as="h3" className="font-semibold text-center lg:text-left">
            Product Manager - Static Mania
          </Heading>
        </div>
        <Heading
          size="2xl"
          as="h4"
          className="text-gray-700 font-semibold leading-[165%] text-center lg:text-left"
        >
          Eget eu massa et consectetur. Mauris donec. Leo a, id sed
          duis proin sodales. Turpis viverra diam porttitor mattis
          morbi ac amet. Euismod commodo. We get you customer
          relationships that last.{" "}
        </Heading>
      </div>
    </div>

    <div className="flex flex-row justify-end w-full pl-14 pr-[215px] gap-[270px] mt-8">
    <div className="flex flex-row justify-start items-center w-[10%] gap-2">
      <Img
        src="images/img_icon_24px_v_gray_600.svg"
        alt="icon24pxv_three"
        className="h-6 w-6"
      />
      <Heading size="md" as="h2" className="!text-gray-600">
        Previews
      </Heading>
    </div>
    <div className="flex flex-row justify-start items-center w-[7%] gap-2">
      <Heading size="md" as="h3" className="mt-px !text-orange-A700">
        Next
      </Heading>
      <Img
        src="images/img_icon_24px_v.svg"
        alt="icon24pxv_five"
        className="h-6 w-6"
      />
    </div>
  </div>
  </div>
  
  
  
  )
}

export default Testimonials