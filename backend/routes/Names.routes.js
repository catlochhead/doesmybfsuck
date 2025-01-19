import express from 'express';
import { getNames, updateName, createName, deleteName } from '../controllers/Names.controllers.js'

const router = express.Router();

router.get("/", getNames);
router.post("/", createName);
router.put("/:id", updateName);
router.delete("/:id", deleteName);

export default router;