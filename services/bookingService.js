let fetch;
(async () => {
  fetch = (await import("node-fetch")).default;
})();

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000";

async function getBookings() {
  const apiRes = await fetch(`${API_BASE_URL}/api/v1/bookings`);
  if (!apiRes.ok) throw new Error("Erro ao buscar reservas!");
  return apiRes.json();
}

async function getBookingsByRoomAndDate(roomId, date) {
  const apiRes = await fetch(
    `${API_BASE_URL}/api/v1/bookings/by-room-date?roomId=${roomId}&date=${date}`
  );
  if (!apiRes.ok) throw new Error("Erro ao buscar reservas!");
  return apiRes.json();
}

module.exports = {
  getBookings,
  getBookingsByRoomAndDate,
};
