const cloudinary = require('cloudinary').v2;

const uploadImage = async (image) => {
  // Configuration 
  cloudinary.config({
    cloud_name: "dhsocgdpi",
    api_key: "481661728744716",
    api_secret: "9K_6P4m6qAe_0dJJxv4CY60dhDE"
  });

  const res = await cloudinary.uploader.upload(image, {
    upload_preset: 'PROFILE_IMAGE',
    allowed_formats: ['png', 'jpg', 'jpeg', 'svg', 'webp']
  })

  return res.secure_url;
}
module.exports = uploadImage;