import React from "react";
import { XAxis } from "./xaxis";
import { YAxis } from "./yaxis";
import { Points } from "./points";
import { Scales } from "./scale";
import { max } from "d3";


export function ScatterPlot (props) {
    const {data, offsetX, offsetY, width, height } = props;
    const xScale = Scales.linear(0, max(data, d => d.waiting), 0, width);
    const yScale = Scales.linear(0, max(data, d => d.eruptions), height, 0);
    // console.log(xScale);
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        <XAxis xScale={xScale} width={width} height={height}/>
        <YAxis yScale={yScale} height={height}/>
        <Points data={data} xScale={xScale} yScale={yScale} width={width} height={height}/>
    </g>
}