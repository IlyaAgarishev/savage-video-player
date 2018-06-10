import React from 'react';

class VideoDuration extends React.Component {
  constructor(props) {
    super(props);

    this.state = { seconds: 0, minutes: 0 };
  }
  increment() {
    let duration = (Math.round(document.getElementById('video').duration) / 60)
      .toString()
      .split('.');
    let seconds = duration[1] - 10;
    let minutes = duration[0];

    function rightMinutes() {
      if (minutes >= 10) {
        return minutes;
      }
      return '0' + minutes;
    }

    function rigthSeconds() {
      if (seconds >= 10) {
        return seconds;
      }
      return '0' + seconds;
    }

    this.setState({ seconds: rigthSeconds(), minutes: rightMinutes() });
  }

  componentDidMount() {
    this.timer = setInterval(() => this.increment(), 10);
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  render() {
    let minutes = this.state.minutes;
    let seconds = this.state.seconds;
    return <div>{minutes + ':' + seconds}</div>;
  }
}

export default VideoDuration;
