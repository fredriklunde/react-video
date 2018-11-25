import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return (
            <div>
                loading
            </div>
        );
    }
    return (
        <div>
            {video.snippet.title}
        </div>
    )
}

export default VideoDetail;