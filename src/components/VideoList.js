import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({
    videos,
    onVideoSelect
}) => {
    const videosList = videos.map(video => (
        <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect} />
    ));
    return (
        <div className='video-list ui relaxed divided list'>
            {videosList}
        </div>
    )
}

export default VideoList;
