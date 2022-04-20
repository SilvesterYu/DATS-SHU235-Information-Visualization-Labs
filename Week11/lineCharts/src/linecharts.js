import React from "react";
import * as d3 from "d3";

export {LineChart, MultipleLineChart};

function LineChart(props){
    const {x, y, width, height, data} = props;
    // console.log(data.map(d => d.date))
    // data.forEach(d => d.date = new Date("4/"+d.date+"/2020"));
    // const xScale = d3.scaleTime().range([0, width])
    //             .domain(data.map(d => d.date))
    // const formatTime = d3.timeFormat("%B %d, %Y");
    // const xTicks = xScale.ticks(30).map(d => formatTime(d));
    // console.log(xTicks);
    // const parseTime = d3.timeParse("%B %d, %Y");

    const xScale = d3.scaleBand().range([0, width])
                .domain(data.map(d => d.date));
    const yScale = d3.scaleLinear().range([height, 0])
                .domain([0, d3.max(data, d => d.value)]).nice();
    const line = d3.line()
                .x(d => xScale(d.date))
                .y(d => yScale(d.value))
                .curve(d3.curveBasis);

    const xTicks = xScale.domain();
    const yTicks = yScale.ticks();

    return <g transform={`translate(${x},${y})`}>
        <line y2={height} stroke={`black`} />
        {yTicks.map( tickValue => {
            return <g key={tickValue} transform={`translate(-10, ${yScale(tickValue)})`}>
                    <line x2={width} stroke={"gray"} />
                    <text style={{ textAnchor:'end', fontSize:'18px' }}>
                    {tickValue}
                    </text>
                </g> 
        })}
        <text style={{ textAnchor:'start', fontSize:'18px'}} transform={`translate(10, 0)rotate(0)`}>
                {"Number of riders"}
            </text>
        <line x1={0} y1={height} x2={width} y2={height} stroke={`black`} />
        {xTicks.map( tickValue => {
            return <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${height})`}>
                    <line y2={5} stroke={"black"} />
                    <text style={{ textAnchor:'middle', fontSize:'18px'}} y={20}>
                    {tickValue}
                    </text>
            </g> 
        })}
        <text style={{ textAnchor:'end', fontSize:'18px'}} transform={`translate(${width}, ${height-10})`}>
                        {"April"}
                    </text>
        <path d={line(data)} stroke={"steelblue"} strokeWidth={3} fill={"none"} />
        </g>
}

function MultipleLineChart(props){
    const {x, y, width, height, data} = props;
        const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]; 
        const xScale = d3.scaleBand().range([0, width]).domain(weekdays);
        const yScale = d3.scaleLinear().range([height, 0]).domain([0, d3.max(data, d => d.value)]).nice();
        const line = d3.line().x(d => xScale(d.date)).y(d => yScale(d.value));
        const xTicks = xScale.domain();
        const yTicks = yScale.ticks();
        // console.log(data.filter( d => d.date.slice(-2) === "14").map(d => {d.date = d.date.slice(0, 3); return d})
        //     .sort((a, b) => weekdays.indexOf(a.date)-weekdays.indexOf(b.date)));
        const week1 = data.filter( d => d.date.slice(-2) === "13").map(d => {d.date = d.date.slice(0, 3); return d})
                .sort((a, b) => weekdays.indexOf(a.date)-weekdays.indexOf(b.date));
        const week2 = data.filter( d => d.date.slice(-2) === "14").map(d => {d.date = d.date.slice(0, 3); return d})
                .sort((a, b) => weekdays.indexOf(a.date)-weekdays.indexOf(b.date));
        const week3 = data.filter( d => d.date.slice(-2) === "15").map(d => {d.date = d.date.slice(0, 3); return d})
                .sort((a, b) => weekdays.indexOf(a.date)-weekdays.indexOf(b.date));
        const week4 = data.filter( d => d.date.slice(-2) === "16").map(d => {d.date = d.date.slice(0, 3); return d})
                .sort((a, b) => weekdays.indexOf(a.date)-weekdays.indexOf(b.date));
        const week5 = data.filter( d => d.date.slice(-2) === "17").map(d => {d.date = d.date.slice(0, 3); return d})
                .sort((a, b) => weekdays.indexOf(a.date)-weekdays.indexOf(b.date));
        console.log(week1.slice(-1));
        return <g transform={`translate(${x},${y})`}>
            <line y2={height} stroke={`black`} />
            {yTicks.map( tickValue => {
                return <g key={tickValue} transform={`translate(-10, ${yScale(tickValue)})`}>
                        <line x2={width} stroke={"gray"} />
                        <text style={{ textAnchor:'end', fontSize:'18px' }}>
                        {tickValue}
                        </text>
                    </g> 
            })}
            <text style={{ textAnchor:'start', fontSize:'18px'}} transform={`translate(10, 0)rotate(0)`}>
                    {"Number of riders"}
                </text>
            <line x1={0} y1={height} x2={width} y2={height} stroke={`black`} />
            {xTicks.map( tickValue => {
                return <g key={tickValue} transform={`translate(${xScale(tickValue)}, ${height})`}>
                        <line y2={5} stroke={"black"} />
                        <text style={{ textAnchor:'middle', fontSize:'18px'}} y={20}>
                        {tickValue}
                        </text>
                </g> 
            })}
            <text style={{ textAnchor:'end', fontSize:'18px'}} transform={`translate(${width}, ${height-10})`}>
                            {"April"}
                </text>
            <path d={line(week1)} stroke={"#d7191c"} strokeWidth={3} fill={"none"} />
            <path d={line(week2)} stroke={"#fdae61"} strokeWidth={3} fill={"none"} />
            <path d={line(week3)} stroke={"black"} strokeWidth={3} fill={"none"} />
            <path d={line(week4)} stroke={"#abdda4"} strokeWidth={3} fill={"none"} />
            <path d={line(week5)} stroke={"#2b83ba"} strokeWidth={3} fill={"none"} />
            <text style={{ textAnchor:'end', fontSize:'18px'}} transform={`translate(${xScale(week1.slice(-1)[0].date)}, ${yScale(week1.slice(-1)[0].value)})`}>
                            {"Week 1"}
                </text>
            <text style={{ textAnchor:'end', fontSize:'18px'}} transform={`translate(${xScale(week2.slice(-1)[0].date)}, ${yScale(week2.slice(-1)[0].value)})`}>
                            {"Week 2"}
                </text>
            <text style={{ textAnchor:'end', fontSize:'18px'}} transform={`translate(${xScale(week3.slice(-1)[0].date)+60}, ${yScale(week3.slice(-1)[0].value)+10})`}>
                            {"Week 3"}
            </text>
            <text style={{ textAnchor:'end', fontSize:'18px'}} transform={`translate(${xScale(week4.slice(-1)[0].date)+60}, ${yScale(week4.slice(-1)[0].value)+10})`}>
                            {"Week 4"}
            </text>
            <text style={{ textAnchor:'end', fontSize:'18px'}} transform={`translate(${xScale(week5.slice(-1)[0].date)+60}, ${yScale(week5.slice(-1)[0].value)+10})`}>
                            {"Week 5"}
            </text>

            </g>

}