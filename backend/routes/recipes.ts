import { Request, Response, Router } from 'express';
const recipesRouter = Router();

// Get all recipes
recipesRouter.get('/', (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.error((error as Error).message);
  }
})

// Create new recipe
recipesRouter.post('/', (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.error((error as Error).message)
  }
})

// Update recipe
recipesRouter.put('/:id', (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.error((error as Error).message)
  }
})

// Delete recipe
recipesRouter.delete('/:id', (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.error((error as Error).message)
  }
})

export default recipesRouter;