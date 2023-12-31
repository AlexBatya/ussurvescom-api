import productControllers from "../controllers/product.controllers";
import express from 'express';

const router = express.Router();

router
    .route('/create')
    .post(productControllers.createProduct)
    .delete(productControllers.deleteProduct)
    .get(productControllers.getProducts)

export default router;