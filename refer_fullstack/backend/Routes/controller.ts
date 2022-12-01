// All the routes that connect the the DB and client.
import express, {NextFunction, Request, Response} from 'express';
import customerLogic from '../Logic/customerLogic';


// generic router 
const router = express.Router();

router.get("/allrefers", async (request: Request, response: Response, next: NextFunction) => {
    console.log("rest test");
    response.status(200).json(await customerLogic.getAllRefers());
})

router.get("/", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json("controller working");
})

// gets information from DB
router.get("/all", async (request: Request, response: Response, next: NextFunction) => {
  response.status(200).json( await customerLogic.getAllCustomers())
})

//get single student
router.get("/:id", async (request: Request, response: Response, next: NextFunction) => {
    const id = +request.params.id;
    response.status(200).json( await customerLogic.getSingleCustomer(id));
})

// sends information to DB
router.post("/add", async (request: Request, response: Response, next: NextFunction) => {
  const body = request.body;
  response.status(201).json( await customerLogic.addCustomer(body))
})

// delete information from DB
router.delete("/:id", async (request: Request, response: Response, next: NextFunction) => {
  const id = +request.params.id;
  response.status(204).json( await customerLogic.deleteCustomer(id))
})


export default router;