import { Request, Response, Router } from "express";
import { CMF } from "../db/seeds/orders";
import getRandomOrder from "../queries/orders";

const ordersRouter = Router();

// Get random oder
ordersRouter.get("/", async(req: Request, res: Response) => {
  try {
    const orderResult = await getRandomOrder(CMF);
    res.status(200).json(orderResult);
  } catch (error) {
    console.error((error as Error).message);
    res.status(500).send("Server error");
  }
});

export default ordersRouter;
