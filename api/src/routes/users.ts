import express from 'express';
import { loginUser, logout, signupUser, dash, editUser, reqVerification } from '../controllers/userController';
const router = express.Router();


router.post('/register', signupUser);
router.post('/login', loginUser);
router.get('/logout', logout);
router.get('/dashboard', dash);
router.patch('/edit/:id', editUser);
router.post('/verify', reqVerification)

export default router;
