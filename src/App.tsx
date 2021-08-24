import './App.css';
import React from 'react'
import '@fontsource/roboto'
import ButtonAppBar from './components/AppBar';
import UserIndex from './components/User/UserIndex';
import SearchIndex from './components/SearchIndex'
import {AppBar, Container, Typography} from '@material-ui/core'


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
    console.log(newToken)
  };
  roleCheck = (newRole:any) => {
    localStorage.setItem("role", newRole);
    this.setState({ role: newRole })
    console.log(newRole)
  }
   clearToken = () => {
    localStorage.clear();
    this.setState({})
     console.log('works')
  }
  protectedViews = () => {
    return (
      
      this.state.sessionToken === localStorage.getItem('token') ? <SearchIndex token={this.state.sessionToken} role={this.roleCheck} /> :
        <UserIndex updateToken={this.updateToken} role={this.roleCheck}/>
    )
  }
  

  render() {
    return (
      

      <Container maxWidth='xl' style={{ backgroundColor: '#353b46' }}>
        <Typography component="div" style={{ height: '100vh', width: '100%', fontFamily:"Roboto", fontWeight: 700}}>
          <div className="App">
            <ButtonAppBar clearToken={ this.clearToken}/>
        {/* <div><button onClick={this.clearToken}>Logout</button></div> */}
        {this.protectedViews()}
        
        </div>
      </Typography>
        </Container>
    );
    
  }
}

export default App;

