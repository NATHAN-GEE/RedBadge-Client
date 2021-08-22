import './App.css';
import React from 'react'
import UserIndex from './components/User/UserIndex';
import SearchIndex from './components/SearchIndex'

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
      <div className="App">
        <div><button onClick={this.clearToken}>Logout</button></div>
        {this.protectedViews()}
        </div>
    );
    
  }
}

export default App;

