import React from "react";
import MotherComponent from './Mother/mother'
import UpdateTable from './Mother/updateMother'
import CreateDrug from './Mother/MotherCreate'
import UserAdmin from './Admin'

type LoginProps={
  token: any;
  role: any
}

interface LoginState{
    place: [],
    update:any,
    on: boolean,
}
   
class SearchIndex extends React.Component<LoginProps,LoginState> {
    constructor(props:LoginProps) {
        super(props);
        this.state = {
            place: [],
            update: '',
            on: false,
        }
        this.getTable = this.getTable.bind(this)
        this.editUpdate = this.editUpdate.bind(this)
        this.updateOn = this.updateOn.bind(this)
      this.updateOff = this.updateOff.bind(this)
      this.getAdmin = this.getAdmin.bind(this)
  }

  getTable = () => {
    fetch("http://localhost:4000/mother/all", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData)
          this.setState({ place: logData });
      });
  };
  getAdmin = () => {
    fetch("http://localhost:4000/mother/every", {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: this.props.token,
      }),
    })
      .then((res) => res.json())
      .then((logData) => {
        console.log(logData)
          this.setState({ place: logData });
      });
  };
  
  editUpdate = (place:any) => {
      this.setState({ update: place });
    console.log(place);
  };
  updateOn = () => {
      this.setState({ on: true });
  };
  updateOff = () => {
      this.setState({ on: false });
  };
  updateHide = () => {
    console.log(this.props.role)
    return (
      this.state.on === false ?
        <UserAdmin
      getAdmin={this.getAdmin}
        token={this.props.token}
        place={this.state.place}
        updateOn={this.updateOn}
        editUpdate ={this.editUpdate}/>
      //  <MotherComponent
      //               getTable={this.getTable}
      //               token={this.props.token}
      //               place={this.state.place}
      //               updateOn={this.updateOn}
      //               editUpdate ={this.editUpdate}
      //               /> 
        : <UpdateTable
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
          <div>
                <table>
            <tr>
                <td >
                  <CreateDrug token={this.props.token} getTable={this.getTable}/>
                  {this.updateHide()}
                  
              </td>
              <td >
                   {/* <UserAdmin
      getAdmin={this.getAdmin}
        token={this.props.token}
        place={this.state.place}
        updateOn={this.updateOn}
        editUpdate ={this.editUpdate}/> */}
              </td>
              
            </tr>
                    <td>
              <h1><button onClick={ this.getAdmin}>Adminhere</button></h1>
              <h1><button onClick={ this.getTable}>Userhere</button></h1>        
              </td>
              {/* {this.getTable()} */}
              </table>
          </div>
        );
}
};

export default SearchIndex;
