import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper, Container } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

interface tokenProps{
    token: any,
    getBaby: any
    place: any
    updateOnBaby: any
    editUpdate: any
}

interface entry{
   
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

class BabyComponent extends React.Component<tokenProps, entry>{
    constructor(props: tokenProps) {
        super(props);
        this.state = {
    day: 0,
    feedingTime1: '',
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
        this.mapper = this.mapper.bind(this)
    }
 ////////////////////////////////////////////   
 ////////////////////////////////////////////   
    

///////////////////////////
///////////////////////////
    deleteBaby = (place: any) => {
        fetch(`http://localhost:4000/baby/${place.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application.json",
                Authorization: this.props.token,
            }),
        }).then(() => {
            this.props.getBaby();
        });
    };
    mapper = () => {
        return this.props.place.map((place1:any, index:any)=>{
            return (
                <TableRow key={index}>
                    {/* <TableCell component='th' scope="place1">{place1.id}</TableCell> */}
                    <TableCell>{place1.day}</TableCell>
                    <TableCell>{place1.feedingTime1}</TableCell>
                    <TableCell>{place1.feedingTime2}</TableCell>
                    <TableCell>{place1.feedingTime3}</TableCell>
                    <TableCell>{place1.feedingTime4}</TableCell>
                    <TableCell>{place1.feedingTime5}</TableCell>
                    <TableCell>{place1.feedingTime6}</TableCell>
                    <TableCell>{place1.feedingTime7}</TableCell>
                    <TableCell>{place1.feedingTime8}</TableCell>
                    <TableCell>{place1.wetDiaper1}</TableCell>
                    <TableCell>{place1.wetDiaper2}</TableCell>
                    <TableCell>{place1.wetDiaper3}</TableCell>
                    <TableCell>{place1.soilDiaper1}</TableCell>
                    <TableCell>{place1.soilDiaper2}</TableCell>
                    <TableCell>{place1.soilDiaper3}</TableCell>
                    <TableCell><DeleteIcon color="secondary" onClick={() => {this.deleteBaby(place1)}}>Delete</DeleteIcon></TableCell>
                    <TableCell><EditIcon color='primary' onClick={() => { this.props.editUpdate(place1); this.props.updateOnBaby()}}>Update</EditIcon></TableCell>
                </TableRow>
            )
        })
    };
    render() {
        return (
            <Container maxWidth= 'xl'>
                <TableContainer component={Paper}>
                    <Table>
            <TableHead>
            <TableRow>
            {/* <TableCell>Id</TableCell> */}
            <TableCell>Day</TableCell>
            <TableCell>Feeding1</TableCell>
            <TableCell>Feeding2</TableCell>
            <TableCell>Feeding3</TableCell>
            <TableCell>Feeding4</TableCell>
            <TableCell>Feeding5</TableCell>
            <TableCell>Feeding6</TableCell>
            <TableCell>Feeding7</TableCell>
            <TableCell>Feeding8</TableCell>
            <TableCell>Wet-1</TableCell>
            <TableCell>Wet-2</TableCell>
            <TableCell>Wet-3</TableCell>
            <TableCell>Soil-1</TableCell>
            <TableCell>Soil-2</TableCell>
            <TableCell>Soil-3</TableCell>
            <TableCell>Delete</TableCell>
            <TableCell>Update</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {this.mapper()}
                        </TableBody>
                        </Table>
            </TableContainer>
           
            </Container>
                
        )
    }
}
export default BabyComponent;