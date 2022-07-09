import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }

    const videoSrcUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="video-detail">
            <div className="ui embed">
                <iframe src={videoSrcUrl} title={video.snippet.title}></iframe>
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;
