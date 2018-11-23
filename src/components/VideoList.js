import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const videosList = videos.map((video) => {
        return <VideoItem video={video} />
    });
    return (
        <div>
            {videos.length}
            {videosList}
        </div>
    )
}

export default VideoList;