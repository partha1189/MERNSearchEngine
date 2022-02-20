import { Router } from "express";
import { getSearchResults, addSearchItem } from "../controllers/search";

const router: Router = Router();

router.get("/search/:searchKey", getSearchResults);
router.post("/search/add", addSearchItem);

export default router;
