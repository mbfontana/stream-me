import express from "express";
import { authController } from "./controllers/authController";
import { categoryController } from "./controllers/categoryController";
import { courseController } from "./controllers/courseController";
import { episodeController } from "./controllers/episodeController";

const router = express.Router();

router.post("/auth/register", authController.register);
router.post("/auth/login", authController.login);

router.get("/categories", categoryController.index);
router.get("/categories/:id", categoryController.courses);

router.get("/courses/featured", courseController.featured);
router.get("/courses/search", courseController.search);
router.get("/courses/releases", courseController.releases);
router.get("/courses/:id", courseController.episodes);

router.get("/episodes/stream", episodeController.stream);

export { router };
