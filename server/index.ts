import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import routes from "./src/routes/routes";
import { Config } from "./src/config";
import cors from "cors";

dotenv.config();
// DB config
Config.DBConfig.setupDBConnection();

const app: Express = express();
const port = process.env.PORT;

// cors options
var corsOptions = {
	origin: "http://localhost:8081",
};

// parse body
app.use(cors(corsOptions));
app.use(express.json());
app.use("", routes);

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
