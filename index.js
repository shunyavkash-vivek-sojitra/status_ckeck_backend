import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/status", (_, res) => {
  const states = ["healthy", "warning"];
  const status = states[Math.floor(Math.random() * states.length)];
  res.json({ status });
});

app.listen(5000, () => console.log("Backend running on 5000"));
