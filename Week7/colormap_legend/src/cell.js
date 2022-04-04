import React from "react";

export function Cell(props){
    const { d, xScale, yScale, color} = props;
    return <g transform={`translate(${xScale(d.station)}, ${yScale(d.month)})`}>
        <rect width={xScale.bandwidth()} height={yScale.bandwidth()} fill={color} stroke={"black"} />
    </g>
}