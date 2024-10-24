import express from 'express';
import { getWeatherSummary } from '../controllers/weather.controller.js';
const router = express.Router();

router.route('/summary').get(getWeatherSummary);

export default router
