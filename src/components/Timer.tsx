import React from 'react'
import { Button, Typography, Paper } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { ButtonGroup } from 'reactstrap';

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
                    <Paper elevation={20} style={{ backgroundColor: pink[200], paddingBottom: '10px', paddingTop: '10px', marginTop: 10 }}>
                        <Typography style={{color:'white'}}>
                        <h2>Breast Feeding Timer</h2>
                        </Typography>
                    <Typography style={{ color: 'white', fontSize: '36px', fontWeight: 'bold', marginTop:'5px'}}>
                    {Math.floor(this.state.timeRemainingInSeconds / 60)}:{this.state.timeRemainingInSeconds % 60}
                    </Typography>
                    <ButtonGroup>
                <Button variant="contained" color='primary' style={{margin:'5px', paddingTop:'5px'}} onClick={()=> this.test()}>Start</Button>
                <Button variant="contained" color="primary" style={{margin:'5px', paddingTop:'5px'}} onClick={()=> this.pause()}>Pause</Button>
                <Button variant="contained" color="primary" style={{margin:'5px', paddingTop:'5px'}} onClick={()=> this.restart()}>Restart</Button>
                        </ButtonGroup>
                        </Paper>
                </ThemeProvider>
            </div>
        );
    }
}