import React, {Component} from "react";

export class Head extends Component {

    // defined state in this lower level, but we would want to lift it up
    /*
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
    }*/

    render(){
        // (2) modify fill, this.props.color instead of this.state.color that originally existed
        // (4) modify onMouse  add .props because it is defined in the super class
        return <circle cx={this.props.x} cy={this.props.y} r={this.props.radius} fill={this.props.color}
            stroke={"black"} strokeWidth={this.props.width} 
            onMouseOver={this.props.isOn} onMouseOut={this.props.isOut}/>
    }

}