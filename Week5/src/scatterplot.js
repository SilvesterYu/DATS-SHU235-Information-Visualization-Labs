import React from "react";
import { XAxis } from "./xaxis";
import { YAxis } from "./yaxis";
import { Points } from "./points";
import { Scales } from "./scale";
import { max } from "d3";


export function ScatterPlot (props) {
    //(2) add attributes here (last 3)
    const {data, offsetX, offsetY, width, height, selectedPoint, mouseOver, mouseOut} = props;
    const xScale = Scales.linear(0, max(data, d => d.waiting), 0, width);
    const yScale = Scales.linear(0, max(data, d => d.eruptions), height, 0);
    // console.log(xScale);
    //(2) pass those 3 attr to Points/>
    return <g transform={`translate(${offsetX}, ${offsetY})`}>
        <XAxis xScale={xScale} width={width} height={height}/>
        <YAxis yScale={yScale} height={height}/>
        <Points data={data} xScale={xScale} yScale={yScale} width={width} height={height}
            selectedPoint={selectedPoint} mouseOver={mouseOver} mouseOut={mouseOut}/>
    </g>
}