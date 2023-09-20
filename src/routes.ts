import express from 'express';
import ProductRoute from './routes/product.routes'
const router = express.Router();

router.use('/product', ProductRoute)

export default router;