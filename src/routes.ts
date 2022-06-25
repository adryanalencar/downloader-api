import { Response, Request, Router } from "express";
import { YoutubeController } from "./controllers/YoutubeController";

const router = Router();

router.get("/", (request : Request, response: Response) => {
    response.json({
        message: "Hello World",
        author: "Adryan Alencar <adryan.alencar@sevenfox.com.br>"
    })
})

router.get('/youtube/:watch', YoutubeController.getVideoDetails)
router.get('/youtube', YoutubeController.getDownloadOptions)

export {
    router
}
