import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {
    const [videos, search] = useVideos('')
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    return (
        <div className="app ui container">
            <SearchBar onTermSubmit={search} />
            <div className="ui stackable two column grid">
                <div className="eleven wide column">
                    <VideoDetail video={selectedVideo} />
                </div>
                <div className="five wide column">
                    <VideoList
                        onVideoSelect={setSelectedVideo}
                        videos={videos} />
                </div>
            </div>
        </div>
    )
}

export default App;
