import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

interface tokenProps{
    token: any,
    getTable: any
}
interface updateState{
    med: string,
    amount: string
}

class CreateDrug extends React.Component<tokenProps, updateState> {
    constructor(props: any) {
        super(props);
        this.state = {
            med: '',
            amount: '',
        }
    }

   handleSubmit = (e:any) => {
    e.preventDefault();
    fetch("http://localhost:4000/mother/create", {
      method: "POST",
      body: JSON.stringify({
        med:this.state.med,
        amount:this.state.amount,
        
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
          this.setState({ med: "" });
          this.setState({ amount: "" });
        this.props.getTable();
      });
  };
    render() {
      
        return (
          <>
            <h3>Save Destination</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label htmlFor="med"></Label>
                <Input
                  type="text"
                  name="med"
                  placeholder="med"
                  value={this.state.med}
                            onChange={(e: any) => this.setState({ med: e.target.value })}
                >
                </Input>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="amount"></Label>
                <Input
                  type="text"
                  name="amount"
                  placeholder="amount"
                  value={this.state.amount}
                            onChange={(e:any) => this.setState({ amount: e.target.value })}
                />
              </FormGroup>
              
              <Button type="submit">Submit</Button>
            </Form>
          </>
        );

  }
};

export default CreateDrug;
