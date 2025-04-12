import express from 'express';
import { 
    appAdminSignUp,
    appAdminSignIn,
    getappAdminProfile,
    updateappAdminProfile,
    appAdminchangePassword,
    // appAdmindeleteUserProfile
} from '../controller/appAdmin.Controller.js';
import { AppAdminprotect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', appAdminSignUp);
router.post('/login', appAdminSignIn);
router.get('/getadminprofile', AppAdminprotect, getappAdminProfile);
router.put('/updateprofile', AppAdminprotect, updateappAdminProfile);
router.put('/changepassword', AppAdminprotect, appAdminchangePassword);
// router.delete('/deleteprofile', AppAdminprotect, appAdmindeleteUserProfile);

export default router;