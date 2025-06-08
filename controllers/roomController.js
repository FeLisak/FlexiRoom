const RoomModel = require("../models/roomModel");

const getAllRooms = async (req, res) => {
  try {
    const rooms = await RoomModel.getAllRooms();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getRoomById = async (req, res) => {
  try {
    const room = await RoomModel.getRoomById(req.params.id);
    if (room) {
      res.status(200).json(room);
    } else {
      res.status(404).json({ error: "Sala não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRoom = async (req, res) => {
  try {
    const room = await RoomModel.createRoom(req.body);
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateRoom = async (req, res) => {
  try {
    const room = await RoomModel.updateRoom(req.params.id, req.body);
    if (room) {
      res.status(200).json(room);
    } else {
      res.status(404).json({ error: "Sala não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteRoom = async (req, res) => {
  try {
    const deleted = await RoomModel.deleteRoom(req.params.id);
    if (deleted) {
      res.status(200).json({ message: "Sala deletada com sucesso" });
    } else {
      res.status(404).json({ error: "Sala não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllRooms,
  getRoomById,
  createRoom,
  updateRoom,
  deleteRoom,
};
