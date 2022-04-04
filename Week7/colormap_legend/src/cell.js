import React from "react";

// -- a cell is an sbg <rect /> element -- //
export function Cell(props){
    const { d, xScale, yScale, color} = props;
    // -- use a <g> group so all elements put inside the group transform together -- //
    return <g transform={`translate(${xScale(d.station)}, ${yScale(d.month)})`}>
        <rect width={xScale.bandwidth()} height={yScale.bandwidth()} fill={color} stroke={"brown"} />
    </g>
}