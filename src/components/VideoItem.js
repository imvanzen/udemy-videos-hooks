import './VideoItem.css';

import React from "react";

const VideoItem = ({
    video,
    onVideoSelect
}) => {
    const {
        snippet: {
            title,
            thumbnails
        }
    } = video;

    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" src={thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    )
}

export default VideoItem;
