import { Request, Response } from 'express';
const router = require('express').Router();


// Get all recipes
router.get('/', (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.error((error as Error).message);
  }
})

// Create new recipe
router.post('/', (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.error((error as Error).message)
  }
})

// Update recipe
router.put('/:id', (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.error((error as Error).message)
  }
})

// Delete recipe
router.delete('/:id', (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.error((error as Error).message)
  }
})