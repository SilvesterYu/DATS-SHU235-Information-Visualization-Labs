import React, {Component} from "react";

export class Eye extends Component {
    render(){
        return <circle cx={this.props.x} cy={this.props.y} r={this.props.radius}/>
    }

}