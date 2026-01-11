import { Router } from "express"
import { createUrlShort, testEndpoint } from "./controller/urlShortener.js";

const urlRoutes = Router()

urlRoutes.get("/", testEndpoint)
urlRoutes.post("/shorten", createUrlShort);

export default urlRoutes;