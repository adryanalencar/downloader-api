import { Request, Response } from "express";
import url from 'url'
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
    const videoUrl = url.parse(request.url, true);
    const video = await YoutubeService.getDownloadOptions(videoUrl.query.url as string);

    response.json({
        url: videoUrl.query.url,
        video
    })
}

export const YoutubeController = {
    getVideoDetails,
    getDownloadOptions
}