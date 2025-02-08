import { useState } from 'react';
import Select from 'react-select';
import { Button, Typography, Input } from '@material-tailwind/react';
import { GoogleMap, LandingPageCard } from '../Components';

const dropDownOptions = [
  { label: 'Option1', value: 'option1' },
  { label: 'Option2', value: 'option2' },
  { label: 'Option3', value: 'option3' }
];

const Listing = () => {
  const [searchBarValue, setSearchBarValue] = useState('');
  return (
    <div className="flex flex-col items-center justify-start w-full overflow-auto ">
      <div className="flex flex-col items-center justify-start w-full overflow-auto px-6 py-20">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col items-center justify-start w-full gap-y-6">
            <Typography variant="h1" className="text-primaryText tracking-[-0.72px]">
              Find Property
            </Typography>
            <div className="flex flex-col items-center justify-start w-full gap-3 max-w-[1200px] px-4">
              <div className="flex flex-wrap justify-between items-center w-full gap-3 md:gap-5">
                <Input
                  name="search"
                  placeholder="Search"
                  value={searchBarValue}
                  label="Search"
                  className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full md:w-[36%] text-gray-700 font-semibold placeholder:text-primaryText  border-blue_gray-100_01 border border-solid"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-4 w-4 text-blue-gray-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                />
                <Select
                  indicator={<img src="images/img_arrowdown_gray_700.svg" alt="arrow_down" />}
                  name="active"
                  placeholder="Buy"
                  options={dropDownOptions}
                  className="w-[48%] sm:w-[30%] md:w-[9%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                />
                <Select
                  indicator={<img src="images/img_arrowdown_gray_700.svg" alt="arrow_down" />}
                  name="price"
                  placeholder="$15000 - $18000"
                  options={dropDownOptions}
                  className="w-[48%] sm:w-[45%] md:w-[18%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                />
                <Select
                  indicator={<img src="images/img_arrowdown_gray_700.svg" alt="arrow_down" />}
                  name="pressed"
                  placeholder="Bed - 3"
                  options={dropDownOptions}
                  className="w-[48%] sm:w-[30%] md:w-[11%] gap-px font-bold border-blue_gray-100_01 border border-solid"
                />
                <Button
                  variant="text"
                  righticon={<img src="images/img_icon_24px_plus.svg" alt="icon / 24px / plus" />}
                  className="w-[48%] sm:w-auto gap-3 text-gray-700 font-bold border-blue_gray-100_01 border border-solid min-w-[113px]"
                >
                  More
                </Button>
                <Button
                  variant="outlined"
                  righticon={<img src="images/img_icon_20px_search.svg" alt="icon / 20px / search" />}
                  className="w-full sm:w-auto gap-2.5 font-bold min-w-[124px] text-primaryText"
                >
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <GoogleMap showMarker={false} className="h-[511px] w-full md:w-[32%]" /> */}
      {/* PROPERTY CARDS */}

      <div className="flex flex-col items-center justify-start w-full">
        <div className=" w-full  lg:px-0 flex flex-col md:flex-row justify-start items-start gap-6">
          {/* Cards Section */}
          <div className="w-full p-10 md:px-32 lg:px-28">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6">
              <LandingPageCard className="flex flex-col items-center justify-start w-full" />
              <LandingPageCard
                imageOne="images/img_image_1.png"
                className="flex flex-col items-center justify-start w-full"
              />
              <LandingPageCard
                imageOne="images/img_image_3.png"
                className="flex flex-col items-center justify-start w-full"
              />
              <LandingPageCard
                imageOne="images/img_image_4.png"
                className="flex flex-col items-center justify-start w-full"
              />
              <LandingPageCard
                imageOne="images/img_image_5.png"
                className="flex flex-col items-center justify-start w-full"
              />
              <LandingPageCard
                imageOne="images/img_image_2.png"
                className="flex flex-col items-center justify-start w-full"
              />
              <LandingPageCard
                imageOne="images/img_image_1.png"
                className="flex flex-col items-center justify-start w-full"
              />
              <LandingPageCard
                imageOne="images/img_image_3.png"
                className="flex flex-col items-center justify-start w-full"
              />
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
                  righticon={
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
