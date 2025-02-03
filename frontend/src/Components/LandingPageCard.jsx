import { Button, Typography } from '@material-tailwind/react';
import PropTypes from 'prop-types';

LandingPageCard.propTypes = {
  imageOne: PropTypes.string,
  address: PropTypes.string,
  bedrooms: PropTypes.string,
  bathCounter: PropTypes.string,
  sqftCounter: PropTypes.string,
  familyType: PropTypes.string,
  viewDetails: PropTypes.string,
  price: PropTypes.string
};

export default function LandingPageCard({
  imageOne = 'images/img_image_260x384.png',
  address = '2861 62nd Ave, Oakland, CA 94605',
  bedrooms = '3 Bed Room',
  bathCounter = '1 Bath',
  sqftCounter = '1,032 sqft',
  familyType = 'Family',
  viewDetails = 'View Details',
  price = '₹ 649,900',
  ...props
}) {
  return (
    <div {...props} className="text-primaryText">
      <img src={imageOne} alt="property_image" className="w-full rounded-tr-[10px] rounded-tl-[10px] object-cover" />
      <div className="flex flex-row justify-center w-full p-5 rounded-bl-[10px] rounded-br-[10px] border border-red-100 bg-gray-50">
        <div className="flex flex-col items-center w-full gap-6 max-w-[344px]">
          {/* Address Section */}
          <div className="flex flex-row items-center w-full gap-3">
            <Typography variant="h5" className="text-primaryText">
              {address}
            </Typography>
          </div>

          {/* Property Details */}
          <div className="flex flex-col w-full gap-5">
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center gap-3">
                <svg
                  width="25px"
                  height="25px"
                  fill="#000957"
                  viewBox="0 -6.75 122.88 122.88"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  style={{ enableBackground: 'new 0 0 122.88 109.37' }}
                  xmlSpace="preserve"
                  stroke="#000957"
                  strokeWidth="0.0012288"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g>
                      <path
                        className="st0"
                        d="M112.28,107.53c0,1.01-0.82,1.84-1.84,1.84H11.93c-1.01,0-1.84-0.82-1.84-1.84V51.67 
        c-2.06,0.79-3.97,0.8-5.57,0.27c-1.25-0.42-2.3-1.17-3.07-2.15c-0.77-0.97-1.26-2.16-1.41-3.46C-0.18,44.3,0.43,42,2.15,39.85l0,0 
        c0.09-0.11,0.19-0.21,0.3-0.3l57.6-39.07c0.65-0.6,1.65-0.66,2.37-0.1l57.7,38.99l0,0c0.08,0.06,0.15,0.13,0.22,0.2 
        c2.32,2.5,2.9,5.27,2.34,7.62c-0.28,1.15-0.83,2.2-1.59,3.05c-0.76,0.86-1.73,1.52-2.84,1.92c-1.76,0.64-3.84,0.61-5.96-0.39 
        C112.28,67.37,112.28,91.94,112.28,107.53L112.28,107.53L112.28,107.53z M46.07,70.22c2.33,0,4.21,1.89,4.21,4.21 
        c0,2.33-1.89,4.21-4.21,4.21s-4.21-1.88-4.21-4.21C41.86,72.11,43.75,70.22,46.07,70.22L46.07,70.22L46.07,70.22z"
                      ></path>
                    </g>
                  </g>
                </svg>

                <Typography variant="h6" className="!text-gray-700">
                  {bedrooms}
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-3">
                <svg
                  fill="#000957"
                  width="30px"
                  height="30px"
                  viewBox="-0.24 -0.24 24.48 24.48"
                  id="bathroom-2"
                  data-name="Flat Line"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon flat-line"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      id="secondary"
                      d="M19,10H13V9a3,3,0,0,1,3-3h0a3,3,0,0,1,3,3Z"
                      style={{ fill: '#344CB7', strokeWidth: 0.528 }}
                    ></path>
                    <path
                      id="primary"
                      d="M16,6V5a2,2,0,0,0-2-2H9A2,2,0,0,0,7,5V21"
                      style={{
                        fill: 'none',
                        stroke: '#000957',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: 0.528
                      }}
                    ></path>
                    <path
                      id="primary-2"
                      data-name="primary"
                      d="M19,10H13V9a3,3,0,0,1,3-3h0a3,3,0,0,1,3,3ZM5,21H9m9-5V14m-4,2V14"
                      style={{
                        fill: 'none',
                        stroke: '#000957',
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        strokeWidth: 0.528
                      }}
                    ></path>
                  </g>
                </svg>{' '}
                <Typography variant="h6" className="!text-gray-700">
                  {bathCounter}
                </Typography>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <div className="flex flex-row items-center gap-3">
                <svg
                  width="30px"
                  height="30px"
                  viewBox="-3.36 -3.36 30.72 30.72"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000957"
                  stroke="#000957"
                  strokeWidth="0.00024"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M21 8h1V5h-3v1.006L5 2.461V1H2v3h1v6H1v8h2v2H2v3h3v-1h14v1h3v-3h-1v-2h2v-8h-2zm-1-2h1v1h-1zM3 2h1v1H3zm1 2h1v-.502l14 3.545V8h1v2H4zm0 18H3v-1h1zm17 0h-1v-1h1zm-1-2h-1v1H5v-1H4v-2h16zm2-9v6h-1v-3h-1v3h-1v-2h-1v2h-1v-5h-1v5h-1v-2h-1v2h-1v-3h-1v3h-1v-2h-1v2H9v-5H8v5H7v-2H6v2H5v-3H4v3H2v-6z"></path>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                  </g>
                </svg>
                <Typography variant="h6" className="!text-gray-700">
                  {sqftCounter}
                </Typography>
              </div>
              <div className="flex flex-row items-center gap-3">
                <svg
                  fill="#000957"
                  width="30px"
                  height="30px"
                  viewBox="-35.84 -35.84 583.68 583.68"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#000957"
                  strokeWidth="5.12"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <g id="closet">
                      <path d="M109.006,420.994h293.988v-84.721H109.006V420.994z M116.206,343.475h279.588v70.319H116.206V343.475z"></path>
                      <path d="M416.839,67.006H95.162c-5.6,0-10.156,4.557-10.156,10.156v232.156c0,1.027,0.156,2.02,0.442,2.955h-0.442v132.721h341.988 V312.273h-0.441c0.285-0.936,0.441-1.928,0.441-2.955V251.47v-70.4V77.162C426.994,71.563,422.438,67.006,416.839,67.006z M92.206,77.162c0-1.63,1.326-2.956,2.956-2.956h154.784v36.464H92.206V77.162z"></path>
                      <rect height="7.201" width="32.8" x="237.946" y="375.033"></rect>
                    </g>
                  </g>
                </svg>
                {/* furnished type */}
                <Typography variant="h6" className="!text-gray-700">
                  {familyType}
                </Typography>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-row justify-between items-center w-full pr-12">
            <Button variant="text" className="h-12 px-6  text-base font-semibold text-primaryText rounded-lg">
              {viewDetails}
            </Button>
            <Typography variant="h5" className="tracking-[-0.48px]">
              {price}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
