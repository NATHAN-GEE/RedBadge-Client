import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';

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


interface aprops{
    clearToken: any
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default class ButtonAppBar extends React.Component<aprops, {}> {
    constructor(props: aprops) {
        super(props)
        
    }
    render() {
        
        return (
          <ThemeProvider theme={theme}>
            <AppBar position="static" color="primary">
              <Toolbar>
                <IconButton edge="start"  color="inherit" aria-label="menu" >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                  PostMama
                        </Typography>
                        <Typography style={{display:'flex', marginLeft:'auto'}}>

                        <Button color="inherit" onClick={this.props.clearToken}><MeetingRoomIcon/></Button>
                        </Typography>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        );

    }
}
