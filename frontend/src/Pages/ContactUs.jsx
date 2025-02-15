import { Helmet } from 'react-helmet';
import { Typography, Button, Textarea, Input } from '@material-tailwind/react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';
import { MdCall, MdEmail } from 'react-icons/md';

export default function ContactUs() {
  return (
    <>
      <Helmet>
        <title>Contact-Us</title>
        <meta name="building blocks" content="contact us" />
      </Helmet>
      <div className="flex items-center justify-center w-full text-primaryText overflow-auto bg-gray-50_01 px-4 py-10">
        <div className="flex flex-col items-center justify-start w-full max-w-screen-lg gap-11">
          <div className="flex flex-col items-center justify-start w-full pt-0.5 gap-4">
            <Typography size="4xl" variant="h1" className="text-3xl md:text-4xl tracking-[-1.08px] text-center">
              Get in touch
            </Typography>
            <Typography variant="paragraph" className="text-center text-secondaryText text-sm md:text-base px-4">
              On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
              demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the
              pain and trouble.
            </Typography>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-8 p-6 border border-blue_gray-100_01 bg-white-A700 rounded-[10px] shadow-lg">
            <div className="flex flex-col items-center justify-start w-full md:w-[50%] gap-8">
              <div className="flex flex-col items-start justify-start w-full gap-5">
                <Typography variant="h2" className="text-xl tracking-[-0.56px]">
                  Send a message
                </Typography>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Input type="text" label="Full Name" name="fullname" placeholder="Full Name" className="w-full" />
                  <Input type="email" name="email" label="Email" placeholder="Email Address" className="w-full" />
                  <Input
                    type="number"
                    name="phoneNumber"
                    label="Number"
                    placeholder="Phone Number"
                    className="w-full"
                  />
                  <Textarea size="lg" label="Message" placeholder="Message" className="w-full" />
                </div>
              </div>
              <Button
                variant="text"
                className="w-full text-lg border border-primaryText text-primaryText rounded hover:text-primaryText"
              >
                Send Request
              </Button>
            </div>

            <div className="flex flex-col items-center justify-start w-full md:w-[40%] gap-8">
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <div className="flex flex-col items-start justify-start w-full gap-[3px]">
                  <Typography size="md" variant="h3" className="text-md tracking-[-0.40px]">
                    Office Address
                  </Typography>
                  <Typography size="s" variant="h4" className="text-gray-600_02 font-semibold leading-[180%]">
                    1421 San Pedro St, Los Angeles, <br />
                    CA 90015
                  </Typography>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-2.5">
                  <div className="flex flex-row justify-start items-center w-full gap-[13px] py-0.5">
                    <MdCall />
                    <Typography variant="h5" className="text-sm !text-gray-600_02 !font-semibold">
                      (123) 456-7890
                    </Typography>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                    <MdEmail />
                    <Typography variant="h6" className="text-sm mt-0.5 text-gray-600_02 font-semibold">
                      info@mail.com
                    </Typography>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-full gap-3">
                <Typography variant="h5" className="text-md tracking-[-0.40px]">
                  Social
                </Typography>
                <div className="flex flex-row justify-start gap-4">
                  <FaSquareFacebook className="text-primaryText" />
                  <FaLinkedin className="text-primaryText" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
