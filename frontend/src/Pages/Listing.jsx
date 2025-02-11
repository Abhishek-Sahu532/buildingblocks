import { useState } from 'react';
import Select from 'react-select';
import { Button, Typography, Input } from '@material-tailwind/react';
import { GoogleMap, LandingPageCard, Pagination } from '../Components';

const dropDownOptions = [
  { label: 'Option1', value: 'option1' },
  { label: 'Option2', value: 'option2' },
  { label: 'Option3', value: 'option3' }
];

const buyOptions = [
  { label: 'Buy', value: 'BUY' },
  { label: 'Sell', value: 'SELL' },
  { label: 'Rent', value: 'RENT' }
];

const priceOptions = [
  { label: '< 10', value: '< 10' },
  { label: '20 - 50', value: '20 - 50' },
  { label: '50 >', value: '50 >' }
];

const Listing = () => {
  const [searchBarValue, setSearchBarValue] = useState('');
  return (
    <div className="flex flex-col items-center justify-start w-full relative ">
      <div className="flex flex-col items-center justify-start w-full  px-6">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col items-center justify-start w-full gap-y-6">
            <Typography variant="h1" className="text-primaryText tracking-[-0.72px]">
              Find Property
            </Typography>
            <div className="flex flex-col items-center justify-start w-full gap-3 max-w-[1200px] px-4 relative">
              <div className="flex flex-wrap justify-between items-center w-full gap-3 md:gap-5">
                <Input
                  name="search"
                  placeholder="Search"
                  value={searchBarValue}
                  label="Search"
                  onChange={(e) => setSearchBarValue(e.target.value)}
                  className=""
                />

                <Select
                  indicator={<img src="images/img_arrowdown_gray_700.svg" alt="arrow_down" />}
                  name="buyOptions"
                  options={buyOptions}
                  className=" w-40 md:w-28 gap-px font-bold  border border-primaryText rounded-md focus:border-solid focus:border-primaryText "
                />
                <Select
                  indicator={<img src="images/img_arrowdown_gray_700.svg" alt="arrow_down" />}
                  name="price"
                  placeholder="Select Price(in lacs)"
                  options={priceOptions}
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
          <div className="w-full p-6 md:px-11 lg:px-11">
            <div className="grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 gap-6 overflow-scroll">
              <div>
                <LandingPageCard imageOne="images/img_image_2.png" />
              </div>
              <LandingPageCard imageOne="images/img_image_1.png" />
              <LandingPageCard imageOne="images/img_image_3.png" />
              <LandingPageCard imageOne="images/img_image_4.png" />
              <LandingPageCard imageOne="images/img_image_5.png" />
              <LandingPageCard imageOne="images/img_image_2.png" />
              <LandingPageCard imageOne="images/img_image_1.png" />
              <LandingPageCard imageOne="images/img_image_3.png" />
            </div>
          </div>
        </div>
      </div>
      {/**PAGINATION */}
      <Pagination />;
    </div>
  );
};

export default Listing;
