import { Router } from "express";
import { getSearchResults } from "../controllers/search";

const router: Router = Router();

router.get("/search/:searchKey", getSearchResults);

export default router;
