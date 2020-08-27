const cloudinary = require("cloudinary")

cloudinary.config({ 
    cloud_name: "dyebgieff", 
    api_key: "885263469914134", 
    api_secret: "MAiOJaZKVr9jddndvAbTUoAnEo8"
  });
  
  exports.uploads = (file,folder) => {
      return new Promise(resolve => {
          cloudinary.uploader.upload(file,(result) => {
              resolve({
                  url:result.url,
                  id:result.public_id
              })
          },{
              resource_type:"auto",
              folder:folder
          })
      })
  }