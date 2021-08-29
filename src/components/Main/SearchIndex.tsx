import React from "react";
import APIURL from "../../helpers/environment";
import CountdownTimer from "./Timer";
import UpdateBaby from "../baby/UpdateBaby";
import UpdateTable from '../Mother/updateMother'
import CreateDrug from '../Mother/MotherCreate'
import CreateBaby from "../baby/CreateBaby";
import MotherComponent from "../Mother/mother";
import BabyComponent from '../baby/Baby'
import { Container, Grid, Button } from '@material-ui/core'
import {Parser} from 'json2csv'
import {saveAs} from 'file-saver'

type LoginProps={
  token: any;
  role: any
}

interface LoginState{
    place: [],
    update:any,
    on: boolean,
  onbaby: boolean,
  toggle: string
}
let dataStore: any;
const SaveFile = (data:any) => {
  const file = new File([data], "baby.csv", { type: "text/plain;charset=utf=8" })
  return saveAs(file)
}

class SearchIndex extends React.Component<LoginProps,LoginState> {
    constructor(props:LoginProps) {
        super(props);
        this.state = {
            place: [],
            update: '',
          on: false,
          onbaby: false,
          toggle: ''
        }
      this.getTable = this.getTable.bind(this)
      this.getBaby = this.getBaby.bind(this)
        this.editUpdate = this.editUpdate.bind(this)
        this.updateOn = this.updateOn.bind(this)
      this.updateOff = this.updateOff.bind(this)
      this.getAdmin = this.getAdmin.bind(this)
  }

  getTable = () => {
    fetch(`${APIURL}/mother/all`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
       let sorted =  logData.sort(function (a:any, b:any) {
          return a.id - b.id
        })
          this.setState({ place: sorted });
      });
  };
  
  getBaby = () => {
    fetch(`${APIURL}/baby/all`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        let sorted =  logData.sort(function (a:any, b:any) {
          return a.day - b.day
        })
        this.setState({ place: sorted });
        const parser = new Parser(sorted)
        dataStore = parser.parse(sorted)
      });
  };
  getAdmin = () => {
    fetch(`${APIURL}/mother/every`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
          this.setState({ place: logData });
      });
  };

  roleCheck = () => {
    if (this.props.role === 'admin') {
      
      return <Button variant='contained' color='primary' style={{margin:'10px'}} onClick={() => { this.getAdmin();this.setState({toggle: 'hide'}) }}>Adminhere</Button>
    }
  }
  
  editUpdate = (place:any) => {
      this.setState({ update: place });
  };
  updateOn = () => {
      this.setState({ on: true });
  };
  updateOff = () => {
      this.setState({ on: false });
  };
  updateOnBaby = () => {
      this.setState({ onbaby: true });
  };
  updateOffBaby = () => {
      this.setState({ onbaby: false });
  };
  

  updateBaby = () => {
    if(this.state.toggle === 'baby')
    return(
      this.state.onbaby === false?
        <BabyComponent
          getBaby={this.getBaby}
          token={this.props.token}
          place={this.state.place}
          updateOnBaby={this.updateOnBaby}
          editUpdate={this.editUpdate} />
        :
        <UpdateBaby
        update={this.state.update}
        place={this.state.place}
        getBaby={this.getBaby}
        updateOffBaby={this.updateOffBaby}
        editUpdate={this.editUpdate}
        token={this.props.token}/>
    )
  }
  updateHide = () => {
    if (this.state.toggle === 'hide')
    return (
      this.state.on === false ?
        <MotherComponent
        getTable={this.getTable}
        token={this.props.token}
        place={this.state.place}
        updateOn={this.updateOn}
          editUpdate={this.editUpdate} /> :
        <UpdateTable
        update={this.state.update}
        place={this.state.place}
        getTable={this.getTable}
        updateOff={this.updateOff}
        editUpdate={this.editUpdate}
        token={this.props.token}
        />  
        )
      }
      
      render() {
        
        return (
          <Container maxWidth='xl'  style={{ backgroundColor: '#353b46', height: '100%', width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={6} md={3} lg={2} zeroMinWidth>
                <CreateDrug token={this.props.token} getTable={this.getTable} />
              <CountdownTimer startTimeInSeconds={900} />
              </Grid>
              <Grid item sm={6} xs={6} md={3} lg={2}>
                <CreateBaby token={this.props.token} getBaby={this.getBaby}/>
              </Grid>
              <Grid item sm={12} xs={12} md={6} lg={8} style={{marginTop:'15px'}}>
                {/* <Button variant='contained' color='primary' style={{margin:'10px'}} onClick={() => { this.getAdmin();this.setState({toggle: 'hide'}) }}>Adminhere</Button> */}
                {this.roleCheck()}
                <Button variant='contained' color='secondary' style={{margin:'10px'}} onClick={() => { this.getTable();this.setState({toggle: 'hide'}) }}>Userhere</Button>
                <Button variant='contained' color='primary' style={{margin:'10px'}} onClick={() => { this.getBaby(); this.setState({toggle: 'baby'}) }}>Babyhere</Button>
                <Button variant='contained' color='primary' style={{ margin: '10px' }} onClick={() => { console.log(dataStore); SaveFile(dataStore) }}>BabyDownload</Button>
                  {this.updateHide()}
                   {this.updateBaby()} 
              </Grid>
              
              </Grid>
          </Container>
        );
}
};

export default SearchIndex;
