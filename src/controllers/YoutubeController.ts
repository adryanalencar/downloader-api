import { Request, Response } from "express";
import { YoutubeService } from "../services/youtube";

async function getVideoDetails(request: Request, response: Response){
    const id = request.params.watch;
    const video = await YoutubeService.getVideo(id);

    response.json({
        id: request.params.watch,
        video
    })
}

async function getDownloadOptions(request: Request, response: Response){
    const url = request.params.url;
    const video = await YoutubeService.getDownloadOptions(url);

    response.json({
        url,
        video
    })
}

export const YoutubeController = {
    getVideoDetails,
    getDownloadOptions
}