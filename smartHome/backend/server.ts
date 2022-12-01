// Main file in the SERVER 
import cors from "cors";
import express from "express";
import ErrorHandler from "./MiddleWare/route-not-found";
import controller_device from "./Routes/controller_device";
import controller from "./Routes/controller_device"
import controller_scenario from "./Routes/controller_scenario";
import mysql_init from "./sql/init";
import config from "./Utils/config";

mysql_init();
const server = express();
const currentPort = config.port;
server.use(cors());
server.use(express.json());
server.use("/scenario", controller_scenario);
server.use("/device", controller_device);
server.use("*", ErrorHandler);

server.listen(currentPort, () => {console.log(`listening on http://localhost:${currentPort}`)} )