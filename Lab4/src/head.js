import React, {Component} from "react";

export class Head extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'yellow'
        }
        this.isOn = this.isOn.bind(this);
    }
    isOn(){
        this.setState(
            {color: "lightgreen"}
        )
    }
    isOut = () => {
        this.setState(
            {color: "yellow"}
        )
    }
    render(){
        return <circle cx={this.props.x} cy={this.props.y} r={this.props.radius} fill={this.state.color}
            stroke={"black"} strokeWidth={"3px"} 
            onMouseOver={this.isOn} onMouseOut={this.isOut}/>
    }

}