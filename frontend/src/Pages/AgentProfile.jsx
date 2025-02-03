import { Helmet } from 'react-helmet';
import { RatingBar, LandingPageCard } from '../Components';
import { Typography, Button } from '@material-tailwind/react';

export default function AgentProfile() {
  return (
    <>
      <Helmet>
        <title>Agent Profile</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[100px] overflow-auto bg-gray-50_01">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-row justify-center w-full">
                <img src="images/img_cover_image.png" alt="coverimage_one" className="w-full object-cover" />
              </div>
              <div className="flex flex-col items-center justify-start w-full mt-[-46px] gap-[58px]">
                <div className="flex flex-row justify-start items-center w-full gap-[30px] max-w-[1160px]">
                  <img
                    src="images/img_rectangle_5599_150x150.png"
                    alt="image"
                    className="w-[150px] object-cover rounded-[10px]"
                  />
                  <div className="flex flex-row justify-between items-center w-[85%]">
                    <div className="flex flex-row justify-start items-center w-[83%] gap-8">
                      <div className="flex flex-col items-start justify-start w-[49%] gap-1.5">
                        <Typography variant="h1" className="tracking-[-0.48px]">
                          Bruno Fernandes
                        </Typography>
                        <div className="flex flex-row justify-start items-center gap-3.5 py-0.5">
                          <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                          <Typography variant="h2">4.5 review</Typography>
                        </div>
                      </div>
                      <div className="flex flex-col items-center justify-start w-[49%] gap-2">
                        <div className="flex flex-row justify-start items-center w-full gap-[13px] py-0.5">
                          <img src="images/img_icon_24px_call.svg" alt="icon24pxcall" className="h-6 w-6" />
                          <Typography variant="h3">(123) 456-7890</Typography>
                        </div>
                        <div className="flex flex-row justify-start items-center w-full gap-3 py-0.5">
                          <img src="images/img_icon_24px_email_gray_900.svg" alt="icon24pxemail" className="h-6 w-6" />
                          <Typography variant="h4" className="mt-0.5">
                            bruno@relasto .com
                          </Typography>
                        </div>
                      </div>
                    </div>
                    <Button className="font-semibold min-w-[112px]">Contact</Button>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-start w-full gap-12 max-w-[1200px]">
                  <div className="flex flex-col lg:flex-row justify-start w-full gap-3">
                    <Button className="font-semibold min-w-full lg:min-w-[291px] mb-3 lg:mb-0">For rent</Button>
                    <Button variant="outline" className="font-semibold min-w-full lg:min-w-[291px] mb-3 lg:mb-0">
                      For sale
                    </Button>
                    <Button variant="outline" className="font-semibold min-w-full lg:min-w-[291px] mb-3 lg:mb-0">
                      About
                    </Button>
                    <Button variant="outline" className="font-semibold min-w-full lg:min-w-[291px] mb-3 lg:mb-0">
                      Review
                    </Button>
                  </div>
                  <div className="justify-center w-full gap-6 grid-cols-1 lg:grid-cols-3 grid min-h-[auto]">
                    <LandingPageCard className="flex flex-col items-center justify-start w-full mb-6 lg:mb-0" />
                    <LandingPageCard
                      imageOne="images/img_image_1.png"
                      className="flex flex-col items-center justify-start w-full mb-6 lg:mb-0"
                    />
                    <LandingPageCard
                      imageOne="images/img_image_2.png"
                      className="flex flex-col items-center justify-start w-full mb-6 lg:mb-0"
                    />
                    <LandingPageCard
                      imageOne="images/img_image_3.png"
                      className="flex flex-col items-center justify-start w-full mb-6 lg:mb-0"
                    />
                    <LandingPageCard
                      imageOne="images/img_image_4.png"
                      className="flex flex-col items-center justify-start w-full mb-6 lg:mb-0"
                    />
                    <LandingPageCard
                      imageOne="images/img_image_5.png"
                      className="flex flex-col items-center justify-start w-full mb-6 lg:mb-0"
                    />
                  </div>

                  {/*pagination */}

                  <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row justify-start gap-[5px]">
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
          </div>
        </div>

        <div className="flex flex-col items-center justify-start w-full max-w-[1200px] p-4 md:p-[41px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[10px] lg:flex-row">
          <div className="flex flex-col items-center justify-start w-full lg:w-[47%] gap-6 md:gap-[57px]">
            <div className="flex flex-col items-center justify-start w-full gap-6">
              <div className="flex flex-row justify-center items-center w-full gap-4">
                <img
                  src="images/img_rectangle_5599.png"
                  alt="image_one"
                  className="w-[182px] object-cover rounded-[10px]"
                />
                <div className="flex flex-col items-start justify-start w-3/5 gap-1.5">
                  <Typography variant="h2" className="text-xl tracking-[-0.48px]">
                    Bruno Fernandes
                  </Typography>
                  <div className="flex flex-row justify-start items-center gap-3 py-0.5">
                    <RatingBar value={1} isEditable={true} size={16} className="flex justify-between w-24" />
                    <Typography variant="h3">4.5 review</Typography>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-3 py-0.5">
                    <img src="images/img_icon_24px_call.svg" alt="icon24pxcall" className="h-6 w-6" />
                    <Typography variant="h4">(123) 456-7890</Typography>
                  </div>
                  <div className="flex flex-row justify-start items-center gap-3 py-0.5">
                    <img src="images/img_icon_24px_email_gray_900.svg" alt="icon24pxemail" className="h-6 w-6" />
                    <Typography variant="h5" className="mt-0.5">
                      bruno@relasto .com
                    </Typography>
                  </div>
                </div>
              </div>
              <Typography variant="paragraph" className="!text-gray-600_02">
                A slider is great way to display a slideshow featuring images or videos, usually on your homepage.
                <br />
                Adding sliders to your site is no longer difficult. You don’t have to know coding anymore. Just use a
                slider widget and it will automatically insert the slider on your web page.
                <br />
                One of the best ways to add beautiful sliders with excellent responsiveness and advanced options.{' '}
              </Typography>
            </div>
            <Button className="w-full font-semibold">Contact</Button>
          </div>

          <div className="flex flex-col items-center justify-start w-full lg:w-[47%] gap-6">
            <div className="flex flex-col items-start justify-center w-full gap-1.5">
              <Typography variant="h2" className="mt-0.5 text-lg tracking-[-0.40px]">
                Experiences
              </Typography>
              <Typography variant="h3" className="text-gray-600_02">
                15+ years experience
              </Typography>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-1.5">
              <Typography variant="h4" className="mt-0.5 text-lg tracking-[-0.40px]">
                Property Types
              </Typography>
              <Typography variant="h5" className="text-gray-600_02">
                Private House, Villa, Townhouse, Apartment
              </Typography>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
              <Typography variant="h6" className="tracking-[-0.40px]">
                Area
              </Typography>
              <Typography variant="h6" className="mb-px">
                California, San Jose, Miami
              </Typography>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-2">
              <Typography variant="h5" className="tracking-[-0.40px]">
                Address
              </Typography>
              <Typography variant="h6" className="mb-px !text-gray-600_02">
                59 Orchard, NY 5005, US
              </Typography>
            </div>
            <div className="flex flex-row justify-between w-full gap-[60px]">
              <div className="flex flex-col items-start justify-center gap-[7px]">
                <Typography variant="h5" className="tracking-[-0.40px]">
                  License No
                </Typography>
                <Typography variant="h6" className="mb-0.5 text-gray-600_02">
                  BF-0535
                </Typography>
              </div>
              <div className="flex flex-col items-start justify-center gap-[7px]">
                <Typography variant="h5" className="tracking-[-0.40px]">
                  Website
                </Typography>
                <a href="www.abc.com" target="_blank" rel="noreferrer" className="mb-px">
                  <Typography variant="h6" className="underline text-gray-600_02">
                    www.abc.com
                  </Typography>
                </a>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-3">
              <Typography variant="h5" className="tracking-[-0.40px]">
                Social
              </Typography>
              <div className="flex flex-row justify-start gap-4">
                <img src="images/img_social_icon_facebook.svg" alt="socialicon_one" className="h-[30px] w-[30px]" />
                <img src="images/img_social_icon_linkedin.svg" alt="socialicon" className="h-[30px] w-[30px]" />
                <img src="images/img_social_icon_twitter.svg" alt="socialicon_five" className="h-[30px] w-[30px]" />
                <img src="images/img_social_icon_youtube.svg" alt="socialicon" className="h-[30px] w-[30px]" />
                <img src="images/img_social_icon_rss.svg" alt="socialiconrss" className="h-[30px] w-[30px]" />
              </div>
            </div>
          </div>
        </div>

        {/*HERE */}

        <div className="flex flex-col items-center justify-start w-full gap-[39px] py-[29px] border-blue_gray-100_01 border border-solid bg-white-A700 max-w-[1200px] rounded-[10px]">
          <div className="flex flex-col items-center justify-start w-full gap-[22px]">
            <div className="flex flex-row justify-between items-center w-full px-[42px]">
              <Typography size="2xl" variant="h2" className="text-2xl tracking-[-0.56px]">
                Clients Review
              </Typography>
            </div>
            <Button
              size="4xl"
              rightIcon={<img src="images/img_icon_24px_plus_white_a700.svg" alt="icon / 24px / plus" />}
              className="gap-2.5 font-bold min-w-[190px] text-white ml-4"
            >
              Write a Reveiw
            </Button>
            <div className="h-px w-full bg-blue_gray-100_01" />
          </div>
          <div className="flex flex-col items-start justify-start w-full gap-[25px] px-[25px]">
            <div className="flex flex-col w-full gap-[25px]">
              <div className="flex flex-col items-center justify-center w-full gap-10 p-[29px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[20px]">
                <Typography variant="h2" className="text-xl mt-[9px] text-gray-600_02 font-semibold leading-[165%]">
                  Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam
                  porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.{' '}
                </Typography>
                <div className="flex flex-col items-center justify-start w-full mb-[9px] gap-6">
                  <div className="flex flex-row justify-start w-full gap-[50px]">
                    <div className="flex flex-row justify-start items-center w-[23%] gap-2.5">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={24}
                        starCount={4}
                        className="flex justify-between w-[120px]"
                      />
                      <Typography variant="h3" className="text-lg text-gray-600_02 tracking-[-0.40px]">
                        4.5 review
                      </Typography>
                    </div>
                    <Typography variant="h4" className="text-lg text-gray-600_02 tracking-[-0.40px]">
                      02 June 2022
                    </Typography>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-4">
                    <img src="images/img_ellipse_2695.png" alt="taylor_wilson" className="h-20 w-20 rounded-[50%]" />
                    <div className="flex flex-col items-start justify-center w-[92%] gap-[5px]">
                      <Typography size="2xl" variant="h5" className="text-2xl mt-0.5 tracking-[-0.56px]">
                        Taylor Wilson
                      </Typography>
                      <Typography variant="h6">Product Manager - Static Mania</Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full gap-10 p-[29px] border-blue_gray-100_01 border border-solid bg-white-A700 rounded-[20px]">
                <Typography variant="h4" className="mt-[9px] !text-gray-600_02 !font-semibold !leading-[165%]">
                  Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam
                  porttitor mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.{' '}
                </Typography>
                <div className="flex flex-col items-center justify-start w-full mb-[9px] gap-6">
                  <div className="flex flex-row justify-start w-full gap-[50px]">
                    <div className="flex flex-row justify-start items-center w-[23%] gap-2.5">
                      <RatingBar
                        value={1}
                        isEditable={true}
                        size={24}
                        starCount={4}
                        className="flex justify-between w-[120px]"
                      />
                      <Typography variant="h5" className="!text-gray-600_02 tracking-[-0.40px]">
                        4.5 review
                      </Typography>
                    </div>
                    <Typography variant="h5" className="!text-gray-600_02 tracking-[-0.40px]">
                      02 June 2022
                    </Typography>
                  </div>
                  <div className="flex flex-row justify-start items-center w-full gap-4">
                    <img src="images/img_ellipse_2695.png" alt="circleimage" className="h-20 w-20 rounded-[50%]" />
                    <div className="flex flex-col items-start justify-center w-[92%] gap-[5px]">
                      <Typography size="2xl" variant="h3" className="mt-0.5 tracking-[-0.56px]">
                        Taylor Wilson
                      </Typography>
                      <Typography variant="h6">Product Manager - Static Mania</Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Button
              color="gray_600_02"
              variant="outline"
              rightIcon={<img src="images/img_arrowdown_gray_900.svg" alt="arrow_down" />}
              className="gap-1 font-semibold min-w-[128px]"
            >
              See more
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
