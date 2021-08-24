import React from 'react'
import {
  Form,
  FormGroup,
} from "reactstrap";
import { Button} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
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
    getBaby: any
    place: any
    updateOffBaby: any,
    update: any,
    editUpdate: any
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
  soilDiaper3: string,
  open: boolean
}
class UpdateBaby extends React.Component<tokenProps, updateState>{
    constructor(props: any) {
        super(props)
        this.state = {
            day: this.props.update.day,
            feedingTime1: this.props.update.feedingTime1,
            feedingTime2: this.props.update.feedingTime2,
            feedingTime3: this.props.update.feedingTime3,
            feedingTime4: this.props.update.feedingTime4,
            feedingTime5: this.props.update.feedingTime5,
            feedingTime6: this.props.update.feedingTime6,
            feedingTime7: this.props.update.feedingTime7,
            feedingTime8: this.props.update.feedingTime8,
            wetDiaper1: this.props.update.wetDiaper1,
            wetDiaper2: this.props.update.wetDiaper2,
            wetDiaper3: this.props.update.wetDiaper3,
            soilDiaper1: this.props.update.soilDiaper1,
            soilDiaper2: this.props.update.soilDiaper2,
          soilDiaper3: this.props.update.soilDiaper3,
            open: false
        }
        this.updateBaby1 = this.updateBaby1.bind(this)
    }
    updateBaby1 = (event: any) => {
            event.preventDefault();
            fetch(`http://localhost:4000/baby/${this.props.update.id}`, {
                method: "PUT",
                body: JSON.stringify({
                    day: this.state.day,
                    feedingTime1: this.state.feedingTime1,
                    feedingTime2: this.state.feedingTime2,
                    feedingTime3: this.state.feedingTime3,
                    feedingTime4: this.state.feedingTime4,
                    feedingTime5: this.state.feedingTime5,
                    feedingTime6: this.state.feedingTime6,
                    feedingTime7: this.state.feedingTime7,
                    feedingTime8: this.state.feedingTime8,
                    wetDiaper1: this.state.wetDiaper1,
                    wetDiaper2: this.state.wetDiaper2,
                    wetDiaper3: this.state.wetDiaper3,
                    soilDiaper1: this.state.soilDiaper1,
                    soilDiaper2: this.state.soilDiaper2,
                    soilDiaper3: this.state.soilDiaper3,
                }),
                headers: new Headers({
                    "Content-Type": "application/json",
                    Authorization:this.props.token,
                }),
            }).then(() => {
                this.props.getBaby();
                this.props.updateOffBaby();
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
          <div className="modal">
            <ThemeProvider   theme={theme1}>
            <Dialog open={true}
              style={{ textAlign: 'center', justifyContent:'center'}}
              onClose={this.toggleModalClose}
              maxWidth='xs'
            fullWidth={true}>
      <DialogTitle>Update Baby Info</DialogTitle>
      <div>
        <Form onSubmit={this.updateBaby1}>
          
          <FormGroup style={{textAlign: 'center'}}>
                    <TextField
                        label='Day'
                      type="text"
              value={this.state.day}
            onChange={(e:any) => this.setState({ day: e.target.value })}
            />
          </FormGroup>
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
                      label='Wet-1'
              type="text"
              value={this.state.wetDiaper1}
                onChange={(e:any) => this.setState({ wetDiaper1: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
                    <TextField
                      label='Wet-2'
              type="text"
              value={this.state.wetDiaper2}
                onChange={(e:any) => this.setState({ wetDiaper2: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
                    <TextField
                      label='Wet-3'
              type="text"
              value={this.state.wetDiaper3}
                onChange={(e:any) => this.setState({ wetDiaper3: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
                    <TextField
                      label='Soiled-1'
              type="text"
              value={this.state.soilDiaper1}
                onChange={(e:any) => this.setState({ soilDiaper1: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
                    <TextField
                      label='Soiled-2'
              type="text"
              value={this.state.soilDiaper2}
                onChange={(e:any) => this.setState({ soilDiaper2: e.target.value })}
            />
          </FormGroup>
          <FormGroup>
            <TextField
                      type="text"
                      label='Soiled-3'
              value={this.state.soilDiaper3}
                onChange={(e:any) => this.setState({ soilDiaper3: e.target.value })}
            />
          </FormGroup>
                  <DialogActions>
                    
          <Button type="submit" variant="contained" color='primary' style={{margin: '15px'}}>Update</Button>
          <Button type="submit" variant="contained" color='secondary' style={{margin: '15px'}} onClick={this.toggleModalClose}>Close</Button>
          </DialogActions>
        </Form>
      </div>
              </Dialog>
              </ThemeProvider>
          </div>
        )
    }
}
export default UpdateBaby;