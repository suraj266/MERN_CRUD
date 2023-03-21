const cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const uploadImage = async (image) => {
  // Configuration 
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });

  const res = await cloudinary.uploader.upload(image, {
    upload_preset: 'PROFILE_IMAGE',
    allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'webp']
  })

  return res.secure_url;
}
module.exports = uploadImage;