import { Typography, Button } from '@material-tailwind/react';

const Services = () => {
  return (
    <div className="flex flex-col md:flex-row lg:flex-row justify-center items-center w-full mx-auto max-w-[1200px] p-7 gap-6">
      <div className="flex flex-col items-center justify-center w-full md:w-[49%] gap-[49px] p-[50px] bg-red-100 rounded-[20px]">
        <div className="flex flex-col items-center justify-start mt-[23px] gap-[15px]">
          <Typography variant="h2" className="tracking-[-0.72px] text-primaryText text-center">
            Simple & easy way to find your dream Appointment
          </Typography>
          <Typography variant="paragraph" className="text-center text-secondaryText text-xl font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.{' '}
          </Typography>
        </div>
        <Button className="mt-[23px] w-[fit-content] bg-primaryText font-semibold text-white">Get Started</Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full md:w-[49%]">
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
                fill="#000957"
              ></path>{' '}
            </g>
          </svg>
          <Typography variant="h4" className="mb-[7px] tracking-[-0.56px] text-center text-primaryText">
            Search <br />
            your location
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <svg
            width="50px"
            height="50px"
            viewBox="-0.72 -0.72 25.44 25.44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#344CB7"
            transform="matrix(-1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M20 21V20C20 18.8954 19.1046 18 18 18H14C12.8954 18 12 18.8954 12 20V21M9 11H4M15 5H18C19.1046 5 20 5.89543 20 7V9M6 5C4.89543 5 4 5.89543 4 7V19C4 20.1046 4.89543 21 6 21H9M15 3V7M9 3V7M9 5H12M18 13C18 14.1046 17.1046 15 16 15C14.8954 15 14 14.1046 14 13C14 11.8954 14.8954 11 16 11C17.1046 11 18 11.8954 18 13Z"
                stroke="#000957"
                strokeWidth="0.9600000000000002"
                strokeLinecap="round"
              ></path>{' '}
            </g>
          </svg>
          <Typography variant="h4" className="mb-[7px] tracking-[-0.56px] text-center text-primaryText">
            Visit <br />
            Appointment
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <svg
            width="50px"
            height="50px"
            viewBox="-0.72 -0.72 25.44 25.44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <path
                d="M2 22H22"
                stroke="#000957"
                strokeWidth="0.9600000000000002"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{' '}
              <path
                d="M2.9502 22.0003L3.00019 9.97023C3.00019 9.36023 3.2902 8.78029 3.7702 8.40029L10.7702 2.95027C11.4902 2.39027 12.5002 2.39027 13.2302 2.95027L20.2302 8.39028C20.7202 8.77028 21.0002 9.35023 21.0002 9.97023V22.0003"
                stroke="#000957"
                strokeWidth="0.9600000000000002"
                strokeMiterlimit="10"
                strokeLinejoin="round"
              ></path>{' '}
              <path
                opacity="0.4"
                d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z"
                stroke="#000957"
                strokeWidth="0.9600000000000002"
                strokeMiterlimit="10"
                strokeLinejoin="round"
              ></path>{' '}
              <path
                opacity="0.4"
                d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z"
                stroke="#000957"
                strokeWidth="0.9600000000000002"
                strokeMiterlimit="10"
                strokeLinejoin="round"
              ></path>{' '}
              <path
                opacity="0.4"
                d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z"
                stroke="#000957"
                strokeWidth="0.9600000000000002"
                strokeMiterlimit="10"
                strokeLinejoin="round"
              ></path>{' '}
              <path
                d="M19.0003 7L18.9703 4H14.5703"
                stroke="#000957"
                strokeWidth="0.9600000000000002"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>{' '}
            </g>
          </svg>
          <Typography variant="h4" className="mb-[7px] tracking-[-0.56px] text-center  text-primaryText">
            Get your <br />
            dream house
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center p-[30px] bg-deep_orange-50 rounded-[20px]">
          <svg
            fill="#000957"
            width="50px"
            height="50px"
            viewBox="0 0 64.00 64.00"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#000957"
            strokeWidth="0.64"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              {' '}
              <g id="favorite">
                {' '}
                <path d="M30,12A24,24,0,1,0,54,36,24.0275,24.0275,0,0,0,30,12Zm0,46A22,22,0,1,1,52,36,22.0248,22.0248,0,0,1,30,58Z"></path>{' '}
                <path d="M60.9331,35.6372,61.7,34.87a1,1,0,0,0-1.4141-1.414l-.7671.767-.767-.767a1,1,0,1,0-1.4141,1.414l.7671.7671-.7671.7671a1,1,0,1,0,1.4141,1.4141l.767-.7671.7671.7671A1,1,0,1,0,61.7,36.4043Z"></path>{' '}
                <circle cx="57" cy="49" r="1"></circle>{' '}
                <path d="M38.335,40.37a22.5153,22.5153,0,0,1-16.67,0,1,1,0,0,0-.7832,1.84,24.1189,24.1189,0,0,0,18.2364,0,1,1,0,0,0-.7832-1.84Z"></path>{' '}
                <path d="M35,11a3,3,0,1,0-3-3A3.0033,3.0033,0,0,0,35,11Zm0-4a1,1,0,1,1-1,1A1.0006,1.0006,0,0,1,35,7Z"></path>{' '}
                <path d="M21.6865,32.6631,23,31.708l1.3135.9541A1.764,1.764,0,0,0,27.0283,30.69l-.5019-1.5439,1.3144-.9551A1.7642,1.7642,0,0,0,26.8037,25H25.18l-.502-1.5439a1.7636,1.7636,0,0,0-3.3554,0L20.82,25h-1.624a1.7648,1.7648,0,0,0-1.0371,3.1924l1.3144.9541-.5019,1.543a1.7638,1.7638,0,0,0,2.7148,1.9736Z"></path>{' '}
                <path d="M40.8037,25H39.18l-.502-1.5439a1.7636,1.7636,0,0,0-3.3554,0L34.82,25h-1.624a1.7648,1.7648,0,0,0-1.0371,3.1924l1.3144.9541-.5019,1.543a1.7638,1.7638,0,0,0,2.7148,1.9736L37,31.708l1.3135.9541A1.764,1.764,0,0,0,41.0283,30.69l-.5019-1.5439,1.3144-.9551A1.7642,1.7642,0,0,0,40.8037,25Z"></path>{' '}
              </g>{' '}
            </g>
          </svg>
          <Typography variant="h4" className="mb-[7px] tracking-[-0.56px] text-center  text-primaryText">
            Enjoy your <br />
            Appointment
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Services;
