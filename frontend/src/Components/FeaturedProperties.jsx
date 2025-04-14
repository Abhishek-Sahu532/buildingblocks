import { useState } from 'react';
import { LandingPageCard } from '../Components';
import { Button, Typography } from '@material-tailwind/react';

const FeaturedProperties = () => {
  const [selectedTab, setSelectedTab] = useState('Resident');
  return (
    <div className="flex flex-col items-center justify-start w-full mt-14 px-4 md:px-0 text-primaryText ">
      <div className="flex flex-col items-center justify-start w-full p-10 gap-8">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-between items-start w-full mb-3">
            <Typography variant="h2" className="tracking-[-0.72px]">
              Featured Properties
            </Typography>
            <div className="flex items-center mt-2">
              <Typography variant="h3" className="text-orange-A700">
                {/* <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 24.00 24.00"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {' '}
                    <path
                      d="M10 7L15 12L10 17"
                      stroke="#000957"
                      strokeWidth="1.008"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>{' '}
                  </g>
                </svg>{' '} */}
                Explore All{' '}
              </Typography>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-start w-full mt-2 space-y-2 md:space-y-0 md:space-x-10">
            <Button
              onClick={() => {
                setSelectedTab('Resident');
              }}
              variant="text"
              className={`text-md border border-primaryText  hover:border-secondaryText bg-transparent hover:bg-primaryText hover:text-white ease-linear delay-50 duration-300 shadow-none inset-shadow-none ring-0 inset-ring-0 font-bold min-w-[120px] md:min-w-[159px] text-secondaryText p-3 md:p-4 ${selectedTab == 'Resident' ? 'bg-primaryText text-white' : ''}`}
            >
              Resident
            </Button>
            <Button
              onClick={() => {
                setSelectedTab('Commercial');
              }}
              variant="text"
              className={`text-md border border-primaryText  hover:border-secondaryText bg-transparent hover:bg-primaryText hover:text-white ease-linear delay-50 duration-300 shadow-none inset-shadow-none ring-0 inset-ring-0 font-bold min-w-[120px] md:min-w-[159px] text-secondaryText p-3 md:p-4 ${selectedTab == 'Commercial' ? 'bg-primaryText text-white' : ''}`}
            >
              Commercial
            </Button>
            <Button
              onClick={() => {
                setSelectedTab('Industrial');
              }}
              variant="text"
              className={`text-md border border-primaryText  hover:border-secondaryText bg-transparent hover:bg-primaryText hover:text-white ease-linear delay-50 duration-300 shadow-none inset-shadow-none ring-0 inset-ring-0 font-bold min-w-[120px] md:min-w-[159px] text-secondaryText p-3 md:p-4 ${selectedTab == 'Industrial' ? 'bg-primaryText text-white' : ''}`}
            >
              Industrial
            </Button>
            <Button
              onClick={() => {
                setSelectedTab('Agriculture');
              }}
              variant="text"
              className={`text-md border border-primaryText  hover:border-secondaryText bg-transparent hover:bg-primaryText hover:text-white ease-linear delay-50 duration-300 shadow-none inset-shadow-none ring-0 inset-ring-0 font-bold min-w-[120px] md:min-w-[159px] text-secondaryText p-3 md:p-4 ${selectedTab == 'Agriculture' ? 'bg-primaryText text-white' : ''}`}
            >
              Agriculture
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <LandingPageCard className="flex flex-col items-center justify-start" />
          <LandingPageCard imageOne="images/img_image_1.png" className="flex flex-col items-center justify-start" />
          <LandingPageCard imageOne="images/img_image_2.png" className="flex flex-col items-center justify-start" />
          <LandingPageCard imageOne="images/img_image_3.png" className="flex flex-col items-center justify-start" />
          <LandingPageCard imageOne="images/img_image_4.png" className="flex flex-col items-center justify-start" />
          <LandingPageCard imageOne="images/img_image_5.png" className="flex flex-col items-center justify-start" />
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
