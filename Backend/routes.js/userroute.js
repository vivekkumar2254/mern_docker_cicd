import express from 'express'
import { signup } from '../controller/usercontroller.js';
import { login } from '../controller/usercontroller.js';    
const router = express.Router();

router.post('/signup',signup)
router.post("/login",login)

export default router;
