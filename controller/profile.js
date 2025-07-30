import ErrorHandler from "../error/error.js";
import Profile from "../models/profileSchema.js";

export const sendProfile = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(new ErrorHandler("Please fill the full form!", 400));
  }

  try {
    await Profile.create({ firstName, lastName, email, phone, date, time });
    res.status(201).json({
      success: true,
      message: "Profile created successfully"
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationMessages = Object.values(error.errors).map((err) => err.message);
      return next(new ErrorHandler(validationMessages.join(", "), 400));
    } else {
      // Generic server error
      return next(new ErrorHandler(error.message || "Server error", 500));
    }
  }
};
