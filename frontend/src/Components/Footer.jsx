import { Typography } from '@material-tailwind/react'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full px-14 py-[74px] bg-white-A700">
    <div className="flex flex-col items-center justify-center w-full mt-[5px] gap-[115px] mx-auto max-w-[1200px]">
      <div className="flex flex-row justify-start items-center w-full gap-px">
        <div className="flex flex-col items-center justify-start w-[29%] gap-[43px]">
          <div className="flex flex-row justify-start items-start w-full gap-[11px]">
            <img
              src="images/img_real_estate_1.svg"
              alt="realestateone"
              className="h-10 w-10"
            />
            <Typography 
              size="md"
              as="p"
              className="mt-[5px] !text-orange-A700 !font-markoone"
            >
              Relasto
            </Typography>
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-7">
            <Typography  as="h6" className="!leading-[160%]">
              59 Bervely Hill Ave, Brooklyn Town,
              <br />
              New York, NY 5630, CA, US
            </Typography>
            <div className="flex flex-col items-start justify-center gap-2">
              <Typography  as="h6" className="mt-px">
                +(123) 456-7890
              </Typography>
              <Typography  as="h6">info@mail.com</Typography>
            </div>
            <div className="flex flex-row justify-start w-full gap-3">
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <img  
                  src="images/img_icon_facebook.svg"
                  alt="iconfacebook"
                  className="h-[30px] w-[30px]"
                />
              </div>
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <img  
                  src="images/img_icon_twitter.svg"
                  alt="icontwitter_one"
                  className="h-[30px] w-[30px]"
                />
              </div>
              <img  
                src="images/img_icon_instragram.svg"
                alt="iconinstragram"
                className="h-[30px] w-[30px]"
              />
              <img  
                src="images/img_icon_linked_in.svg"
                alt="iconlinkedin"
                className="h-[30px] w-[30px]"
              />
              <div className="flex flex-col items-center justify-start h-[30px] w-[30px]">
                <img  
                  src="images/img_icon_youtube.svg"
                  alt="iconyoutube_one"
                  className="h-[30px] w-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-[72%]">
          <div className="flex flex-col items-start justify-start w-[19%] gap-[15px]">
            <Typography  size="md" as="h6">
              Features
            </Typography>
            <div className="flex flex-col items-start justify-start w-full gap-[15px]">
              <Typography  as="h6">Home v1</Typography>
              <Typography  as="h6">Home v2</Typography>
              <Typography  as="h6">About</Typography>
              <Typography  as="h6">Contact</Typography>
              <Typography  as="h6">Search</Typography>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] gap-[15px]">
            <Typography  size="md" as="h6">
              Information
            </Typography>
            <div className="flex flex-col items-start justify-start w-full pt-[3px] gap-[15px]">
              <Typography  as="h6">Listing v1</Typography>
              <Typography  as="h6">Listing v2</Typography>
              <Typography  as="h6">Property Details</Typography>
              <Typography  as="h6">
                Agent List
                <br />
              </Typography>
              <Typography  as="h6">Agent Profile</Typography>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start w-[19%] gap-[15px]">
            <Typography  size="md" as="h6">
              Documentation{" "}
            </Typography>
            <div className="flex flex-col items-start justify-center w-full gap-[15px]">
              <Typography  as="h6" className="mt-0.5">
                Blog
              </Typography>
              <Typography  as="h6">FAQ</Typography>
              <a href="#">
                <Typography  as="h6">
                  Privacy Policy
                  <br />
                </Typography>
              </a>
              <Typography  as="h6">License</Typography>
            </div>
          </div>

  {/**   <div className="flex flex-col items-start justify-start w-[19%] gap-[15px]">
            <Typography  size="md" as="h6">
              Others
            </Typography>
            <div className="flex flex-col items-start justify-center w-full gap-[15px]">
              <a href="#" className="mt-0.5">
                <Typography  as="h6">Log in</Typography>
              </a>
              <Typography  as="h6">Enter OTP</Typography>
              <Typography  as="h6">New Password</Typography>
              <a href="#">
                <Typography  as="h6">Reset Password</Typography>
              </a>
              <a href="#">
                <Typography  as="h6">Create Account</Typography>
              </a>
            </div>
          </div>*/}
        </div>
      </div>
      <Typography  as="h6">© 2022. All rights reserved.</Typography>
    </div>
  </footer>
  )
}

export default Footer