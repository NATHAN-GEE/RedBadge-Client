import React from "react";
import { Form } from "reactstrap";
import { FormGroup, Container, Button, Typography, TextField } from '@material-ui/core'
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { InputAdornment } from '@material-ui/core';
import AlternateEmail from '@material-ui/icons/AlternateEmail'
import VpnKey from '@material-ui/icons/VpnKey';

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


type LoginProps={
    updateToken?: any;
}

interface LoginState{
    email:string
    update:any,
  password: string
  valid: string
}

class UserRegister extends React.Component<LoginProps, LoginState> {
  constructor(props: any) {
    super(props)
    this.state = {
      email: '',
      update: '',
      password: '',
      valid: ''
      
    }
    this.handleSubmit = this.handleSubmit.bind(this)
}
    handleSubmit = (e: any) => {
        e.preventDefault();
        fetch("http://localhost:4000/user/register", {
            method: "POST",

            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
        
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                this.props.updateToken(data.sessionToken);
            });
    }
  

      
    render(){

      return (
              <div>
                <ThemeProvider theme={theme}>
                  <Container maxWidth='xs'>  
                <Typography  style={{color:'#FFF'}}><h1>Register</h1></Typography>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup >
                    <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmail />
                        </InputAdornment>
                      ),
                    }}
                    label='Email'
                    type="email"
                    required={true}
                    value={this.state.email}
                    onChange={(e) => this.setState({email: e.target.value})}
                    />
                  </FormGroup>
                  <FormGroup>
                    <TextField
                      InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VpnKey />
                        </InputAdornment>
                      ),
                    }}
                      label='Password'
                      type="password"
                      value={this.state.password}
                      onChange={(e) => this.setState({ password: e.target.value })}
                      required={true}
                    />
                  <Button variant="contained" color='primary' type="submit" style={{margin:'10px'}}>SignUp</Button>
                  </FormGroup>
                  
                </Form>
                </Container>
                  </ThemeProvider>
              </div>
            );

        }
  };

export default UserRegister;
