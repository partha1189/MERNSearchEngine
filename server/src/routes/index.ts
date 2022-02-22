import { Router } from "express";
import {
  getSearchResults,
  addSearchItem,
  getSearchResult,
} from "../controllers/search";

const router: Router = Router();

router.get("/search/:searchKey", getSearchResults);
router.get("/search/item/:id", getSearchResult);
router.post("/search/add", addSearchItem);

export default router;
