// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import logic_scenario from '../Logic/logic_scenario';
import Urls from '../Utils/urls';

// generic router 
const router_scenario = express.Router();

//get all
router_scenario.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await logic_scenario.getAllScenario())
})

// add
router_scenario.post("/", async (request: Request, response: Response, next: NextFunction) => {
  const device = request.body;
  response.status(201).json( await logic_scenario.addScenario(device))
})

//get by id
router_scenario.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const id = +request.params.id;
  response.status(200).json(await logic_scenario.getScenarioById(id));
})
//update
router_scenario.put("/", async (request: Request, response: Response, next: NextFunction) => {
    const device = request.body;
    response.status(200).json(await logic_scenario.updateScenario(device));
  })

export default router_scenario;