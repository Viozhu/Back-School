import express, { Request, Response } from 'express';

import { addFamilyMember, deleteFamilyMember } from '../../controller/index';

const router = express.Router();

router.post(
  '/add',
  async (req: Request, res: Response) => await addFamilyMember(req, res),
);

router.delete(
  '/delete/:id',
  async (req: Request, res: Response) => await deleteFamilyMember(req, res),
);

export default router;
