import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


const uploadOnCloudinary = async (path) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDIANRY_CLOUD_NAME,
      api_key: process.env.CLOUDIANRY_API_KEY,
      api_secret: process.env.CLOUDIANRY_API_SECRET,
    });

    const response = await cloudinary.uploader
      .upload(path, {
        resource_type: "auto",
      })
      .catch((error) => console.log(error));
    console.log("File is uploaded on cloudinary");
    fs.unlinkSync(path); //deleting file after uploading on cloudinary
    return response;
  } catch (error) {
    fs.unlinkSync(path); //remove the locally saved temp file as the upload operation got failed
    return null;
  }
};

export default uploadOnCloudinary