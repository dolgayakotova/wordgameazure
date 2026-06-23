import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import routes from "./routes/termRoutes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

// Мидлвары
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// Роуты
app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/api/terms", routes);

// Обработка ошибок
app.use(errorHandler);

export default app;
