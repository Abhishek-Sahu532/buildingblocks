import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
// import { CloseSVG } from '../assets/images';
import { Button, Typography, Input } from '@material-tailwind/react';
import { RatingBar } from '../Components/RatingBar';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { getAllAgentRequest, getAllAgentSuccess, getAllAgentFailure } from "../redux/Slices/AgentSlices"
import axios from 'axios';

const dropDownOptions = [
  { label: 'Option1', value: 'option1' },
  { label: 'Option2', value: 'option2' },
  { label: 'Option3', value: 'option3' }
];

export default function AgentListPage() {
  const dispatch = useDispatch();
  const { loading, error, agents } = useSelector((state) => state.agent);
  const [searchBarValue, setSearchBarValue] = useState('');
  const agentList = [
    {
      imgSrc: 'images/img_rectangle_5615.png',
      name: '  Bruno Fernandes',
      review: ''
    },
    {
      imgSrc: 'images/img_rectangle_5616.png',
      name: '  Bruno Fernandes',
      review: ''
    },
    {
      imgSrc: 'images/img_rectangle_5614.png',
      name: '  Bruno Fernandes',
      review: ''
    },
    {
      imgSrc: 'images/img_rectangle_5614_282x282.png',
      name: '  Bruno Fernandes',
      review: ''
    },
    {
      imgSrc: 'images/img_rectangle_5619.png',
      name: '  Bruno Fernandes',
      review: ''
    },
    {
      imgSrc: 'images/img_rectangle_5618.png',
      name: '  Bruno Fernandes',
      review: ''
    },
    {
      imgSrc: 'images/img_rectangle_5620.png',
      name: '  Bruno Fernandes',
      review: ''
    },
    {
      imgSrc: 'images/img_rectangle_5621.png',
      name: '  Bruno Fernandes',
      review: ''
    }
  ];

  console.log(loading, error, agents);

 

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
    const getAllAgentDetails = async () => {
      try {
        dispatch(getAllAgentRequest());
        const config = {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        };
        let res = '';
        if (import.meta.env.VITE_DEV_MODE === 'production') {
          res = await axios.get(`${import.meta.env.BACKEND_URL}/api/v1/agent/get-all-agents`, config);
        } else {
          res = await axios.get(`/api/v1/agent/get-all-agents`, config);
        }
        console.log(res);
        dispatch(getAllAgentSuccess(res.data));
      } catch (error) {
        console.log(error);
        dispatch(getAllAgentFailure());
      }
    };
    getAllAgentDetails();
  }, [error,dispatch]);

  return (
    <>
      <Helmet>
        <title>Agents</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-y-8 overflow-auto bg-gray-50_01 p-4 md:p-10">
        <div className="flex flex-col items-center justify-start w-full gap-14">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-start justify-start w-full pt-5 gap-8 max-w-[1200px]">
              {/* Title */}
              <Typography variant="h1" className="text-4xl tracking-[-0.72px] text-primaryText">
                Some Nearby Good Agents
              </Typography>

              {/* Search & Filter Section */}
              <div className="flex flex-wrap items-center gap-4 w-full">
                {/* Search Input */}
                <Input
                  name="search"
                  label="Search"
                  placeholder="Enter your address"
                  value={searchBarValue}
                  onChange={(e) => setSearchBarValue(e)}
                  className="w-full  font-semibold rounded-md border border-primaryText placeholder:text-primaryText"
                />

                {/* Select Dropdown */}
                <Select
                  indicator={<img src="images/img_arrowdown_gray_600_02.svg" alt="arrow_down" />}
                  name="Review"
                  placeholder="Review"
                  options={dropDownOptions}
                  className="w-80 text-gray-600_02 font-bold border-primaryText focus:border-primaryText rounded-md"
                />

                {/* Search Button */}
                <Button variant="text" className="gap-2.5  font-bold border-2 w-full md:w-44 lg:w-44 min-w-28">
                  Search
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-start w-full gap-6 text-primaryText">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 ">
              {agentList.map((agent, index) => (
                <div key={index} className="flex flex-col items-center justify-start">
                  <img
                    src={agent.imgSrc}
                    alt="bruno_fernandes"
                    className="w-full rounded-[10px] object-cover"
                    loading="lazy"
                  />
                  <div className="flex flex-col justify-between w-full p-5 rounded-b-[10px] border-blue_gray-100_01 border border-solid bg-white-A700">
                    <div className="flex flex-col justify-between items-center">
                      <Typography variant="h2" className="text-lg tracking-[-0.40px]">
                        {agent.name}
                      </Typography>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-row items-center gap-3.5">
                          <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                          <Typography variant="h6">4.5 review</Typography>
                        </div>
                        <div>
                          <Button
                            variant="text"
                            className="w-full font-semibold font-raleway text-md border border-primaryText"
                          >
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* pagination */}
            <div className="flex flex-row justify-between w-full max-w-[1200px]">
              <div className="flex flex-row justify-start gap-3">
                <Button color="gray_700" variant="outline" className="font-semibold min-w-[48px]">
                  1
                </Button>
                <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                  2
                </Button>
                <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                  3
                </Button>
                <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                  4
                </Button>
                <Button color="blue_gray_100_02" variant="outline" className="font-semibold min-w-[48px]">
                  5
                </Button>
              </div>
              <Button
                color="blue_gray_100_02"
                variant="outline"
                rightIcon={<img src="images/img_icon_16px_arrow_right.svg" alt="icon / 16px / arrow - right" />}
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
