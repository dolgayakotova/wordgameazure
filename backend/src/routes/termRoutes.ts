import { Router } from "express";
import { TermController } from "../controllers/TermController";

const router = Router();

router.get("/", TermController.all);
router.get("/search", TermController.search);
router.get("/exam/:exam", TermController.exam);
router.get("/difficulty/:level", TermController.difficulty);

export default router;
