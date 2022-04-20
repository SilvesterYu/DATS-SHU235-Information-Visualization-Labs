import React from "react";
import * as d3 from "d3";

export function StackedAreaChart(props){
    const {x, y, width, height, data} = props;

    const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; 
    data.forEach(d => {d.week = d.date.slice(-2); d.weekday = d.date.slice(0, 3)});
    let weeks = d3.groups(data, d => d.week);
    console.log(weeks);
    let weeklyData = [];
    for (let i=0; i<weeks.length; i++){
        let item = {week:weeks[i][0]};
            for (let j=0; j<weekdays.length; j++){
                for (let k=0; k<weeks[i][1].length; k++){
                    // console.log("weeks", weeks[i][1][k]);
                    // console.log(weekdays[j]);
                    if(weeks[i][1][k].weekday === weekdays[j]){
                        item[weekdays[j]] = weeks[i][1][k].value;
                    }
            }
        }
        weeklyData.push(item);
    }
    
    console.log(weeklyData);
    // const xScale = d3.scaleBand().range([0, width]).domain(data.map(d => d.date));
    // const yScale = d3.scaleLinear().range([height, 0]).domain([0, d3.max(data, d => d.value)]).nice();
    // const area = d3.area()
    //         .x(d => xScale(d.date))
    //         .y0(height)
    //         .y1(d => yScale(d.value))
    //         .curve(d3.curveStep)(data);
    
    const stack = d3.stack()
            .keys(weekdays)
            .order(d3.stackOrderNone)
            .offset(d3.stackOffsetNone);
    console.log(stack(weeklyData));

    return <g transform={`translate(${x},${y})`}>
        {/* {<line x1={0} y1={height} x2={width} y2={height} stroke='black'/>}
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
        </text> */}

    </g>
}