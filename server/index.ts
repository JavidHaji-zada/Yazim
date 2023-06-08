import "module-alias/register";
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./src/routes/routes";
import { Config } from "./src/config";
import cors from "cors";
import { ErrorHandler } from "@utils/error-handler";

dotenv.config();
// DB config
Config.DBConfig.setupDBConnection();

const app: Express = express();

// cors options
const corsOptions = {
	origin: "http://localhost:8081",
};

// parse body
app.use(cors(corsOptions));
app.use(express.json());
app.use("/v1", routes);

app.use(ErrorHandler.logErrors);
app.use(ErrorHandler.clientErrorHandler);
app.use(ErrorHandler.errorHandler);

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
