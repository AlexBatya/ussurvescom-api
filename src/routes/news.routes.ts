import newsControllers from "../controllers/news.controllers";
import express from 'express';

const router = express.Router();

router
    .route('/create')
    .get(newsControllers.getNewses)
    .post(newsControllers.createNewses)
    .delete(newsControllers.deleteNewses)

router
    .route('/create-getNews')
    .get(newsControllers.getNews)

export default router;