import React from 'react';

const VideoDetail = ({ video }) => {
    return (
        <div>
            {video.snippet.title}
        </div>
    )
}

export default VideoDetail;