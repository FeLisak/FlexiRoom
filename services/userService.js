let fetch;
(async () => {
  fetch = (await import("node-fetch")).default;
})();

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3000";

async function getUsers() {
  const apiRes = await fetch(`${API_BASE_URL}/api/v1/users`);
  if (!apiRes.ok) throw new Error("Erro ao buscar usuários!");
  return apiRes.json();
}

module.exports = {
  getUsers,
};
