import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(cors());

app.use(helmet());

app.use(express.json());

app.use(morgan("dev"));

app.get("/health", (_, res) => {

    res.json({

        status: "ok",

        service: "Azure Terminology Trainer API"

    });

});

const PORT = 3001;

app.listen(PORT, () => {

    console.log(`API running on ${PORT}`);

});