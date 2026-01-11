import { Router } from "express"
import { getUrls, createUrlShort, redirectToUrl } from "./controller/urlShortener.js";

const urlRoutes = Router()

urlRoutes.get("/", getUrls)
urlRoutes.post("/shorten", createUrlShort)
urlRoutes.get("/:short", redirectToUrl)

export default urlRoutes;