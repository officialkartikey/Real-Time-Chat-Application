import chatRoom from "../Models/Roommodel.js";
import User from "../Models/usermodel.js";
import Messages from "../Models/Messagemodel.js";

export const getMessagesByRoom = async (req, res) => {
    try {
        const { roomId } = req.params;

        const room = await chatRoom.findById(roomId);
        if(!room) return res.status(404).json({message: "Chat Room not found"});
    
        const messages = await Messages.find({room: roomId}).populate("sender", "username email").sort({createdAt: 1});
        
        res.status(200).json(messages);
    } catch(err) {
        console.error("Error fetching messages:", err);
        res.status(500).json({message:"Server Error"});
    }
};