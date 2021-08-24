import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { ButtonGroup } from 'reactstrap';
import { typography } from '@material-ui/system';

const theme = createTheme({
  
    palette: {
    primary: {
        main: blue[200],
        contrastText: '#fff'
        
        },
    secondary: {
        main: pink[200],
        contrastText: '#fff'
    },
  },
});



/////////////////////////////////
/////////////////////////////////
/////////////////////////////////
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
                <ThemeProvider theme={theme}>

                    <Typography style={{color: 'white', fontSize:'36px', fontWeight:'bold'}}>
                    {Math.floor(this.state.timeRemainingInSeconds / 60)}:{this.state.timeRemainingInSeconds % 60}
                    
                    </Typography>
                    <ButtonGroup>

                <Button variant="contained" color='primary' onClick={()=> this.test()}>Start</Button>
                <Button variant="contained" color="primary" onClick={()=> this.pause()}>Pause</Button>
                <Button variant="contained" color="secondary" onClick={()=> this.restart()}>Restart</Button>
                    </ButtonGroup>
                </ThemeProvider>
            </div>
        );
    }
}