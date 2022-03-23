import React from "react";


export function YAxis(props) {
    const {yScale, height} = props;
    const ticks = yScale.ticks();
    return <g>
        <line y2={height} stroke={`black`} />
        {ticks.map( tickValue => {
            return <g key={tickValue} transform={`translate(-10, ${yScale(tickValue)})`}>
                    <line x2={10} stroke={"black"} />
                    <text style={{ textAnchor:'end', fontSize:'18px' }}>
                    {tickValue}
                    </text>
                </g> 
        })}
        <text style={{ textAnchor:'start', fontSize:'18px'}} transform={`translate(10, 0)rotate(0)`}>
                {"Eruption duration"}
            </text>
    </g>   
}