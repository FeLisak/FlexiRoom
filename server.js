//Packages
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to process JSON
app.use(express.json());

//Routes
const routes = require("./routes/index");
app.use("/", routes);

//Starts Server
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
