import express from 'express';
import { isAuthenticatedUser } from '../middlewares/auth';
import * as announcementCtrl from '../controllers/announcementController';
const router = express.Router();
router
  .route('/')
  .get(isAuthenticatedUser, announcementCtrl.get)
  .put(isAuthenticatedUser, announcementCtrl.updateMany)
  .delete(isAuthenticatedUser, announcementCtrl.deleteMany);
router
  .route('/:id')
  .delete(isAuthenticatedUser, announcementCtrl.remove)
  .put(isAuthenticatedUser, announcementCtrl.readOne);
export default router;
