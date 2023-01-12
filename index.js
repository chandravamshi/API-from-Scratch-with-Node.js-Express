const express = require("express");
const app = express();
const PORT = 8080;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`lisening ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("it is working");
});

app.get("/tshirt", (req, res) => {
  res.status(200).send({
    tshirt: "shirt baby",
    size: "large",
  });
});

app.post("/tshirt/:id", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;
  if (!logo) {
    res.status(418).send({ message: "send logo darling" });
  }

  res.status(200).send({ tshirt: `${logo} and ${id}` });
});
