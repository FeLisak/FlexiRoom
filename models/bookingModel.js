const db = require("../config/db");

class Booking {
  static async getAllBookings() {
    const result = await db.query(
      "SELECT * FROM bookings ORDER BY start_date ASC"
    );
    return result.rows;
  }

  static async getBookingById(id) {
    const result = await db.query(
      "SELECT * FROM bookings WHERE booking_id = $1",
      [id]
    );
    return result.rows[0];
  }

  static async createBooking(data) {
    const result = await db.query(
      "INSERT INTO bookings (user_id, room_id, start_date, end_date) VALUES ($1, $2, $3, $4) RETURNING *",
      [data.user_id, data.room_id, data.start_date, data.end_date]
    );
    return result.rows[0];
  }

  static async updateBooking(id, data) {
    const result = await db.query(
      "UPDATE bookings SET user_id = $1, room_id = $2, start_date = $3, end_date = $4 WHERE booking_id = $5 RETURNING *",
      [data.user_id, data.room_id, data.start_date, data.password, id]
    );
    return result.rows[0];
  }

  static async deleteBooking(id) {
    const result = await db.query(
      "DELETE FROM bookings WHERE booking_id = $1 RETURNING *",
      [id]
    );
    return result.rowCount > 0;
  }

  static async getBookingsByRoomAndDate(roomId, date) {
    const result = await db.query(
      "SELECT * FROM bookings WHERE room_id = $1 AND DATE(start_date) = $2",
      [roomId, date]
    );
    return result.rows;
  }
}

module.exports = Booking;
