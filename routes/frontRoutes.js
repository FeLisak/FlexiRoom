const express = require("express");
const router = express.Router();
const path = require("path");
const { getRooms } = require("../services/roomService");
const { getBookings } = require("../services/bookingService");
const { getUsers } = require("../services/userService");
const ensureAuthenticated = require("../middleware/auth");
const ensureAdmin = require("../middleware/ensureAdmin");

router.get("/", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Login",
    content: path.join(__dirname, "../views/pages/login"),
    user: req.session.user || null,
  });
});

router.get("/login", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Login",
    content: path.join(__dirname, "../views/pages/login-with-password"),
    user: req.session.user || null,
    id,
    email,
  });
});

router.get("/password", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Login",
    content: path.join(__dirname, "../views/pages/password"),
    user: req.session.user || null,
    id,
    email,
  });
});

router.get("/my-reserved-rooms", ensureAuthenticated, async (req, res) => {
  try {
    const bookings = await getBookings();
    const rooms = await getRooms();

    res.render(path.join(__dirname, "../views/layout/main"), {
      pageTitle: "My Reserved Rooms",
      content: "../pages/myReservedRooms",
      user: req.session.user || null,
      bookings,
      rooms,
    });
  } catch (error) {
    res.render(path.join(__dirname, "../views/layout/main"), {
      pageTitle: "My Reserved Rooms",
      content: "../pages/myReservedRooms",
      user: req.session.user || null,
      bookings: [],
      rooms: [],
      error: "Erro ao carregar reservas.",
    });
  }
});

router.get("/rooms-to-reserve", ensureAuthenticated, async (req, res) => {
  try {
    const rooms = await getRooms();

    res.render(path.join(__dirname, "../views/layout/main"), {
      pageTitle: "Rooms To Reserve",
      content: "../pages/roomsToReserve",
      user: req.session.user || null,
      rooms,
    });
  } catch (error) {
    res.render(path.join(__dirname, "../views/layout/main"), {
      pageTitle: "Rooms To Reserve",
      content: "../pages/roomsToReserve",
      user: req.session.user || null,
      rooms: [],
      error: "Erro ao carregar salas.",
    });
  }
});

router.get(
  "/rooms-list",
  ensureAuthenticated,
  ensureAdmin,
  async (req, res) => {
    try {
      const rooms = await getRooms();

      res.render(path.join(__dirname, "../views/layout/main"), {
        pageTitle: "Dashboard",
        content: "../pages/roomsList",
        user: req.session.user || null,
        rooms,
      });
    } catch (error) {
      res.render(path.join(__dirname, "../views/layout/main"), {
        pageTitle: "Dashboard",
        content: "../pages/roomsList",
        user: req.session.user || null,
        rooms: [],
        error: "Error when loading rooms list.",
      });
    }
  }
);

router.get("/users", ensureAuthenticated, ensureAdmin, async (req, res) => {
  try {
    const users = await getUsers();

    res.render(path.join(__dirname, "../views/layout/main"), {
      pageTitle: "Users",
      content: "../pages/users",
      user: req.session.user || null,
      users,
    });
  } catch (error) {
    res.render(path.join(__dirname, "../views/layout/main"), {
      pageTitle: "Users",
      content: "../pages/users",
      user: req.session.user || null,
      users: [],
      error: "Error when loading users list.",
    });
  }
});

router.get("/components", (req, res) => {
  res.render(path.join(__dirname, "../views/layout/main"), {
    pageTitle: "Components",
    content: path.join(__dirname, "../views/pages/components"),
    user: req.session.user || null,
  });
});

module.exports = router;
