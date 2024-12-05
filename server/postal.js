import { Router } from "express";
/* Import controller */
import postalController from "./postal.controller.js";

const router = Router();
router.route('/').post(postalController);


export default router;