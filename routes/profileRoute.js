import express from 'express';
import { sendProfile } from '../controller/profile.js';

const router=express.Router();

router.post("/",sendProfile);



export default router;