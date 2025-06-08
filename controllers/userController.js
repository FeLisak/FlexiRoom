const UserModel = require("../models/userModel");
const path = require("path");

const UserController = {
  async getAllUsers(req, res) {
    try {
      const user = await UserModel.getAllUsers();
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao listar usuários!" });
    }
  },

  async getUserById(req, res) {
    try {
      const user = await UserModel.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
      }
      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao obter o usuário!" });
    }
  },

  async getUserByEmail(req, res) {
    try {
      const { email } = req.body;
      const user = await UserModel.getUserByEmail({ email });
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
      }
      req.session.user = {
        id: user.id,
        name: user.name,
        surname: user.lastname,
        email: user.email,
        isAdmin: user.isadmin,
      };
      if (user.password == null) {
        req.session.passwordUser = {
          email: user.email,
          id: user.id,
        };
        return res.render(path.join(__dirname, "../views/layout/main"), {
          pageTitle: "Login",
          content: path.join(__dirname, "../views/pages/password"),
          user: req.session.user || null,
          id: req.session.passwordUser?.id,
          email: req.session.passwordUser?.email,
        });
      }
      return res.render(path.join(__dirname, "../views/layout/main"), {
        pageTitle: "Login",
        content: path.join(__dirname, "../views/pages/login-with-password"),
        user: req.session.user || null,
        id: user.id,
        email: user.email,
        isAdmin: req.session.user?.isAdmin,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao obter o usuário!" });
    }
  },

  async createUser(req, res) {
    try {
      const updatedUser = await UserModel.createUser(req.body);
      return res.status(201).json(updatedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao criar o usuário!" });
    }
  },

  async createPassword(req, res) {
    try {
      const { password, confirmPassword } = req.body;
      const id = req.session.user?.id;
      const email = req.session.user?.email;

      if (password !== confirmPassword) {
        return res.render("createPassword", {
          error: "As senhas não coincidem!",
          email,
          id,
        });
      } else {
        const updatedUser = await UserModel.createPassword(password, id);
        return res.render(path.join(__dirname, "../views/layout/main"), {
          pageTitle: "Login",
          content: path.join(__dirname, "../views/pages/login-with-password"),
          user: req.session.user || null,
          id: req.session.passwordUser?.id,
          email: updatedUser.email,
        });
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Erro ao criar a senha do usuário!" });
    }
  },

  async verifyUserCredentials(req, res) {
    try {
      const { email, password } = req.body;
      const user = await UserModel.verifyUserCredentials(email, password);

      if (!user) {
        return res.render("login", {
          error: "Usuário ou senha inválidos!",
          email,
        });
      }

      if (user.isadmin) {
        return res.redirect("/users");
      } else {
        return res.redirect("/rooms-to-reserve");
      }
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ error: "Erro ao verificar as credenciais do usuário!" });
    }
  },

  async updateUser(req, res) {
    try {
      const updatedUser = await UserModel.updateUser(req.params.id, req.body);
      return res.status(201).json(updatedUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao editar o usuário!" });
    }
  },

  async deleteUserById(req, res) {
    try {
      const user = await UserModel.deleteUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ error: "Usuário não encontrado!" });
      }
      return res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao deletar o usuário!" });
    }
  },
};

module.exports = UserController;
