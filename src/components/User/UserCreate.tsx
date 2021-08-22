import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

type LoginProps={
    updateToken?: any;
}

interface LoginState{
    email:string
    update:any,
    password: string
}

class UserRegister extends React.Component<LoginProps, LoginState> {
    constructor(props: any) {
        super(props)
            this.state = {
                email: '',
                update: '',
                password: ''
            
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
                <h1>SignUp</h1>
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label htmlFor="email">Email:</Label>
                    <Input
                      type="text"
                      required
                      value={this.state.email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input
                      type="password"
                      value={this.state.password}
                      onChange={(e) => this.setState({ password: e.target.value })}
                    />
                  </FormGroup>
                  
                  <Button type="submit">SignUp</Button>
                </Form>
              </div>
            );

        }
  };

export default UserRegister;
