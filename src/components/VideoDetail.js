import React from 'react';

const VideoDetail = ({ video }) => {
    if(!video) {
        return <div>loading</div>;
    }
    return (
        <div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>
                    {video.snippet.description}
                </p>
            </div>
        </div>
    )
}

export default VideoDetail;