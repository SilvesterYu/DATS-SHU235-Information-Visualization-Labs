import React from "react";


export function Tooltip(props) {
    const {d, left, top} = props;
    console.log(left, top);
    if (left === null) {
        return <div></div>;
    } else {
        const divStyle = {
            position: "absolute",
            textAlign: "left",
            width: "100px",
            height: "60px",
            padding: "2px",
            font: "12px sans-serif",
            background: "yellow",
            border: "0px",
            borderRadius: "8px",
            pointerEvents: "none",
            // left: `${left+10}px`,
            // top: `${top}px`

            //(2) to move it to the coordinates of the mouse
            left: "0px",
            top: "0px"
        };
        return <foreignObject x={left} y={top} width="160" height="160">
            <div style={divStyle} >
            <p>Eruption: {d.eruptions}</p>
            <p>Waiting: {d.waiting} </p>
            </div>
        </foreignObject>
    };  
}