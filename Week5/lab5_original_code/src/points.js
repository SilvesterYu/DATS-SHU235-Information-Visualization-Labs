import React from "react";
import { Tooltip } from "./tooltip";

export function Points(props) {
    
//     const {data, xScale, yScale} = props;
//     return <g>
//             {data.map(d => {
//                 return <circle key={d.index} cx={xScale(d.waiting)} 
//                 cy={yScale(d.eruptions)} r={5} fill={"steelblue"} stroke={"black"}/>
//             })}
//         </g>
// }
    const {data, xScale, yScale, height, width} = props;
    const [selectedPoint, setSelectedPoint] = React.useState(null);
    const [tooltipX, setTooltipX] = React.useState(null);
    const [tooltipY, setTooltipY] = React.useState(null);

    const mouseOver = (d) => {
        setSelectedPoint(d);
        console.log("mouseOver here");
        setTooltipX(xScale(d.waiting));
        setTooltipY(yScale(d.eruptions));
    };
    const mouseOut = () => {
        setSelectedPoint(null);
        console.log("mouseOut here");
        setTooltipX(null);
        setTooltipY(null);
    };
    const color = d => d.index === selectedPoint.index ? "red" : "steelblue";
    const radius = d => d.index === selectedPoint.index ? 10 : 5;

    if (selectedPoint === null) {
        return <g>
            {data.map(d => {
                return <circle key={d.index} cx={xScale(d.waiting)} 
                cy={yScale(d.eruptions)} r={5} fill={"steelblue"} stroke={"black"}
                onMouseOver={() => mouseOver(d)} onMouseOut={mouseOut}/>
            })}
        </g>
    } else {
        return <g>
            {data.map(d => {
                return <circle key={d.index} cx={xScale(d.waiting)} 
                cy={yScale(d.eruptions)} r={radius(d)} fill={color(d)} stroke={"black"}
                onMouseOver={() => mouseOver(d)} onMouseOut={mouseOut}/>
            })}
            <rect x={0} y={0} width={width} height={height} fill={"lightgreen"} opacity={0.6}/>
            {data.filter(d => d.index === selectedPoint.index).map( d => {
                return <circle key={d.index} cx={xScale(d.waiting)} 
                cy={yScale(d.eruptions)} r={radius(d)} fill={color(d)} stroke={"black"}
                onMouseOver={()=>{mouseOver(d)}} onMouseOut={mouseOut}/>
            })}
        <Tooltip d={selectedPoint} left={tooltipX} top={tooltipY}/>
        </g>}
}