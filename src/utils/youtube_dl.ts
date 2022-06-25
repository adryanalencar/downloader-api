import youtubedl from 'youtube-dl-exec'

async function getVideo(url: string){
    const subprocess = await youtubedl('https://www.youtube.com/watch?v=6xKWiCMKKJg', {
        dumpSingleJson: true
    })

    return subprocess
}

export const YoutubeDlUtils = {
    getVideo
}
