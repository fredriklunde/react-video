import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    return (
        <div>
            {videos.length}
        </div>
    )
}

export default VideoList;