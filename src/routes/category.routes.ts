import categoryControllers from '../controllers/category.controllers';
import express from 'express';

const router = express.Router();

router
    .route('/create')
    .get(categoryControllers.getCategorys)
    .post(categoryControllers.createCategory)
    .delete(categoryControllers.deleteCategory)

export default router;