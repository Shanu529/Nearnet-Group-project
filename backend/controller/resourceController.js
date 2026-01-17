



import resourceModel from "../model/resourceModel.js";


const defaultImg = "https://www.thewall360.com/uploadImages/ExtImages/images1/def-638240706028967470.jpg"
export const createResource = async (req, res) => {

  try {
    const { title, description, type, priority, images } = req.body;

    // validate inout from user
    if (!title || !description || !type) {
      return res.status(400).json({
        message: "All Data are required"
      });
    }

    //  varify type inout
    if (!["offer", "request"].includes(type)) {
      return res.status(400).json({
        message: "Type must be offer or request"
      });
    }

    // get user from the middlerware
    const userId = req.user.userId;
    const location = req.user.location;


    if (!userId) {
      return res.status(404).json({
        message: "user not found"
      });
    }

    const finalImages = Array.isArray(images) && images.length > 0 ? images : [defaultImg]

    // create resource 
    const resource = await resourceModel.create({
      title,
      description,
      type,
      priority,
      images: finalImages,
      userId: userId,
      location: location,
    })

    res.status(201).json({
      message: "Resource created successfully",
      resource,
    });

  } catch (error) {
    console.error("Create Resource Error:", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}