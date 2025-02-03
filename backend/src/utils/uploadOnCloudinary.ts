import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (path: string): Promise<UploadApiResponse | null> => {
  try {
    const response = await cloudinary.uploader.upload(path, { resource_type: "auto" });

    console.log("File is uploaded on Cloudinary:", response.secure_url);

    fs.unlinkSync(path); //  Remove the file after successful upload

    return response;
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);

    if (fs.existsSync(path)) {
      fs.unlinkSync(path); //  Ensure file is deleted even if upload fails
    }

    return null; //  Return `null` explicitly on failure
  }
};

export default uploadOnCloudinary;
