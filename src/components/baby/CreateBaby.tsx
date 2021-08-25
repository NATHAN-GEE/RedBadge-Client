import React from "react";
import './baby.css'
import { Form, FormGroup } from "reactstrap";
import { createTheme, Typography } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { pink } from '@material-ui/core/colors';
import { ThemeProvider } from '@material-ui/styles';
import { TextField, Button,Paper, FormControl } from "@material-ui/core";

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
    getBaby: any
}
interface updateState{
    day:number,
    feedingTime1:string,
    feedingTime2:string,
    feedingTime3:string,
    feedingTime4:string,
    feedingTime5:string,
    feedingTime6:string,
    feedingTime7:string,
    feedingTime8:string,
    wetDiaper1:string,
    wetDiaper2:string,
    wetDiaper3:string,
    soilDiaper1:string,
    soilDiaper2:string,
    soilDiaper3:string,
}

class CreateBaby extends React.Component<tokenProps, updateState> {
    constructor(props: any) {
        super(props);
        this.state = {
            day: 0,
            feedingTime1:'',
            feedingTime2:'',
            feedingTime3:'',
            feedingTime4:'',
            feedingTime5:'',
            feedingTime6:'',
            feedingTime7:'',
            feedingTime8:'',
            wetDiaper1:'',
            wetDiaper2:'',
            wetDiaper3:'',
            soilDiaper1:'',
            soilDiaper2:'',
            soilDiaper3:'',
        }
    }

   handleSubmit = (e:any) => {
    e.preventDefault();
    fetch("http://localhost:4000/baby/create", {
      method: "POST",
      body: JSON.stringify({
        day: this.state.day,
            feedingTime1:this.state.feedingTime1,
            feedingTime2:this.state.feedingTime2,
            feedingTime3:this.state.feedingTime3,
            feedingTime4:this.state.feedingTime4,
            feedingTime5:this.state.feedingTime5,
            feedingTime6:this.state.feedingTime6,
            feedingTime7:this.state.feedingTime7,
            feedingTime8:this.state.feedingTime8,
            wetDiaper1:this.state.wetDiaper1,
            wetDiaper2:this.state.wetDiaper2,
            wetDiaper3:this.state.wetDiaper3,
            soilDiaper1:this.state.soilDiaper1,
            soilDiaper2:this.state.soilDiaper2,
            soilDiaper3:this.state.soilDiaper3,
        
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
          this.setState({ day: 0 });
          this.setState({ feedingTime1: "" });
          this.setState({ feedingTime2: "" });
          this.setState({ feedingTime3: "" });
          this.setState({ feedingTime4: "" });
          this.setState({ feedingTime5: "" });
          this.setState({ feedingTime6: "" });
          this.setState({ feedingTime7: "" });
          this.setState({ feedingTime8: "" });
          this.setState({ wetDiaper1: "" });
          this.setState({ wetDiaper2: "" });
          this.setState({ wetDiaper3: "" });
          this.setState({ soilDiaper1: "" });
          this.setState({ soilDiaper2: "" });
          this.setState({ soilDiaper3: "" });
        this.props.getBaby();
      });
  };
    render() {
      return (
          <div className='for'>
          <ThemeProvider theme={theme1}>
            <Paper elevation={20} style={{ backgroundColor: blue[200], marginTop: '25px', maxHeight: 600, overflow: 'auto'}}>
            <Typography component='h2' style={{color:'white'}}>
            <h2>Add New Baby Entry</h2>
            </Typography>
            <Typography component='body' style={{color:'white'}}>
            <Form onSubmit={this.handleSubmit}>
              <FormControl>
                    <TextField
                  label='Day'
                  type="text"
                  value={this.state.day}
                  onChange={(e: any) => this.setState({ day: e.target.value })}
                >
                </TextField>
              </FormControl>
              <FormGroup>
                <TextField
                  label='Feeding-1'
                  type="text"
                  value={this.state.feedingTime1}
                            onChange={(e:any) => this.setState({ feedingTime1: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='Feeding-2'
                  type="text"
                  value={this.state.feedingTime2}
                            onChange={(e:any) => this.setState({ feedingTime2: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='Feeding-3'
                  type="text"
                  value={this.state.feedingTime3}
                            onChange={(e:any) => this.setState({ feedingTime3: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='Feeding-4'
                  type="text"
                  value={this.state.feedingTime4}
                            onChange={(e:any) => this.setState({ feedingTime4: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='Feeding-5'
                  type="text"
                  value={this.state.feedingTime5}
                            onChange={(e:any) => this.setState({ feedingTime5: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='Feeding-6'
                  type="text"
                  value={this.state.feedingTime6}
                            onChange={(e:any) => this.setState({ feedingTime6: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='Feeding-7'
                  type="text"
                  value={this.state.feedingTime7}
                            onChange={(e:any) => this.setState({ feedingTime7: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='Feeding-8'
                  type="text"
                  value={this.state.feedingTime8}
                            onChange={(e:any) => this.setState({ feedingTime8: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='WetDiaper-1'
                  type="text"
                  value={this.state.wetDiaper1}
                            onChange={(e:any) => this.setState({ wetDiaper1: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='WetDiaper-2'
                  type="text"
                  value={this.state.wetDiaper2}
                            onChange={(e:any) => this.setState({ wetDiaper2: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='WetDiaper-3'
                  type="text"
                  value={this.state.wetDiaper3}
                            onChange={(e:any) => this.setState({ wetDiaper3: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='SoilDiaper-1'
                  type="text"
                  value={this.state.soilDiaper1}
                            onChange={(e:any) => this.setState({ soilDiaper1: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='SoilDiaper-2'
                  type="text"
                  value={this.state.soilDiaper2}
                            onChange={(e:any) => this.setState({ soilDiaper2: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <TextField
                  label='SoilDiaper-3'
                  type="text"
                  value={this.state.soilDiaper3}
                            onChange={(e:any) => this.setState({ soilDiaper3: e.target.value })}
                />
              </FormGroup>
              
                <Button type="submit" variant='contained' color='secondary' style={{ margin: '10px' }}>Submit</Button>
                </Form>
              </Typography>
              </Paper>
          </ThemeProvider>
          </div>
        );

  }
};

export default CreateBaby;
