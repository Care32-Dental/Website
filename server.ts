import express from "express";
import dotenv from "dotenv";
import { routes } from "./src/routes";

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use("/api/v1", routes)

//Middlewares
app.use(express.json());

//server
app.listen(port, (err) => {
  if (err) {
    console.error("Error starting the server");
    return;
  }
  console.log(`Server running on port ${port}`);
});
