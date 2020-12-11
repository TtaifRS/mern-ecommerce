import express from 'express';
import {
  authUser,
  userProfile,
  registerUser,
  updateProfile,
} from '../controllers/userController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
router.route('/profile').get(protect, userProfile).put(protect, updateProfile);

export default router;
