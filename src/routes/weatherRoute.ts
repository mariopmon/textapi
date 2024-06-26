// import express from 'express';
// import { getName } from '../controllers/getName.js';
// import { validatelastName } from '../midleware/validators.js';

// const router = express.Router();

// router.get('/:firstName', validatelastName, getName);

// export default router;
import express from "express";
import { getWeatherData } from "../controllers/weatherControllers.js";
import { validateCityName } from "../midleware/validators.js";

// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:city", validateCityName, getWeatherData);

// We will export the router
export default router;
