// models/Profile.js
import mongoose from "mongoose";
import validator from "validator";


const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "Minimum 3 characters"],
    maxLength: [30, "Maximum 30 characters"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [3, "Minimum 3 characters"],
    maxLength: [30, "Maximum 30 characters"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Must be exactly 10 numbers"],
    maxLength: [10, "Must be exactly 10 numbers"],
  },
  time: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile;
