import React from 'react';

class VideoName extends React.Component{
    render(){
        const value =  this.props.value;
        const nameText  = (<div id='video-name'>
                            <strong>Can't Have Everything</strong>
                          </div>);        
        return(
            value ? null : nameText 
        );
    }
}

export default VideoName;