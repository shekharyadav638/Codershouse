const RoomModel = require("../models/room-model");

class RoomService {
  async create(payload) {
    // Create a room
    console.log("Room Service is creating");
    const { topic, roomType, ownerId } = payload;
    const room = await RoomModel.create({
      topic,
      roomType,
      ownerId,
      speakers: [ownerId],
    });
    return room;
  }

  async getAllRooms(types) {
    const rooms = await RoomModel.find({ roomType: { $in: types } })
      .populate("speakers")
      .populate("ownerId")
      .exec();
    return rooms;
  }

  async getRoomById(id) {
    const room = await RoomModel.findOne({ _id: id });
    return room;
  }
}

module.exports = new RoomService();
