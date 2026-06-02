import express from 'express';
import ReviewsCtrl from './reviews.controller.js';

const router = express.Router();

router.route("/movie/:id").get((req, res, next) => ReviewsCtrl.apiGetReviews(req, res, next));
router.route("/new").post((req, res, next) => ReviewsCtrl.apiPostReview(req, res, next));
router.route("/:id")
    .get((req, res, next) => ReviewsCtrl.apiGetReviewById(req, res, next))
    .put((req, res, next) => ReviewsCtrl.apiUpdateReview(req, res, next))
    .delete((req, res, next) => ReviewsCtrl.apiDeleteReview(req, res, next))

export default router;