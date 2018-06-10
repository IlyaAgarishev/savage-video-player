import React from 'react';


class TimePassed extends React.Component{
    constructor(props){
        super(props);
        this.state = {seconds:0, minutes:0};
    }

    increment(){
        let secondsFunction = function(){
            let secondsVar = Math.round(document.getElementById('video').currentTime);
            if( secondsVar >= 60 ){
                secondsVar = secondsVar - 60;
                if( secondsVar >= 60 ){
                    secondsVar = secondsVar - 60;
                    if( secondsVar >= 60 ){
                        secondsVar = secondsVar - 60;
                        if( secondsVar >= 60 ){
                            secondsVar = secondsVar - 60;
                        }
                    }
                }
            }
            return secondsVar;
        }
        let seconds = Math.round(document.getElementById('video').currentTime);
        let minutes = (seconds / 60).toString().split('.')[0];
        this.setState({seconds:secondsFunction() , minutes: minutes});
    }

    componentDidMount(){
        this.timerId = setInterval(() => this.increment(), 10);
    }

    componentWillUnmount(){
        clearInterval(this.timerId);
    }

    render(){
        return(
            <div>
                <span>{this.state.minutes >= 10 ? this.state.minutes : '0' + this.state.minutes}:</span>
                <span>{this.state.seconds >= 10 ? this.state.seconds : '0'+ this.state.seconds}</span>
            </div>
        );
    }
}

export default TimePassed;


