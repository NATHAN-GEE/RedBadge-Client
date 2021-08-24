import React from 'react'
import { Form } from 'reactstrap'
import { FormGroup, Container,Button, Typography, TextField } from '@material-ui/core'
import { createTheme, withStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { InputAdornment } from '@material-ui/core';
import AlternateEmail from '@material-ui/icons/AlternateEmail'
import VpnKey from '@material-ui/icons/VpnKey';

const theme = createTheme({
  
    palette: {
      type: 'dark',
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

interface LoginState{
  email: string,
  password: string,
  role: string
}
type LoginProps={
  updateToken?: any,
  role: any
}

class UserLogin extends React.Component<LoginProps,LoginState> {
constructor(props: LoginProps) {
    super(props)
    this.state = {
        email:'',
      password: '',
        role: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
}
handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("http://localhost:4000/user/login", {
      method: "POST",

      body: JSON.stringify({ email: this.state.email, password:this.state.password  }),
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    })
        .then((res) => res.json())
        .then((json) => {
          console.log(json)
          this.props.role(json.user.role)
          this.props.updateToken(json.sessionToken)
        });

  };
    render() {
      return (
        <div className='form'>
          <ThemeProvider theme={theme}>
          
              <Typography  component="div" style={{ backgroundColor: blue[200], height: '35vh', width:'100%', padding: 25, margin: 15, borderRadius: '50%',fontFamily:'Roboto', fontWeight:700 }}>
            <Container maxWidth='xs'>
                <Typography component='h1' style={{color:'#FFF'}}><h1>Login</h1></Typography>
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
                      required={true}
                      color='secondary'
                      type="text"
                      value={this.state.email}
                      onChange={(e:any) => this.setState({email: e.target.value})}
                      />
              
                    <TextField
                      label='Password'
                      color='secondary'
                      InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <VpnKey />
                        </InputAdornment>
                      ),
                    }}
                  type="password"
                  value={this.state.password}
                        onChange={(e: any) => this.setState({ password: e.target.value })}
                  required={true}
                />
                    <Button variant="contained" color='secondary' type="submit">Login</Button>
                  </FormGroup>
                  </Form>
              </Container>
              </Typography>
          </ThemeProvider>
          </div>
        );
  }
};

export default UserLogin;
