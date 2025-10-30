import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  created_by: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // user who created the room
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // optional: list of users in the room
}, { timestamps: true });

// Check if the model already exists before creating
const Room = mongoose.models.Room || mongoose.model("Room", roomSchema);

export default Room;
