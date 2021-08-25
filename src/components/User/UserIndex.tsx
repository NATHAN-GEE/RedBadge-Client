import React from "react";
import UserLogin from "./UserLogin";
import UserRegister from "./UserCreate";
import { Container, Grid, Paper } from '@material-ui/core'
import { createTheme, ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';

const theme1 = createTheme({
  spacing: 4,
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

type LoginProps={
  updateToken: any;
  role: any
}

interface LoginState{
    update:any,
}

class UserIndex extends React.Component<LoginProps, LoginState> {
    constructor(props: any) {
        super(props);
        this.state = {
            update: '',
        }
    }
    render() {
      return (
          <ThemeProvider theme={theme1}>
          <Container maxWidth='lg'>
            <Grid container spacing={4}>
              <Grid item sm={6} xs={12}>
                <Paper style={{backgroundColor:pink[200], borderRadius:'50%', padding: 15, margin:15, height:'100%'}}>
                <UserRegister updateToken={this.props.updateToken} />

                </Paper>
              </Grid>
              <Grid item sm={6} xs={12}>
              <Paper style={{backgroundColor:blue[200], borderRadius:'50%', padding: 15, margin:15, height:'100%'}}> 
                <UserLogin updateToken={this.props.updateToken} role={this.props.role} />

              </Paper>
              </Grid>
              </Grid>
          </Container>
          </ThemeProvider>
        );
        
    }
};

export default UserIndex;
