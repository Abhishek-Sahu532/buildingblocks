import { Typography } from '@material-tailwind/react';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full max-w-[1010px] mx-auto mt-11 px-4">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-6 lg:justify-between">
        <img
          src="images/img_rectangle_5591.png"
          alt="image_seven"
          className="w-full lg:w-1/2 object-cover rounded-lg"
        />
        <div className="flex flex-col items-start justify-start w-full lg:w-1/2 gap-6 p-4 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start gap-2">
            <Typography variant="h2" className="tracking-[-0.56px]">
              Taylor Wilson
            </Typography>
            <Typography variant="h3" className="font-semibold">
              Product Manager - Static Mania
            </Typography>
          </div>
          <Typography variant="h4" className="text-gray-700 font-semibold leading-[165%]">
            Eget eu massa et consectetur. Mauris donec. Leo a, id sed duis proin sodales. Turpis viverra diam porttitor
            mattis morbi ac amet. Euismod commodo. We get you customer relationships that last.
          </Typography>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex flex-row justify-between w-full mt-8 px-6">
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <img src="images/img_icon_24px_v_gray_600.svg" alt="prev_icon" className="h-6 w-6" />
          <Typography variant="h2" className="text-gray-600">
            Previous
          </Typography>
        </div>
        <div className="flex flex-row items-center gap-2 cursor-pointer">
          <Typography variant="h3" className="text-orange-500">
            Next
          </Typography>
          <img src="images/img_icon_24px_v.svg" alt="next_icon" className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
