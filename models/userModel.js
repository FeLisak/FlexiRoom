const db = require("../config/db");

class User {
  static async getAllUsers() {
    const result = await db.query("SELECT * FROM users ORDER BY id ASC");
    return result.rows;
  }

  static async getUserById(id) {
    const result = await db.query("SELECT * FROM users WHERE id = $1", [id]);
    return result.rows[0];
  }

  static async verifyUserCredentials(email, password) {
    const result = await db.query(
      "SELECT * FROM users WHERE email = $1 AND password = $2",
      [email, password]
    );
    return result.rows[0];
  }

  static async getUserByEmail(data) {
    const result = await db.query("SELECT * FROM users WHERE email = $1", [
      data.email,
    ]);
    return result.rows[0];
  }

  static async createUser(data) {
    const result = await db.query(
      "INSERT INTO users (name, lastname, email, cpf) VALUES ($1, $2, $3, $4) RETURNING *",
      [data.name, data.lastname, data.email, data.cpf]
    );
    return result.rows[0];
  }

  static async createPassword(password, id) {
    const result = await db.query(
      "UPDATE users SET password = $1 WHERE id = $2 RETURNING *",
      [password, id]
    );
    return result.rows[0];
  }

  static async updateUser(id, data) {
    const result = await db.query(
      "UPDATE users SET name = $1, lastname = $2, email = $3, cpf = $4, password = $5 WHERE id = $6 RETURNING *",
      [data.name, data.lastname, data.email, data.cpf, data.password, id]
    );
    return result.rows[0];
  }

  static async deleteUserById(id) {
    const result = await db.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    return result.rowCount > 0;
  }
}

module.exports = User;
