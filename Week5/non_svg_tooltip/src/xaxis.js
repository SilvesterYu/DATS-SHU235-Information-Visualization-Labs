import React from "react";


export function XAxis(props){
    const {xScale, width, height} = props;
    const ticks = xScale.ticks();
    return <g>
        <line x1={0} y1={height} x2={width} y2={height} stroke={`black`} />
        {ticks.map( tickValue => {
            return <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${height})`}>
                    <line y2={5} stroke={"black"} />
                    <text style={{ textAnchor:'middle', fontSize:'18px'}} y={20}>
                    {tickValue}
                    </text>
            </g> 
        })}
        <text style={{ textAnchor:'end', fontSize:'18px'}} transform={`translate(${width}, ${height-10})`}>
                        {"Waiting"}
                    </text>
        </g>
}