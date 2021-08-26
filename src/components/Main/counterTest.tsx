import { Component } from "react";
import React from "react";


interface updateToken {message?: string}
type mycount= { count: number }

class UserLoginTest extends Component<updateToken,mycount>{
    constructor(props: updateToken) {
        super(props)
        this.state = { count: 0 };
        
    }
    render() {
        return (
            <div>
                <h1>
                    {this.state.count}
                    {this.props.message}
                    <button onClick={()=>this.increment(1)}>Count</button>
                    <button onClick={() => this.decrement(1)}>deCount</button>
                </h1>
            </div>
        )
    }
    increment = (amt: number) => {
        this.setState({count: this.state.count + amt, })
    }
    decrement = (amt: number) => {
        this.setState({count: this.state.count - amt, })
    }
}
export default UserLoginTest;