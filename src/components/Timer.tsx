import React from 'react'
interface TimerProps{
    startTimeInSeconds: any
}
interface TimerState{
    timeRemainingInSeconds: number
}
export default class CountdownTimer extends React.Component<TimerProps, TimerState> {
    private timer: any;

    constructor(props: any) {
        super(props);
        this.state = {
            timeRemainingInSeconds: props.startTimeInSeconds
        };
    }

    decrementTimeRemaining = () => {
        if (this.state.timeRemainingInSeconds > 0) {
            this.setState({
                timeRemainingInSeconds: this.state.timeRemainingInSeconds - 1
            });
        } else {
            clearInterval(this.timer);
        }
    };
    pause = () => {
        clearInterval(this.timer)
    }
    restart = () => {
        this.setState({ timeRemainingInSeconds: this.props.startTimeInSeconds })
        clearInterval(this.timer)
    }

    test=() =>{
        this.timer = setInterval(() => {
            this.decrementTimeRemaining();
        }, 1000);
    }
    render() {
        return (
            <div>
                {Math.floor(this.state.timeRemainingInSeconds / 60)}:{this.state.timeRemainingInSeconds % 60}
                <button onClick={()=> this.test()}>Start</button>
                <button onClick={()=> this.pause()}>Pause</button>
                <button onClick={()=> this.restart()}>Restart</button>
            </div>
        );
    }
}