const express = require("express");
const helmet = require("helmet");

const app = express();
app.use(helmet());

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
