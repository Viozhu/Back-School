import express, { Request, Response } from 'express';

import {
  addStudentsToRoom,
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  deleteStudentsToRoom,
} from '../../controller/index';

const router = express.Router();

router.get(
  '/getRooms',
  async (req: Request, res: Response) => await getRooms(req, res),
);
router.get(
  '/getRoom/:id',
  async (req: Request, res: Response) => await getRoom(req, res),
);
router.post(
  '/create',
  async (req: Request, res: Response) => await createRoom(req, res),
);
router.post(
  '/update',
  async (req: Request, res: Response) => await updateRoom(req, res),
);
router.delete(
  '/delete/:id',
  async (req: Request, res: Response): Promise<void> =>
    await deleteRoom(req, res),
);

router.post(
  '/addStudents',
  async (req: Request, res: Response): Promise<void> =>
    await addStudentsToRoom(req, res),
);

router.post(
  '/deleteStudents',
  async (req: Request, res: Response): Promise<void> =>
    await deleteStudentsToRoom(req, res),
);
export default router;
