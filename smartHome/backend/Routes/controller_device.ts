// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import logic_device from '../Logic/logic_device';
import logic from '../Logic/logic_device';
//import Urls from '../Utils/urls';

// generic router 
const router_device = express.Router();

// gets information from DB
router_device.get("/all", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await logic_device.getAllDevices())
})

// sends information to DB
router_device.post("/", async (request: Request, response: Response, next: NextFunction) => {
  const device = request.body;
  response.status(201).json( await logic_device.addDevice(device))
})

// generic router 
router_device.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const id = +request.params.id;
  response.status(200).json(await logic_device.getDeviceById(id));
})

//update value 2 ways:
router_device.get("/:id/:value", async (request: Request, response: Response, next: NextFunction) => {
  const deviceId = +request.params.id;
  const deviceValue = +request.params.value;
  response.status(201).json(await logic_device.changeValue(deviceId, deviceValue));
})

router_device.put("/", async (request: Request, response: Response, next: NextFunction) => {
  const deviceId = +request.body;
  const deviceValue = +request.body;
  response.status(201).json(await logic_device.changeValue(deviceId, deviceValue));
})

router_device.get("/shutter/:value", async (request: Request, response: Response, next: NextFunction) => {
  
  const deviceValue = +request.params.value;
  response.status(201).json(await logic_device.updateShutter( deviceValue));
})
export default router_device;