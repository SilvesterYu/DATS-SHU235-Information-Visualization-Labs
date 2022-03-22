import React from "react";

export function Points(props) {
    
    const {data, xScale, yScale} = props;
    return <g>
            {data.map(d => {
                return <circle key={d.index} cx={xScale(d.waiting)} 
                cy={yScale(d.eruptions)} r={5} fill={"steelblue"} stroke={"black"}/>
            })}
        </g>
}

// (1) 


//     const {data, xScale, yScale, height, width} = props;
//     const [selectedPoint, setSelectedPoint] = React.useState(null);
//     const [tooltipX, setTooltipX] = React.useState(null);
//     const [tooltipY, setTooltipY] = React.useState(null);

//     const mouseOver = (event) => {
//         setSelectedPoint(d.index);
//         console.log(event)
//         setTooltipX(event.pageX);
//         setTooltipY(event.pageY);
//     };
//     const mouseOut = () => {
//         setSelectedPoint(null);
//         setTooltipX(null);
//         setTooltipY(null);
//     };
//     const color = d => d.index === selectedPoint ? "red" : "steelblue";
//     const radius = d => d.index === selectedPoint ? 10 : 5;

//     if (selectedPoint === null) {
//         return <g>
//             {data.map(d => {
//                 return <circle key={d.index} cx={xScale(d.waiting)} 
//                 cy={yScale(d.eruptions)} r={5} fill={"steelblue"} stroke={"black"}
//                 onMouseOver={mouseOver} onMouseOut={mouseOut}/>
//             })}
//         </g>
//     } else {
//         return <g>
//             {data.map(d => {
//                 return <circle key={d.index} cx={xScale(d.waiting)} 
//                 cy={yScale(d.eruptions)} r={radius(d)} fill={color(d)} stroke={"black"}
//                 onMouseOver={() => mouseOver(d)} onMouseOut={mouseOut}/>
//             })}
//             <rect x={0} y={0} width={width} height={height} fill={"lightgreen"} opacity={0.6}/>
//             {data.filter(d => d.index === selectedPoint).map( d => {
//                 return <circle key={d.index} cx={xScale(d.waiting)} 
//                 cy={yScale(d.eruptions)} r={radius(d)} fill={color(d)} stroke={"black"}
//                 onMouseOver={mouseOver} onMouseOut={mouseOut}/>
//             })}
           
//         </g>}
// }