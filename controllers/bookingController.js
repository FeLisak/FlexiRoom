const db = require("../config/db");

const getAllBookings = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM bookings");
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getBookingById = async (req, res) => {
  try {
    const result = await db.query(
      "SELECT * FROM bookings WHERE booking_id = $1",
      [req.params.id]
    );
    const booking = result.rows[0];
    if (booking) {
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
    const { user_id, room_id, start_date, end_date } = req.body;
    const result = await db.query(
      "INSERT INTO bookings (user_id, room_id, start_date, end_date) VALUES ($1, $2, $3, $4) RETURNING *",
      [user_id, room_id, start_date, end_date]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateBooking = async (req, res) => {
  try {
    const { user_id, room_id, start_date, end_date } = req.body;
    const result = await db.query(
      "UPDATE bookings SET user_id = $1, room_id = $2, start_date = $3, end_date = $4 WHERE booking_id = $5 RETURNING *",
      [user_id, room_id, start_date, end_date, req.params.id]
    );
    const updatedBooking = result.rows[0];
    if (updatedBooking) {
      res.status(200).json(updatedBooking);
    } else {
      res.status(404).json({ error: "Reserva não encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const result = await db.query(
      "DELETE FROM bookings WHERE booking_id = $1 RETURNING *",
      [req.params.id]
    );
    const deletedBooking = result.rows[0];
    if (deletedBooking) {
      res.status(200).json(deletedBooking);
    } else {
      res.status(404).json({ error: "Reserva não encontrada" });
    }
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
};
