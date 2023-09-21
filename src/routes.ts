import express from 'express';

import productRoute from './routes/product.routes';
import categoryRoute from './routes/category.routes';
import newsRoute from './routes/news.routes';

const router = express.Router();

router.use('/product', productRoute);
router.use('/category', categoryRoute);
router.use('/news', newsRoute);

export default router;