import React from "react";
import * as d3 from "d3";

export function AreaChart(props){
    const {x, y, width, height, data} = props;
    const xScale = d3.scaleBand().range([0, width]).domain(data.map(d => d.date));
    const yScale = d3.scaleLinear().range([height, 0]).domain([0, d3.max(data, d => d.value)]).nice();
    const area = d3.area()
            .x(d => xScale(d.date))
            .y0(height)
            .y1(d => yScale(d.value))
            .curve(d3.curveStep)(data);

    return <g transform={`translate(${x},${y})`}>
        {<line x1={0} y1={height} x2={width} y2={height} stroke='black'/>}
        {<line y2={height} stroke='black'/>}
        {xScale.domain().map(tickValue =>
            <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${height})`}>
                <line y2={10} stroke='black' />
                <text style={{textAnchor: 'middle', fontSize:'10px' }} y={20}>
                    {tickValue}
                </text>
            </g>
        )}
        {yScale.ticks(5).map(tickValue => 
            <g key={tickValue} transform={`translate(-10, ${yScale(tickValue)})`}>
                <line x2={10} stroke='black' />
                <text style={{ textAnchor:'end', fontSize:'10px' }} >
                    {tickValue}
                </text>
            </g>
        )}
        <path className={'area-path'} d={area} fill={"lightgrey"} stroke={"black"} />
        <text style={{ textAnchor:'end', fontSize:'18px'}} transform={`translate(${width}, ${height-10})`}>
            {"April"}
        </text>

    </g>
}