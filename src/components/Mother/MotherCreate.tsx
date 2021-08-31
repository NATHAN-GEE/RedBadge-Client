import React from "react";
import APIURL from "../../helpers/environment";
import { Form, FormGroup} from "reactstrap";
import { createTheme, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import { TextField, Button, Paper, Divider } from "@material-ui/core";


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
    fetch(`${APIURL}/mother/create`, {
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
          <ThemeProvider theme={theme1}>
            <Paper elevation={20} style={{backgroundColor: pink[200], marginTop:'25px',padding:'5px'}}>
              <Typography component='h2' style={{ fontWeight: 'bold', color: 'white' }}><h2>Add New Medication</h2></Typography>
              <Divider variant='middle'/>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <TextField
                  label='Medication'
                  type="text"
                  name="med"
                  placeholder="med"
                  value={this.state.med}
                            onChange={(e: any) => this.setState({ med: e.target.value })}
                >
                </TextField>
              </FormGroup>
              <FormGroup>
                <TextField
                  type="text"
                  label="Dosage Description"
                  name="amount"
                  placeholder="Dosage Description"
                  value={this.state.amount}
                  onChange={(e:any) => this.setState({ amount: e.target.value })}
                />
              </FormGroup>
              
              <Button type="submit" variant='contained' color='primary' style={{margin:'10px'}}>Submit</Button>
              </Form>
              </Paper>
          </ThemeProvider>
        );

  }
};

export default CreateDrug;
