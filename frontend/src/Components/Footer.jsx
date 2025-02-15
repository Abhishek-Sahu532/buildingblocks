import { Typography } from '@material-tailwind/react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center w-full px-6 md:px-14 py-10 bg-white">
      <div className="flex flex-col items-center justify-center w-full gap-10 md:gap-28 mx-auto max-w-[1200px]">
        {/* Top Section: Logo & Contact */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-8 md:gap-16">
          {/* Left Side - Logo & Contact */}
          <div className="flex flex-col items-center md:items-start w-full md:w-1/3 gap-6">
            <div className="flex items-center gap-3">
              <Typography size="md" variant="paragraph" className="text-primaryText text-3xl font-semibold">
                Building Blocks
              </Typography>
            </div>
            <div className="text-center md:text-left">
              <Typography variant="h6" className="leading-relaxed">
                59 Bervely Hill Ave, Brooklyn Town,
                <br />
                New York, NY 5630, CA, US
              </Typography>
              <Typography variant="h6" className="mt-2">
                +(123) 456-7890
              </Typography>
              <Typography variant="h6">info@mail.com</Typography>
            </div>
    
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-3 mt-2">
              <FaSquareFacebook className="text-primaryText" />
              <FaLinkedin className="text-primaryText" />
              <FaSquareXTwitter className="text-primaryText" />
            </div>
          </div>

          {/* Right Side - Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full md:w-2/3">
            {/* Features */}
            <div className="flex flex-col gap-3">
              <Typography size="md" variant="h6" className="font-semibold">
                Features
              </Typography>
              <Typography variant="h6">Home v1</Typography>
              <Typography variant="h6">Home v2</Typography>
              <Typography variant="h6">About</Typography>
              <Typography variant="h6">Contact</Typography>
              <Typography variant="h6">Search</Typography>
            </div>

            {/* Information */}
            <div className="flex flex-col gap-3">
              <Typography size="md" variant="h6" className="font-semibold">
                Information
              </Typography>
              <Typography variant="h6">Listing v1</Typography>
              <Typography variant="h6">Listing v2</Typography>
              <Typography variant="h6">Property Details</Typography>
              <Typography variant="h6">Agent List</Typography>
              <Typography variant="h6">Agent Profile</Typography>
            </div>

            {/* Documentation */}
            <div className="flex flex-col gap-3">
              <Typography size="md" variant="h6" className="font-semibold">
                Documentation
              </Typography>
              <Typography variant="h6">Blog</Typography>
              <Typography variant="h6">FAQ</Typography>
              <Typography variant="h6">Privacy Policy</Typography>
              <Typography variant="h6">License</Typography>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <Typography variant="h6" className="text-center">
          © {new Date().getFullYear()}. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
