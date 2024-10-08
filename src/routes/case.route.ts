import express from 'express';
import { list } from "../controllers/case/case.controller"

const router = express.Router();

router.get("/list", list);

export default router;
