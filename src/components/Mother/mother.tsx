import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Paper } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'


interface tokenProps{
    token: any,
    getTable: any
    place: any
    updateOn: any
    editUpdate: any
}

interface entry{
    med: string,
    amount:string
}

class MotherComponent extends React.Component<tokenProps, entry>{
    constructor(props: tokenProps) {
        super(props);
        this.state = {
            med: '',
            amount: '',
        }
        this.mapper = this.mapper.bind(this)
    }
 ////////////////////////////////////////////   
 ////////////////////////////////////////////   
    

///////////////////////////
///////////////////////////
    deleteMother = (place: any) => {
        fetch(`http://localhost:4000/mother/${place.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application.json",
                Authorization: this.props.token,
            }),
        }).then(() => {
            this.props.getTable();
        });
    };
    mapper = () => {
        return this.props.place.map((place1:any, index:any)=>{
            return (
                <TableRow key={index}>
                    {/* <TableCell component='th' scope='place1'>{place1.id}</TableCell> */}
                    <TableCell>{place1.med}</TableCell>
                    <TableCell>{place1.amount}</TableCell>
                    <TableCell>{place1.createdAt}</TableCell>
                    <TableCell>{place1.updatedAt}</TableCell>
                    <TableCell><DeleteIcon color='secondary'onClick={() => {this.deleteMother(place1)}}></DeleteIcon></TableCell>
                    <TableCell><EditIcon color='primary' onClick={() => { this.props.editUpdate(place1); this.props.updateOn()}}></EditIcon></TableCell>
                </TableRow>
            )
        })
    };
    render() {
        return (
            <TableContainer component={Paper}>
            <Table>
            <TableHead>
            <TableRow>
            {/* <TableCell>Id</TableCell> */}
            <TableCell>Med</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Create</TableCell>
            <TableCell>Updated</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {this.mapper()}
            </TableBody>
            </Table>
            </TableContainer>
        )
    }
}
export default MotherComponent;