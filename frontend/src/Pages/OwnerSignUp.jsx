import { Link } from 'react-router-dom';
import { Input, Button } from '@material-tailwind/react';

const OwnerSignUp = () => {
  return (
    <div className="relative flex flex-col  bg-transparent shadow-none rounded-xl bg-clip-border">
      <h4 className="block font-sans text-2xl text-primaryText antialiased font-semibold leading-snug tracking-normal">
        Sign Up
      </h4>
      <p className="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        Nice to meet you! Enter your details to register.
      </p>
      <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96">
        <div className="flex flex-col gap-6 mb-1">
          <div className="relative h-11 w-full min-w-[200px]">
            <Input
              type="text"
              label="Full Name"
              placeholder="Abhishek Sahu"
              className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <Input
              type="number"
              maxLength={10}
              label="Contact Number"
              placeholder="e.g., +1 123-456-7890"
              pattern="^\+\d{1,3}\s\d{1,4}-\d{1,4}-\d{4}$"
              className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <Input
              type="email"
              label="E-Mail"
              placeholder="abc@abc.com"
              className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <Input
              type="text"
              label="Address"
              placeholder="Address"
              className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <Input
              type="text"
              label="City"
              placeholder="Bhopal"
              className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <Input
              type="text"
              label="State"
              placeholder="Madhya Pradesh"
              className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
          </div>
        </div>

        <div className="inline-flex items-center">
          <label className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3" htmlFor="remember">
            <Input
              type="checkbox"
              className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
              id="remember"
            />
            <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </label>
          <label className="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="remember">
            <p className="flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700">
              I agree the
              <Link to="/terms-and-conditions"> &nbsp;Terms and Conditions</Link>
            </p>
          </label>
        </div>

        <div>
          <Button
            variant="text"
            className="mt-6 block w-full text-primaryText  select-none rounded-lg  py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase  shadow-sm shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            sign up
          </Button>
        </div>
        <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
          Already have an account?
          <Link
            to="/owner-signin"
            className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
          >
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default OwnerSignUp;
