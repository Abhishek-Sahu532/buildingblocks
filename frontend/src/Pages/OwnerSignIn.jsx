import { Input, Button } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const OwnerSignIn = () => {
  return (
    <div className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
      
      <div className="flex flex-col gap-4 p-6">
        <div className="relative h-11 w-full min-w-[200px]">
          <div className="relative h-11 w-full min-w-[200px]">
            <Input
              type="email"
              label="Email"
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
        </div>
      </div>
      <div className="p-6 pt-0">
        <Button
          className="block w-full select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Sign In
        </Button>
        <p className="flex justify-center mt-6 font-sans text-sm antialiased font-light leading-normal text-inherit">
          Don't have an account?
          <Link
            to="/signup"
            className="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default OwnerSignIn;
