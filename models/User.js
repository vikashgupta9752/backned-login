import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  // 🔥 Added for reset password functionality
  resetToken: {
    type: String,
  },

  resetTokenExpire: {
    type: Date,
  }
});

export default mongoose.model("User", userSchema);
