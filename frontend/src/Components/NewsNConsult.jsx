import { Typography } from '@material-tailwind/react';

const NewsNConsult = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full px-6 lg:px-14 py-12 lg:py-20">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex flex-col justify-start items-center gap-6">
            <Typography variant="h2" className="text-white tracking-[-0.72px]">
              News & Consult
            </Typography>
          </div>
          <div className="flex flex-row justify-start items-center gap-2">
            <Typography variant="h3" className="mt-0.5 text-orange-700">
              Explore All
            </Typography>
            <img src="images/img_icon_24px_v.svg" alt="explore_all_icon" className="h-6 w-6" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {[
            {
              img: 'images/img_image_350x384.png',
              title: '9 Easy-to-Ambitious DIY Projects to Improve Your Home',
              alt: 'diy_projects'
            },
            {
              img: 'images/img_image_6.png',
              title: 'Serie Shophouse Launch In July, Opportunity For Investors',
              alt: 'shophouse_launch'
            },
            {
              img: 'images/img_image_7.png',
              title: 'Looking for a New Place? Use This Time to Create Your Wishlist',
              alt: 'new_place_wishlist'
            }
          ].map((article, index) => (
            <div key={index} className="flex flex-col items-center justify-start gap-6">
              <img src={article.img} alt={article.alt} className="w-full object-cover rounded-lg" />
              <div className="flex flex-col items-center justify-start gap-3">
                <Typography
                  variant="h4"
                  className="text-primaryText tracking-[-0.48px] overflow-hidden text-ellipsis  "
                >
                  {article.title}
                </Typography>
                <div className="flex flex-row items-center justify-start gap-2">
                  <Typography variant="h5" className="mt-px text-deep-orange-400">
                    Read the Article
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsNConsult;
