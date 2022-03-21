import React, {Component, useState} from "react";
import ReactDOM from "react-dom";

import { Head } from './head';
import { Eye } from './eye';
import { Mouth } from './mouth'


const WIDTH = 600;
const HEIGHT = 600;

// (8) add hook 
function Face(props){
    // return val: an array
    // first element: state (var), second element: function
    const[color, setColor] = useState("yellow");
    const[startAngle, setStartAngle] = useState(Math.PI*2/3);
    const[endAngle, setEndAngle] = useState(Math.PI*4/3);
    const[transform, setTransform] = useState(0);
    
    const isOn = () =>{
        setColor("lightgreen");
        setStartAngle(Math.PI*1/3);
        setEndAngle(Math.PI*-1/3);
        setTransform(100)
    }

    const isOut = () =>{
        setColor("yellow");
        setStartAngle(Math.PI*2/3);
        setEndAngle(Math.PI*4/3);
        setTransform(0)
    }

    return <svg width={WIDTH} height={HEIGHT}>
            <g transform={`translate(${WIDTH/2},${HEIGHT/2})`}>
                <Head x={0} y={0} radius={200} width = {'3px'} color = {color} isOn = {isOn} isOut = {isOut} />
                <Eye x={-100} y={-100} radius={30}/>
                <Eye x={100} y={-100} radius={30}/>
                <Mouth startAngle={startAngle} endAngle={endAngle} radius={100} transform = {transform}/>
            </g>
        </svg>
};

// the below is original code
/*
class Face extends Component {
    // (1) 
    // define state in parent component
    // (5) define start and end angles, and add position of new mouth via transform
    constructor(props){
        super(props);
        this.state = {
            // some default color
            color: "yellow",
            startAngle: Math.PI*2/3,
            endAngle: Math.PI*4/3,
            transform: 0
        }
    }

    // define funcs to change the state, make a simple arrow function
    isOn = () =>{
        // setState is a built-in function for a state
        this.setState({
            color: "lightgreen",
            startAngle: Math.PI*-1/3,
            endAngle: Math.PI*1/3,
            transform: 100
        })
    }
    isOut = () => {
        this.setState({
            color: "yellow",
            startAngle: Math.PI*2/3,
            endAngle: Math.PI*4/3,
            transform: 0
        })
    }
    // (3) add isOn, isOut attributes to
    // (6) change angle to correspond to state
    render(){
        return <svg width={WIDTH} height={HEIGHT}>
            <g transform={`translate(${WIDTH/2},${HEIGHT/2})`}>
                <Head x={0} y={0} radius={200} width = {'3px'} color = {this.state.color} isOn = {this.isOn} isOut = {this.isOut} />
                <Eye x={-100} y={-100} radius={30}/>
                <Eye x={100} y={-100} radius={30}/>
                <Mouth startAngle={this.state.startAngle} endAngle={this.state.endAngle} radius={100} transform = {this.state.transform}/>
            </g>
        </svg>
    }
}*/

ReactDOM.render(<Face/>, document.getElementById('root'));