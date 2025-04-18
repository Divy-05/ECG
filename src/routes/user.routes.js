import express from 'express';
import { 
  SignUp, 
  SignIn, 
  getUserProfile, 
  updateUserProfile,
  changePassword,
  // deleteUserProfile 
} from '../controller/user.Controller.js';

// GET PLANS
import {
  getAllPlans, 
  getPlanById, 
} from '../controller/plan.Controller.js';

// GET TEST
import {
  getAllTest,
  getTestById,
} from '../controller/test.Controller.js';

// Get Articles
import {
  getAllArticles,
  getArticleById
} from '../controller/article.Controller.js';

// HELP AND SUPPORT
import {
  getAllHelp,
  getHelpById,
} from '../controller/help.Controller.js';

import {protect} from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/signup', SignUp);
router.post('/signin', SignIn);
router.get('/getprofile', protect, getUserProfile);
router.put('/updateprofile', protect, updateUserProfile);
router.put('/changepassword', protect, changePassword);
// router.delete('/deleteprofile', protect, deleteUserProfile);

// GET Plan
router.get('/plan/getallplans', protect, getAllPlans);
router.get('/plan/getplan/:id', protect, getPlanById);

// Get Test 
router.get ('/test/getalltest', protect, getAllTest);
router.get ('/test/getById/:id', protect, getTestById);

// Get Articles
router.get ('/article/getAllArticles', protect, getAllArticles);
router.get ('/article/getById/:id', protect, getArticleById);

// HELP AND SUPPORT
router.get('/help/getAll', protect, getAllHelp);
router.get('/help/getById/:id', protect, getHelpById);

export default router;