import './App.css';
import React from 'react'
import '@fontsource/roboto'
import ButtonAppBar from './components/AppBar';
import UserIndex from './components/User/UserIndex';
import SearchIndex from './components/Main/SearchIndex'
import {  Container, Typography } from '@material-ui/core'
import BottomNavigation from '@material-ui/core/BottomNavigation';
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

interface tokenState{
  sessionToken: any | undefined
  role: any
}
class App extends React.Component<{}, tokenState> {
  constructor(props:any) {
    super(props)
    this.state = {
      sessionToken: "",
      role:''
    }
    this.updateToken = this.updateToken.bind(this)
    this.clearToken = this.clearToken.bind(this)
    this.protectedViews = this.protectedViews.bind(this)
    this.roleCheck = this.roleCheck.bind(this)
  }
  updateToken = (newToken:any) => {
    localStorage.setItem("token", newToken);
    this.setState({ sessionToken: newToken });
  };
  roleCheck = (newRole:any) => {
    localStorage.setItem("role", newRole);
    this.setState({ role: newRole })
  }
   clearToken = () => {
    localStorage.clear();
    this.setState({})
  }
  protectedViews = () => {
    return (
      
      this.state.sessionToken === localStorage.getItem('token') ? <SearchIndex token={this.state.sessionToken} role={this.state.role} /> :
        <UserIndex updateToken={this.updateToken} role={this.roleCheck}/>
    )
  }
  

  render() {
    return (
      
      <Container disableGutters maxWidth='xl' style={{ backgroundColor: '#353b46', height: '100vh' }}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <ButtonAppBar clearToken={ this.clearToken}/>
              {this.protectedViews()}
          </div>
          <footer style={{ position:'fixed', bottom:0, backgroundColor:pink[200], width:'100%', left:0, padding:10}}>
                <div className='logo2'>
                  <h6>DevelopingNathan</h6>
                </div>
            </footer>
        </ThemeProvider>
      </Container>
      
    );
    
  }
}

export default App;

