import { Input, Button, Typography, TabsHeader, TabsBody, Tabs, Tab, TabPanel } from '@material-tailwind/react';
import { useState } from 'react';
// import { TabPanel, TabList, Tab, Tabs } from 'react-tabs';

const Hero1 = () => {
  const [activeTab, setActiveTab] = useState('buy');
  return (
    <div className="flex flex-col md:flex-row lg:flex-row w-full mx-auto max-w-[1396px]">
      <div className="flex flex-col items-center justify-start w-full md:w-[50%] gap-[15px]">
        <div className="flex flex-col items-center justify-start w-full gap-6">
          <Typography variant="h1" className="text-primaryText tracking-[-0.92px] text-center">
            Find a perfect property
            <br />
            {`Where you'll love to live`}
          </Typography>
          <Typography variant="paragraph" className="text-center text-secondaryText px-2">
            We helps businesses customize, automate and scale up their ad production and delivery.
          </Typography>
        </div>

        <div className="flex flex-row justify-center w-full p-3 bg-transparent rounded-[16px]">
          <Tabs value={activeTab} className="w-full p-4 ">
            <TabsHeader
              className="bg-transparent flex align-middle justify-evenly"
              indicatorProps={{
                className: 'p-3 border shado-md border-primaryText'
              }}
            >
              <Tab
                value="buy"
                className="text-lg font-semibold p-2 text-primaryText"
                onClick={() => setActiveTab('buy')}
              >
                Buy
              </Tab>
              <Tab
                value="sell"
                className="text-lg font-semibold p-2  text-primaryText"
                onClick={() => setActiveTab('sell')}
              >
                Sell
              </Tab>
              <Tab
                value="rent"
                className="text-lg font-semibold p-2  text-primaryText"
                onClick={() => setActiveTab('rent')}
              >
                Rent
              </Tab>
            </TabsHeader>

            <TabsBody>
              <TabPanel value="buy" className="items-center w-full absolute">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <div className="flex flex-col items-center justify-start w-full gap-5">
                      <Input
                        label="City"
                        placeholder="City/Street"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full bg-transparent border border-primaryText"
                      />
                      <Input
                        label="Property Type"
                        placeholder="Property Type"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full bg-transparent border border-primaryText"
                      />
                      <Input
                        label="Price"
                        placeholder="Price Range"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full bg-transparent border border-primaryText"
                      />
                    </div>
                    <Button className="w-full font-bold text-white bg-primaryText">Search</Button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="sell" className="items-center w-full absolute">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <div className="flex flex-col items-center justify-start w-full gap-5">
                      <Input
                        label="City"
                        placeholder="City/Street"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full bg-transparent border border-primaryText"
                      />
                      <Input
                        label="Property Type"
                        placeholder="Property Type"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full bg-transparent border border-primaryText"
                      />
                      <Input
                        label="Price"
                        placeholder="Price Range"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full bg-transparent border border-primaryText"
                      />
                    </div>
                    <Button className="w-full font-bold text-white bg-primaryText">Search</Button>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="rent" className="items-center w-full absolute">
                <div className="flex flex-col items-center justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-6">
                    <div className="flex flex-col items-center justify-start w-full gap-5">
                      <Input
                        label="City"
                        placeholder="City/Street"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full bg-transparent border border-primaryText"
                      />
                      <Input
                        label="Property Type"
                        placeholder="Property Type"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full bg-transparent border border-primaryText"
                      />
                      <Input
                        label="Price"
                        placeholder="Price Range"
                        className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none w-full bg-transparent border border-primaryText"
                      />
                    </div>
                    <Button className="w-full font-bold text-white bg-primaryText">Search</Button>
                  </div>
                </div>
              </TabPanel>
            </TabsBody>
          </Tabs>
        </div>
      </div>

      <div className="flex justify-center items-center w-full md:w-[60%]">
        <img src="images/img_image.png" alt="image_one" className="w-full md:max-w-[89%] object-cover" />
      </div>
    </div>
  );
};

export default Hero1;
