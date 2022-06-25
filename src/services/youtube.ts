import fetch from 'node-fetch';
import { Video } from '../models/video';
import { YoutubeDlUtils } from '../utils/youtube_dl';
import { FirestoreService } from './firebase';

async function getVideo(id:string){

    // check if content exists in Firestore
    const video = await FirestoreService.getData('videos', id);
    
    if(video){
        return video;
    }

    var response = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=id&part=snippet&part=contentDetails&id=${id}&key=${process.env.YOUTUBE_API_KEY}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    var data = await response.json() as Video;
    await FirestoreService.saveData('videos', data.items[0], id);
    
    return data.items[0];
}

async function getDownloadOptions(url: string){
    return await YoutubeDlUtils.getVideo(url);
}

export const YoutubeService = {
    getVideo,
    getDownloadOptions
}