let fetch;
(async () => {
  fetch = (await import("node-fetch")).default;
})();

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000";

async function getRooms() {
  const apiRes = await fetch(`${API_BASE_URL}/api/v1/rooms`);
  if (!apiRes.ok) throw new Error("Erro ao buscar salas!");
  return apiRes.json();
}

module.exports = {
  getRooms,
};
