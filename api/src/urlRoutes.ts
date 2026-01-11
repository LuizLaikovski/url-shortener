import { Router } from "express"
import { getUrls, createUrlShort, redirectToUrl } from "./controller/urlShortener.js";
import { apiKeyGuard } from "./middlewares/apiKey.middleware.js";

const urlRoutes = Router()
urlRoutes.get("/:short", redirectToUrl)
urlRoutes.use(apiKeyGuard);

urlRoutes.get("/", getUrls)
urlRoutes.post("/shorten", createUrlShort)

export default urlRoutes;