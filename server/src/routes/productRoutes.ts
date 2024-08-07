import { Router } from "express";
import { getProducts } from "../controllers/productController";
import { createProduct } from "../controllers/productController";

const router = Router();
router.get("/", getProducts);

router.post("/", createProduct);

export default router;