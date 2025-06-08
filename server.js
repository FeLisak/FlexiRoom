require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./config/db");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views/pages"));
app.use(express.static(path.join(__dirname, "views/images")));
app.use(express.urlencoded({ extended: true }));

const session = require("express-session");
const pgSession = require("connect-pg-simple")(session);

app.use(
  session({
    store: new pgSession({
      pool: db.pool,
      tableName: "session",
    }),
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);

db.connect()
  .then(() => {
    console.log("[server] 🌐 Connected with PostgreSQL database!");

    app.use(express.json());
    app.use(express.static("views"));
    app.use("/css", express.static(path.join(__dirname, "views/css")));

    const frontendRoutes = require("./routes/frontRoutes");
    app.use("/", frontendRoutes);

    const apiRoute = "/api/v1/";

    const userRoutes = require("./routes/userRoutes");
    app.use(apiRoute + "users", userRoutes);

    const bookingRoutes = require("./routes/bookingRoutes");
    app.use(apiRoute + "bookings", bookingRoutes);

    const roomRoutes = require("./routes/roomRoutes");
    app.use(apiRoute + "rooms", roomRoutes);

    app.use((req, res, next) => {
      res.status(404).send("404 | Page not found!");
    });

    app.use((err, req, res, next) => {
      console.error(err.stack);
      res.status(500).send("500 | Server inside error!");
    });

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`[server] 🟢 Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("[server] 🔴 Failed to connect with the database:", err);
  });
