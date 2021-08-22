import React from 'react'

interface tokenProps{
    token: any,
    getAdmin: any
    place: any
    updateOn: any
    editUpdate: any
}

interface entry{
    med: string,
    amount:string
}

class UserAdmin extends React.Component<tokenProps, entry>{
    constructor(props: tokenProps) {
        super(props);
        this.state = {
            med: '',
            amount: '',
        }
        this.mapper1 = this.mapper1.bind(this)
    }
 ////////////////////////////////////////////   
 ////////////////////////////////////////////   
    

///////////////////////////
///////////////////////////
    deleteMother1 = (place: any) => {
        fetch(`http://localhost:4000/mother/admin/${place.id}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application.json",
                Authorization: this.props.token,
            }),
        }).then(() => {
            this.props.getAdmin();
        });
    };
    mapper1 = () => {
        return this.props.place.map((place1:any, index:any)=>{
            return (
                <tr key={index}>
                    <th scope="row">{place1.id}</th>
                    <td>{place1.med}</td>
                    <td>{place1.amount}</td>
                    <td>{place1.createdAt}</td>
                    <td>{place1.updatedAt}</td>
                    <td><button onClick={() => {this.deleteMother1(place1)}}>Delete</button></td>
                    <td><button onClick={() => { this.props.editUpdate(place1); this.props.updateOn()}}>Update</button></td>
                </tr>
            )
        })
    };
    render() {
        return (
            <div>
            <div>
                {/* <h1>{this.props.token}</h1> */}
                <thead>
                    <tr>
            <th>Id</th>
            <th>Med</th>
            <th>Amount</th>
            <th>Create</th>
            <th>Updated</th>
          </tr>
                </thead>
                <tbody>
                {this.mapper1()}
                </tbody>
            </div>
                <div>
                
            </div>
            </div>
        )
    }
}
export default UserAdmin;