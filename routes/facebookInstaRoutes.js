import express from "express";
import { handleFacebookInstaDownload } from "../controllers/facebookInstaController.js";

const router = express.Router();

router.get("/download", handleFacebookInstaDownload);

export default router;
