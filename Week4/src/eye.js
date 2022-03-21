import React, {Component} from "react";
// still need to import react although didn't use it explicitly. 
// Because we are using a symtax only available in react
// (7)
/*
export class Eye extends Component {
    render(){
        return <circle cx={this.props.x} cy={this.props.y} r={this.props.radius}/>
    }
}*/

// hooks: hook the states of a component
// 2 hooks: React.useState, React.useEffect

// instead of export class we can do this
export function Eye (props) {
    // a group of tags using <g>
    return <g>
        <circle cx={props.x} cy={props.y} r={props.radius}/>
    </g>
}