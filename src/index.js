import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Video from './Components/Video';
import video from './video/video.mp4'
import poster from './img/poster2.png'

class VideoPlayer extends React.Component {
    render(){
        return(
            <div>
                <Video src={video} poster={poster}/>
            </div>
        );
    }
}
ReactDOM.render( <VideoPlayer/> , document.getElementsByClassName('sector-1')[0]);
