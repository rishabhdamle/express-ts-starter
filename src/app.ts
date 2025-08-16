import express from "express";

const app = express();

type Port = number;

const port: Port = 3000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
