import express from "express";
import * as diaryServices from '../services/diaryServices'

const router = express();

router.get("/", (_req, res) => {
  res.send(diaryServices.getEntriesWithoutSensitiveInfo());
});

router.post("/", (_req, res) => {
  res.send("Salving a directory!");
});

export default router;
