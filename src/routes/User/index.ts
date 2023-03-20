import express, { RequestHandler } from 'express';

const router = express.Router();

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '../../controller/index';

router.get('/getUsers', (req, res): RequestHandler => getUsers(req, res));
router.get('/getUser/:id', (req, res): RequestHandler => getUser(req, res));
router.post('/create', (req, res): RequestHandler => createUser(req, res));
router.post('/update', (req, res): RequestHandler => updateUser(req, res));
router.delete(
  '/delete/:id',
  (req, res): RequestHandler => deleteUser(req, res),
);

export default router;
