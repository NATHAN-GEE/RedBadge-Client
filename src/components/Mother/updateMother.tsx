import React from 'react'
import {
  Form,
  FormGroup,
} from "reactstrap";
import { Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';

import { createTheme } from '@material-ui/core';
import DialogTitle from '@material-ui/core/DialogTitle';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';

const theme1 = createTheme({
  spacing: 4,
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
  amount: string,
  open: boolean
}
class UpdateTable extends React.Component<tokenProps, updateState>{
    constructor(props: any) {
        super(props)
        this.state = {
            med: this.props.update.med,
            amount: this.props.update.amount,
            open: false
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
                this.props.getTable();
                this.props.updateOff();
            });
        }
toggleModalOpen = () => {
        this.setState({open: true})
      }
  toggleModalClose = () => {
      this.setState({open: false})
    }


    render() {
        return (
          <div>
            <ThemeProvider   theme={theme1}>
            
              <Dialog open={true}
              style={{ textAlign: 'center', justifyContent:'center'}}
              onClose={this.toggleModalClose}
              maxWidth='xs'
            fullWidth={true}>
      <DialogTitle>Update Mother Meds</DialogTitle>
      <div>
        <Form onSubmit={this.updateMother}>
          
          <FormGroup>
            <TextField
                      type="text"
                      label='Medication'
              value={this.state.med}
            onChange={(e:any) => this.setState({ med: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
                    <TextField
                      label='amount'
              type="text"
              name="amount"
              value={this.state.amount}
                onChange={(e:any) => this.setState({ amount: e.target.value })}
            />
          </FormGroup>
          
          <Button type="submit" variant="contained" color='primary' style={{margin: '15px'}}>Update</Button>
          <Button type="submit" variant="contained" color='secondary' style={{margin: '15px'}} onClick={this.toggleModalClose}>Close</Button>
        </Form>
      </div>
              </Dialog>
              </ThemeProvider>
            </div>
        )
    }
}
export default UpdateTable;