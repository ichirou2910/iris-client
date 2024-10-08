import express, { Express } from "express";
import dotenv from "dotenv";
import { configureRouting } from "./routes";

dotenv.config();
dotenv.config({ path: ".env.local" });

const app: Express = express();
const port = process.env.PORT;

configureRouting(app);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
