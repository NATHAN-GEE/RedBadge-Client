import React from "react";
import UserLogin from "./UserLogin";
import UserRegister from "./UserCreate";
import { Container, Row, Col } from "reactstrap";

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
          <Container className="container">
            <Row>
              <Col md="6">
                <UserRegister updateToken={this.props.updateToken} />
              </Col>
      
              <Col md="6" className="login-col">
                <UserLogin updateToken={this.props.updateToken} role={this.props.role} />
              </Col>
            </Row>
          </Container>
        );
        
    }
};

export default UserIndex;
