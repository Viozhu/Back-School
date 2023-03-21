import express, { Request, Response } from 'express'

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
} from '../../controller/index'

const router = express.Router()

router.get(
  '/getUsers',
  async (req: Request, res: Response) =>
    await getUsers(req, res)
)
router.get(
  '/getUser/:id',
  async (req: Request, res: Response) => await getUser(req, res)
)
router.post(
  '/create',
  async (req: Request, res: Response) =>
    await createUser(req, res)
)
router.post(
  '/update',
  async (req: Request, res: Response) =>
    await updateUser(req, res)
)
router.delete(
  '/delete/:id',
  async (req: Request, res: Response): Promise<void> =>
    await deleteUser(req, res)
)

export default router
