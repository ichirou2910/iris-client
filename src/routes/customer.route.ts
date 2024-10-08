import express from 'express';
import { get, list } from "../controllers/customer/customer.controller"

const router = express.Router();

router.get("/list", list);
router.get("/get/:customerId", get);

export default router;
