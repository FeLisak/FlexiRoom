const BookingModel = require("../models/bookingModel");

const getAllBookings = async (req, res) => {
  try {
    const result = await BookingModel.getAllBookings();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBookingById = async (req, res) => {
  try {
    const result = await BookingModel.getBookingById(req.params.id);
    if (result) {
      res.status(200).json(booking);
    } else {
      res.status(404).json({ error: "Reserva não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createBooking = async (req, res) => {
  try {
    const result = await BookingModel.createBooking(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBooking = async (req, res) => {
  try {
    const result = await BookingModel.updateBooking(req.params.id, req.body);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Reserva não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const result = await BookingModel.deleteBooking(req.params.id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "Reserva não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBookingsByRoomAndDate = async (req, res) => {
  try {
    const { roomId, date } = req.query;
    if (!roomId || !date) {
      return res.status(400).json({ error: "roomId and date are required" });
    }
    const bookings = await BookingModel.getBookingsByRoomAndDate(roomId, date);
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
  getBookingsByRoomAndDate,
};
