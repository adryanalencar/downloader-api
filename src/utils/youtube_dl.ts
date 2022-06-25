import youtubedl from 'youtube-dl-exec'

async function getVideo(url: string){
    const subprocess = await youtubedl(url, {
        dumpSingleJson: true
    })

    return subprocess
}

export const YoutubeDlUtils = {
    getVideo
}
