import React from 'react';
import VideoName from './VideoName.js';
import SocialMedia from './SocialMedia.js';
import AccountArea from './AccountArea.js';
import TimePassed from  './TimePassed';
import TimeLast from  './TimeLast';


class Video extends React.Component{
    constructor(props){
        super(props);
        this.state = {play:false, muted: true, fullscreen: true, value:0, volume:0};
    }

    playOrStopOnCLick = () => {
        this.setState({play: !this.state.play});
        this.state.play ? this.videoPlayer.pause() : this.videoPlayer.play();
    }

    muteOnCick = () => {
        this.setState({muted: !this.state.muted});  
        this.state.muted ? this.videoPlayer.muted = true : this.videoPlayer.muted = false;
    }

    fullOnClick = () => {
        this.setState({fullscreen: !this.state.fullscreen});
        this.videoPlayer.webkitRequestFullscreen();
    }

    leftOnClick = () => {
        this.videoPlayer.currentTime = this.videoPlayer.currentTime - 5;
    }

    rightOnClick = () => {
        this.videoPlayer.currentTime = this.videoPlayer.currentTime + 5;
    }
 
    onProgressBarChange = () => {
        const video = this.videoPlayer;
        const progressBar = document.getElementById('progress-bar');
        let currentTime = video.duration * ( progressBar.value / 100 );
        video.currentTime = currentTime;
    }

    onTimeUpdate = () => {
        const video = this.videoPlayer;
        const progressBar = document.getElementById('progress-bar');
        let value = (100 / video.duration ) * video.currentTime;
        const progress = document.getElementById('progress');
        progressBar.value = this.state.value;
        progress.style.width = progressBar.value + '%';
        this.setState({value: value});
    }

    onVolumeChange = () =>{
        const video = this.videoPlayer;
        const volumeBar = document.getElementById('volume-bar');
        const volumeProgress = document.getElementById('volume');
        video.volume = volumeBar.value;
        volumeProgress.style.width = volumeBar.value * 100 + '%';
    }

    
    render(){
        const {src, poster} = this.props;
        const muteButton = <button id='mute' onClick={this.muteOnCick} ></button>;
        const noMuteButton = <button id='noMute' onClick={this.muteOnCick} ></button>;
        const playButton = <button id='play' onClick={this.playOrStopOnCLick}></button>;
        const pauseButton  = <button id='pause' onClick={this.playOrStopOnCLick}></button>;
        return(
            <div>
                <video className='video' onTimeUpdate={this.onTimeUpdate} ref={ref => this.videoPlayer = ref} src={src} id='video' poster={poster}></video>
                <div className="wrapper">
                    <div className="upper-wrapper">
                        <AccountArea/>
                        <SocialMedia/>
                    </div>
                    <div className="middle-wrapper">
                        < VideoName  value={this.state.value}/>
                    </div>
                    <div className="lower-wrapper">
                        <div className="video-controls" id='video-controls' >
                            <div className="controls-area">
                                <div className="upper-area">
                                    <div className="video-time">
                                        <div className="video-time-passed">
                                            <div className="time-passed"><TimePassed/></div>
                                        </div>
                                        <div className="video-time-last">
                                            <div className="time-last"><TimeLast/></div>
                                        </div>
                                    </div>
                                    <input value={this.state.value} onClick={this.assSoFat} onChange={this.onProgressBarChange} type="range" id='progress-bar' min='0' max='100'/>
                                    <div id="progress-bar-fake">
                                        <div id="progress"></div>
                                    </div>
                                </div>
                                <div className="lower-area">
                                    <div className="tap-area first">
                                        <div className="mute-button-area">
                                            {this.state.muted ? muteButton : noMuteButton}
                                        </div>
                                        <input  onChange={this.onVolumeChange} type="range" id="volume-bar" min="0" max="1" step="0.1" />
                                        <div>
                                            <div id="volume-bar-fake">
                                                <div id="volume"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tap-area second">
                                        <div className="left-button-area">
                                            <button id='left' onClick={this.leftOnClick}></button>
                                        </div>
                                        <div className="play-button-area">
                                            {this.state.play ? pauseButton : playButton}
                                        </div>
                                        <div className="right-button-area">
                                            <button id='right' onClick={this.rightOnClick}></button>
                                        </div>
                                    </div>
                                    <div className="tap-area third">
                                        <div className="fullscreen-button-area">
                                            <button id='fullscreen' onClick={this.fullOnClick}></button>
                                        </div>    
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Video;

