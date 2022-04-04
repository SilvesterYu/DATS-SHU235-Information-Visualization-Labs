import React from "react";

export function Points(props){
        
    // -- Task 1.1 -- //
    // properties of points
    const{data, xScale, yScale} = props;

    // -- Task1.3 -- //
    // mouse interaction and hook

    // set a hook representing the state name of the point where the mouse is hovering over.
    const [selectedPoint, setSelectedPoint] = React.useState(null);

    // adding onMouseEnter and onMouseOut properties
    const mouseOver = (d) => {
        // console.log("mouseEnter");
        // console.log(d);
        setSelectedPoint(d);
    }

    const mouseOut = () => {
        // console.log("mouseOut");
        setSelectedPoint(null);
    }

    //const color = d => d.index === selectedPoint.index ? "red" : "steelblue";
    //const radius = d => d.index === selectedPoint.index ? 10 : 5;

    //complete the getColor and getRadius when you are asked to
    const getColor = (d) => {
        if (d === selectedPoint) {
            return 'red';
        } else{
            return 'steelblue'; 
        }
    }
    const getRadius = (d) => {
        if (d === selectedPoint){
            return 10;
        } else {
            return 5;
        }
    }
    
    // return differently for different mouse events

    console.log(selectedPoint);
    if (selectedPoint === null) {
        return <g>
            {data.map(d=>{
                //console.log(d.index);
                return <circle key={d.index} onMouseEnter={()=>{mouseOver(d)}} onMouseOut={mouseOut}  cx={xScale(d.waiting)} cy={yScale(d.eruptions)} r={5} fill={"green"} stroke={"black"}/>
            })}
        </g>
    } else {
        console.log("***************");
        return <g>
            {data.map(d=>{
                console.log(d.index);
                return <circle onMouseEnter = {()=>{mouseOver(d)}} onMouseOut = {mouseOut} key={d.index} cx={xScale(d.waiting)} cy={yScale(d.eruptions)} r={5} fill={"green"} stroke={"black"}/>
            })

            }
            <rect x={0} y={0} width={10} height={10} fill={"steelblue"} opacity={0.6}/>
            {data.filter(d=>d === selectedPoint).map(d=>{
                            return <circle onMouseEnter={()=>{mouseOver(d)}} onMouseOut={mouseOut}
                            key={d.index} cx={xScale(d.waiting)} cy={yScale(d.eruptions)}
                            r={10} fill={"pink"} stroke={"black"}/> 
                        })}
        </g>
    }

}