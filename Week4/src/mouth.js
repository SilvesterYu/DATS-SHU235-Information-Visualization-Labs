import React, {Component} from "react";
import { arc } from 'd3';

// (6) change mouth position via transform, use this.props
export class Mouth extends Component {
    render(){
        const mouthArc = arc()
            .innerRadius(this.props.radius)
            .outerRadius(this.props.radius + 10)
            .startAngle(this.props.startAngle)
            .endAngle(this.props.endAngle)
        console.log(this.props.transform)
        return <g transform={`translate(${0},${this.props.transform})`}>
            <path d={mouthArc()} stroke={"black"} strokeWidth={"10px"}/>
        </g>
    }

}