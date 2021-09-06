import express, { Request, Response } from 'express';
const router = express.Router();

router.get('/api/users/currentuser', (req: Request, res: Response) => {
  res.send('workings');
});

export { router as currentUserRouter };
