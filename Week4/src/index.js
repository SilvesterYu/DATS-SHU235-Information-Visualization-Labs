import React, { Component } from "react";
import ReactDOM from "react-dom";

import { Head } from './head';
import { Eye } from './eye';
import { Mouth } from './mouth'


const WIDTH = 600;
const HEIGHT = 600;

class Face extends Component {

    // add a state
    constructor(pros){
        super(props);
        this.state = {
            color:"yellow"
        }
    }

    isOn = () => {
        // setState is built-in for a state
        this.setState(
            {
                color:"lightgreen"
            }
        )
    }

    isOut = () =>{
        this.setState(
            {
                color:"yellow"
            }
        )
    }


    render() {
        return <svg width={WIDTH} height={HEIGHT}>
            <g transform={`translate(${WIDTH / 2},${HEIGHT / 2})`}>
                <Head x={0} y={0} radius={300} />
                <Eye x={-100} y={-100} radius={30} />
                <Eye x={100} y={-100} radius={30} />
                <Mouth startAngle={Math.PI * 2 / 3} endAngle={Math.PI * 4 / 3} radius={100} />
            </g>
        </svg>
    }
}

ReactDOM.render(<Face />, document.getElementById('root'));