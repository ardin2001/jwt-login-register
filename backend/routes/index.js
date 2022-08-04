import express from "express";
import {GetUsers,Register} from "../controllers/User.js";
const router = express.Router();

router.get('/users',GetUsers);
router.post('/users',Register);

export default router;