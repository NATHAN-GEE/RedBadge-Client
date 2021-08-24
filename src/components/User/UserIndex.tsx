import React from "react";
import UserLogin from "./UserLogin";
import UserRegister from "./UserCreate";
import { Container, Grid, Typography } from '@material-ui/core'

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
          <Container>
              <Typography component='div' style={{margin: 20}}>
            <Grid container spacing={10}>
              <Grid item xs>
                <UserRegister updateToken={this.props.updateToken} />
              </Grid>
              <Grid item xs>
                <UserLogin updateToken={this.props.updateToken} role={this.props.role} />
              </Grid>
              </Grid>
              </Typography>
          </Container>
        );
        
    }
};

export default UserIndex;
