import React from 'react';


class TimeLast extends React.Component{
    constructor(props){
        super(props);
        this.state = {secondsLast:0, minutesLast:0};
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
        let secondsCurrent = Math.round(document.getElementById('video').currentTime);
        let minutesCurrent = (secondsCurrent / 60).toString().split('.')[0];
        let secondsDuration = Math.round(document.getElementById('video').duration);
        let minutesDuration = (secondsDuration / 60).toString().split('.')[0];
        let lastSeconds = (secondsDuration / 60).toString().split('.')[1];
        function secondsLast(){
            if(secondsCurrent <= lastSeconds) {
               return lastSeconds - secondsCurrent;
            } else if(secondsCurrent >= lastSeconds && (secondsCurrent / 60) <= minutesDuration ){
               return 60 - secondsFunction();
            }else if( (secondsCurrent / 60) >=  minutesDuration ){
                return lastSeconds - secondsFunction() - 10;
            }
        }
        this.setState({secondsLast: secondsLast() , minutesLast: minutesDuration - minutesCurrent});
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
                <span>{this.state.minutesLast >= 10 ? this.state.minutesLast : '0' + this.state.minutesLast}:</span>
                <span>{this.state.secondsLast >= 10 ? this.state.secondsLast : '0'+ this.state.secondsLast}</span>
            </div>
        )
    }
   
}

export default TimeLast;

