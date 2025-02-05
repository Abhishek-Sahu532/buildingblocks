import { Button, Typography } from '@material-tailwind/react';

const SimpleNEasy = () => {
  return (
    <div className="flex flex-col items-center justify-start w-full gap-y-8 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-14">
      <div className="flex flex-col md:flex-row items-center gap-6 w-full">
        <div className="flex flex-col items-center md:items-start justify-start w-full md:w-1/2 gap-y-6">
          <Typography
            variant="h2"
            className="text-center md:text-left text-primaryText text-2xl sm:text-3xl md:text-4xl"
          >
            Simple & easy way to find your dream Appointment
          </Typography>
          <Typography variant="paragraph" className="text-center md:text-left text-secondaryText text-sm sm:text-base">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when our power of
            choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is
            to be welcomed.
          </Typography>
          <Button
            variant="text"
            className="font-semibold min-w-[138px] mx-auto md:mx-0 mt-4 text-primaryText border border-primaryText"
          >
            Get Started
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2">
          <img src="images/img_rectangle_18.png" alt="image_two" className="w-full h-auto object-cover rounded-lg" />
          <img src="images/img_rectangle_21.png" alt="image_three" className="w-full h-auto object-cover rounded-lg" />
          <img src="images/img_rectangle_19.png" alt="image_four" className="w-full h-auto object-cover rounded-lg" />
          <img src="images/img_rectangle_20.png" alt="image_five" className="w-full h-auto object-cover rounded-lg" />
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center gap-6 w-full">
        <img
          src="images/img_rectangle_20_589x521.png"
          alt="image_six"
          className="w-full md:w-1/2 object-cover rounded-lg"
        />

        <div className="flex flex-col items-center md:items-start justify-start w-full md:w-1/2 gap-y-6">
          <Typography
            variant="h3"
            className="text-center md:text-left text-primaryText text-xl sm:text-2xl md:text-3xl"
          >
            Best rated host on popular rental sites
          </Typography>
          <Typography variant="paragraph" className="text-center md:text-left text-sm sm:text-base text-primaryText">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. In a free hour, when our power of
            choice is untrammelled.
          </Typography>
          <div className="flex flex-col items-start w-full gap-3">
            <div className="flex items-center gap-3.5">
              <Typography variant="h5" className="!font-semibold text-sm sm:text-base text-secondaryText">
                Find excellent deals
              </Typography>
            </div>
            <div className="flex items-center gap-3.5">
              <Typography variant="h5" className="!font-semibold text-sm sm:text-base text-secondaryText">
                Friendly host & Fast support
              </Typography>
            </div>
            <div className="flex items-center gap-3.5">
              <Typography variant="h5" className="!font-semibold text-sm sm:text-base text-secondaryText">
                Secure payment system
              </Typography>
            </div>
          </div>
          <Button
            variant="text"
            className="font-semibold min-w-[134px] mx-auto md:mx-0 text-secondaryText text-md border border-secondaryText  mt-5"
          >
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SimpleNEasy;
