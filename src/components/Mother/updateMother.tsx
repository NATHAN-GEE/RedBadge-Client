import React from 'react'
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";



interface tokenProps{
    token: any,
    getTable: any
    place: any
    updateOff: any,
    update: any,
    editUpdate: any
}
interface updateState{
    med: string,
    amount: string
}
class UpdateTable extends React.Component<tokenProps, updateState>{
    constructor(props: any) {
        super(props)
        this.state = {
            med: this.props.update.med,
            amount: this.props.update.amount
            
        }
        this.updateMother = this.updateMother.bind(this)
    }
    updateMother = (event: any) => {
            event.preventDefault();
            fetch(`http://localhost:4000/mother/${this.props.update.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    med: this.state.med,
                    amount: this.state.amount,
                }),
                headers: new Headers({
                    "Content-Type": "application/json",
                    Authorization:this.props.token,
                }),
            }).then(() => {
                console.log(this.state.med)
                this.props.getTable();
                this.props.updateOff();
            });
        }



    render() {
        return (
            <div>
                <Modal isOpen={true}>
      <ModalHeader>Update</ModalHeader>
      <ModalBody>
        <Form onSubmit={this.updateMother}>
          
          <FormGroup>
            <Label htmlFor="med" />
            <Input
              type="text"
              value={this.state.med}
            onChange={(e:any) => this.setState({ med: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="amount" />
            <Input
              type="text"
              name="amount"
              value={this.state.amount}
                onChange={(e:any) => this.setState({ amount: e.target.value })}
            />
          </FormGroup>
          
          <Button type="submit">Update</Button>
        </Form>
      </ModalBody>
    </Modal>
            </div>
        )
    }
}
export default UpdateTable;