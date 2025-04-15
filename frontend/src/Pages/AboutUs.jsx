import { Helmet } from 'react-helmet';
import { Button, Input } from '@material-tailwind/react';

export default function AboutUs() {
  const addtionalDetails = [
    {
      imgsrc: 'images/img_frame.svg',
      heading1: '$15.4M',
      heading2: ' Owned from Properties transactions'
    },
    {
      imgsrc: 'images/img_frame_orange_a700.svg',
      heading1: '25K+',
      heading2: 'Properties for Buy & sell Successfully'
    },
    {
      imgsrc: 'images/img_icon.svg',
      heading1: '500',
      heading2: 'Daily completed  transactions'
    },
    {
      imgsrc: 'images/img_icon_orange_a700.svg',
      heading1: ' 600+',
      heading2: 'Reagular Clients'
    }
  ];

  const teamMemberDetails = [
    {
      imgsrc: 'images/img_rectangle_5596.png',
      name: 'Floyd Miles',
      designation: 'President of Sales'
    },
    {
      imgsrc: 'images/img_rectangle_5596.png',
      name: ' Darlene Robertson',
      designation: 'Marketing Coordinator'
    },
    {
      imgsrc: 'images/img_rectangle_5596.png',
      name: 'Guy Hawkins',
      designation: 'Marketing Coordinator'
    },
    {
      imgsrc: 'images/img_rectangle_5596.png',
      name: 'Jerome Bell',
      designation: 'Marketing Coordinator'
    }
  ];

  const blogPost = [
    {
      blogSubject: ' 9 Easy-to-Ambitious DIY Projects to Improve Your Home',
      imgsrc: 'images/img_image_350x384.png'
    },
    {
      blogSubject: 'Serie Shophouse Launch In July, Opportunity For Investors',
      imgsrc: 'images/img_image_6.png'
    },
    {
      blogSubject: ' Looking for a New Place? Use This Time to Create Your Wishlist',
      imgsrc: 'images/img_image_7.png'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>

      <div className="flex flex-col items-center justify-start w-full gap-[50px] md:gap-[75px] lg:gap-[100px] mt-7">
        <div className="flex flex-col items-center justify-start w-full gap-[50px] md:gap-[75px] lg:gap-[100px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-col items-center justify-start w-full gap-[38px] px-4 md:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-start w-full gap-4">
                <h1 className="tracking-[-1.08px] text-center text-2xl md:text-3xl lg:text-4xl text-primaryText">
                  Reimagining real estate to <br />
                  make it easier to unlock.
                </h1>
                <h2 className="text-center text-base md:text-lg text-secondaryText">
                  On the other hand, we denounce with righteous indignation and dislike men who{' '}
                  <br className="hidden md:block" />
                  are so beguiled and demoralized by the charms of pleasure of the moment,{' '}
                  <br className="hidden md:block" />
                  so blinded by desire, that they cannot foresee the pain and trouble.
                </h2>
              </div>
              <div className="flex flex-col items-center justify-start w-full gap-6">
                <div className="flex flex-col md:flex-row justify-start w-full gap-6">
                  <img
                    src="images/img_rectangle_5592.png"
                    alt="main_image"
                    className="w-full md:w-[66%] object-cover rounded-[10px]"
                    loading="lazy"
                  />
                  <img
                    src="images/img_rectangle_5593.png"
                    alt="image_one"
                    className="w-full md:w-[32%] object-cover rounded-[10px]"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col md:flex-row justify-start w-full gap-6">
                  <img
                    src="images/img_rectangle_5595.png"
                    alt="image_two"
                    className="w-full md:w-[32%] object-cover rounded-[10px]"
                    loading="lazy"
                  />
                  <img
                    src="images/img_rectangle_5594.png"
                    alt="image_three"
                    className="w-full md:w-[66%] object-cover rounded-[10px]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ADDINTION DETAILS */}
          <div className="flex flex-wrap justify-center gap-1 md:gap-8 lg:gap-12 p-2 md:p-8 lg:p-10 bg-gray-50 w-full">
            {addtionalDetails.map((link, index) => (
              <div key={index} className="flex w-full md:w-1/2 lg:w-1/5 gap-4 md:gap-6 p-4 justify-center items-center">
                <div className="w-8 h-8 rounded-full shrink-0 bg-blue-gray-400 "></div>
                <div className="flex flex-col items-start justify-start w-full">
                  <h2 className="tracking-[-0.92px] text-xl text-primaryText text-center">{link.heading1}</h2>
                  <h3 className="text-primaryText tracking-[-0.40px] ">{link.heading2}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col text-primaryText items-start justify-start w-full px-4 lg:px-[120px]">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center w-full mx-auto">
              <div className="w-full lg:w-[47%] mb-8 lg:mb-0">
                <div className="flex flex-col items-start justify-start w-full gap-4 lg:gap-[18px]">
                  <h2 size="4xl" className="tracking-[-0.72px] text-primaryText text-2xl">
                    A note from our founders.
                  </h2>
                  <h2 className="text-primaryText">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour,
                  </h2>
                </div>
                <div className="flex flex-col w-full gap-[30px] mt-8">
                  {/* Founder timeline items */}
                  {[1, 2, 3].map((num, index) => (
                    <div key={index} className="flex flex-row justify-start items-start w-full gap-[26px]">
                      <div className="flex flex-col items-center justify-start h-[35px] w-[35px] shrink-0">
                        <h3 className="flex justify-center items-center h-[35px] tracking-[-0.40px] text-center !font-extrabold border-primaryText border-2 border-solid rounded-[20px]">
                          {num}
                        </h3>
                      </div>
                      <div className="flex flex-col items-start justify-start w-[89%] gap-4">
                        <h4 size="xl" className="tracking-[-0.44px] font-bold text-xl">
                          {index === 0 && 'It all started in 1995'}
                          {index === 1 && 'Donate launches in 2007'}
                          {index === 2 && 'Building Blocks holds its initial public offering in 2008'}
                        </h4>
                        <h2>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On
                          the other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                          demoralized by the charms of pleasure of the moment.
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <img
                src="images/img_rectangle_20_589x531.png"
                alt="image_four"
                className="w-full lg:w-[47%] object-cover rounded-[10px]"
                loading="lazy"
              />
            </div>
          </div>
          {/* OUR VISION SECTION */}
          <div className="flex flex-col items-start justify-start w-full px-4 lg:px-[120px] text-secondaryText">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full mx-auto">
              <img
                src="images/img_rectangle_20_589x496.png"
                alt="image_five"
                className="w-full lg:w-[44%] object-cover rounded-[10px] mb-8 lg:mb-0"
                loading="lazy"
              />
              <div className="flex flex-col items-center lg:items-start justify-start w-full lg:w-[44%] gap-8">
                <div className="flex flex-col items-start justify-start w-full gap-4 lg:gap-3.5">
                  <h2 className="text-4xl lg:text-[2.5rem] font-semibold tracking-[-0.72px]">Our vision is simple.</h2>
                  <h2 className="text-base lg:text-lg">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, On the
                    other hand, we denounce with righteous indignation and dislike men who are so beguiled and
                    demoralized by the charms of pleasure of the moment.
                    <br />
                    In a free hour, On the other hand, we denounce with righteous indignation and dislike men.
                  </h2>
                </div>
                <div className="flex flex-col items-start justify-center w-full gap-2">
                  <h3 className="text-lg lg:text-base tracking-[-0.40px]">Kausar Pial</h3>
                  <h4 className="text-md lg:text-base text-gray-700 font-semibold mb-1">CEO at Static Mania</h4>
                </div>
              </div>
            </div>
          </div>

          {/* team section */}
          <div className="flex flex-col items-center justify-start w-full text-primaryText">
            <div className="flex flex-col items-center justify-start w-full gap-8 px-4">
              <h2 className="text-4xl text-primaryText tracking-[-0.72px] text-center">Building Blocks Team members</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                {teamMemberDetails.map((detail, index) => (
                  <div key={index} className="flex flex-col items-center justify-start gap-4">
                    <img
                      src={detail.imgsrc}
                      alt={detail.name}
                      className="w-full max-w-[282px] aspect-square object-cover rounded-[10px]"
                      loading="lazy"
                    />
                    <div className="flex flex-col items-start justify-center gap-2">
                      <h3 size="lg" className="text-lg tracking-[-0.40px]">
                        {detail.name}
                      </h3>
                      <h2 className="mb-0.5">{detail.designation}</h2>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* news & consult section */}
          <div className="flex flex-col items-center justify-start w-full px-4 lg:px-14 py-8 lg:py-[120px] text-primaryText">
            <div className="flex flex-col items-center justify-start w-full gap-8 ">
              <div className="flex flex-col items-center justify-start w-full gap-8">
                <div className="flex flex-col md:flex-row justify-between items-center w-full gap-4">
                  <h2 className="!text-white-A700 text-4xl tracking-[-0.72px]">News & Consult</h2>
                  <div className="flex flex-row justify-start items-center gap-2">
                    <h3 className=" text-orange-700">Explore All </h3>
                    <div className="text-orange-700 animate-ping">
                      {' '}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {blogPost.map((post, index) => (
                    <div key={index} className="flex flex-col items-center justify-start gap-6">
                      <img src={post.imgsrc} alt="blog_image" className="w-full object-cover rounded-[10px]" />
                      <div className="flex flex-col items-center justify-start w-full gap-[23px]">
                        <h4 className="!text-white-A700 text-2xl tracking-[-0.48px]">{post.blogSubject}</h4>
                        <div className="flex flex-row justify-start items-center w-full gap-2 animate-pulse">
                          <h5 className="mt-px !text-deep_orange-400">Read the Article</h5>
                          <div className="text-sm ">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="size-6"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center justify-start w-full gap-8 p-6 lg:p-10 bg-gray-400_01 rounded-lg">
                <div className="flex flex-col items-center justify-start w-full lg:w-[54%] gap-4">
                  <h3 className="text-3xl tracking-[-0.56px] text-center">For Recent Update, News.</h3>
                  <h2 className="text-primaryText text-center">
                    We helps businesses customize, automate and scale up their ad production and delivery.
                  </h2>
                </div>
                <div className="flex flex-col md:flex-row justify-center w-full lg:w-[54%]">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Enter your Email"
                    className="w-full md:w-[78%] py-2 px-4 rounded-2xl"
                  />
                  <Button variant="text" className="w-full md:w-auto text-primaryText border  min-w-[126px]  ">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
