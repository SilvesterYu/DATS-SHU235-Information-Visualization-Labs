import React from "react";
import { Tooltip } from "./tooltip";
import { scaleLinear, scaleBand } from "d3";


export function Points(props) {
    
//     const {data, xScale, yScale} = props;
//     return <g>
//             {data.map(d => {
//                 return <circle key={d.index} cx={xScale(d.waiting)} 
//                 cy={yScale(d.eruptions)} r={5} fill={"steelblue"} stroke={"black"}/>
//             })}
//         </g>
// }

    //(2) 3 new attr
    const {data, xScale, yScale, height, width, selectedPoint, mouseOver, mouseOut} = props;

    const color = d => d.index === selectedPoint.index ? "red" : "steelblue";
    const radius = d => d.index === selectedPoint.index ? 10 : 5;

    if (selectedPoint === null) {
        return <g>
            {data.map(d => {
                return <circle key={d.index} cx={xScale(d.waiting)} 
                cy={yScale(d.eruptions)} r={5} fill={"steelblue"} stroke={"black"}
                onMouseOver={(event)=>{
                    //(4) add parameter event
                    // d is actually obtained from data.filter, from map(d=>
                    // event is obtained by onMouseOver, but d is outside of that. So we wrap it up with a function
                    let point = d;
                    mouseOver(event, point)}} onMouseOut={mouseOut}/>
            })}
        </g>
    } else {
        return <g>
            {data.map(d => {
                return <circle key={d.index} cx={xScale(d.waiting)} 
                cy={yScale(d.eruptions)} r={radius(d)} fill={color(d)} stroke={"black"}
                onMouseOver={(event)=>{
                    //(4) add parameter event
                    let point = d;
                    mouseOver(event, point)}} onMouseOut={mouseOut}/>
                
            })}
            <rect x={0} y={0} width={width} height={height} fill={"lightgreen"} opacity={0.6}/>
            {data.filter(d => d.index === selectedPoint.index).map( d => {
                console.log("pointttttttt");
                return <circle key={d.index} cx={xScale(d.waiting)} 
                cy={yScale(d.eruptions)} r={radius(d)} fill={color(d)} stroke={"black"}
                onMouseOver={(event)=>{
                    //(4) add parameter event
                    let point = d;
                    mouseOver(event, point)}} onMouseOut={mouseOut}/>
            })}
                </g>}
}