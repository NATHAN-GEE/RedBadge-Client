import React from 'react'
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
          <div>
            <h1>Login</h1>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={(e:any) => this.setState({email: e.target.value})}
                />
              
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  value={this.state.password}
                        onChange={(e: any) => this.setState({ password: e.target.value })}
                  required
                />
                    <button type="submit">Login</button>
            </form>
          </div>
        );
  }
};

export default UserLogin;
