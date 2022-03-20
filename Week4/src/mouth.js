import React, {Component} from "react";
import { arc } from 'd3';


export class Mouth extends Component {
    render(){
        const mouthArc = arc()
            .innerRadius(this.props.radius)
            .outerRadius(this.props.radius + 10)
            .startAngle(this.props.startAngle)
            .endAngle(this.props.endAngle)
        return <g transform={`translate(${0},${0})`}>
            <path d={mouthArc()} stroke={"black"} strokeWidth={"10px"}/>
        </g>
    }

}