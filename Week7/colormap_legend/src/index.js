import React from "react";
import ReactDOM from "react-dom";
import { Cell } from "./cell";
import { csv, min, max, median, interpolateGnBu, interpolateRdBu, mean } from "d3";
import { Scales } from "./scale";
import { Legend } from "./legend";


const csvUrl = 'https://gist.githubusercontent.com/hogwild/3b9aa737bde61dcb4dfa60cde8046e04/raw/citibike2020.csv'

function useData(csvPath){
    const [dataAll, setData] = React.useState(null);
    React.useEffect(() => {
        csv(csvPath).then(data => {
            data.forEach(d => {
                d.start = +d.start;
                d.tripdurationS = +d.tripdurationS;
                d.end = +d.end;
                d.tripdurationE = +d.tripdurationE;
            });
            setData(data);
        });
    }, []);
    return dataAll;
}


function removeDuplicateStation(data){
    const temp = data.map(d => d.station);
    return temp.filter( (d, idx) =>  temp.indexOf(d) === idx);
};

function HeatMap(){
    const WIDTH = 900;
    const HEIGHT = 400;
    const margin = {top: 200, right: 40, bottom: 50, left: 60};
    const height = HEIGHT - margin.top - margin.bottom;
    const width = WIDTH - margin.left - margin.right;
    const data = useData(csvUrl);
    if(!data){
        return <pre>Loading...</pre>
    }
    // console.log(data);

    const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const STATION = removeDuplicateStation(data);
    // console.log(STATION);
    const xScale = Scales.band(STATION, 0, width);
    const yScale = Scales.band(MONTH, 0, height);
    const startRange = [min(data, d => d.start), median(data, d => d.start), max(data, d => d.start)];
    const colorRange = [interpolateGnBu(0), interpolateGnBu(0.5), interpolateGnBu(0.8)];
    // const colormap = Scales.colormapLiner(startRange, colorRange);
    // const colormap = Scales.colorSequential(startRange, interpolateGnBu);
    const colormap = Scales.colorDiverging(startRange, interpolateRdBu);
    return <svg width={WIDTH} height={HEIGHT}>
        <g transform={`translate(${margin.left}, ${margin.top})`}>
        {
            data.map( d => {
                return <Cell key={d.station+d.month} d={d} xScale={xScale} yScale={yScale} color={colormap(d.start)} />
            } )
        }
        {STATION.map(s => {
                        return <g key={s} transform={`translate(${xScale(s)+5},-8)rotate(60)`}>
                        <text style={{textAnchor:'end'}}>{s}</text>
                        </g>
                    })}
        {MONTH.map(m => {
                    return <text key={m} style={{textAnchor:'middle'}} x={-30} y={yScale(m)+10}>{m}</text>
                })}
        <Legend x={0} y={height+10} width={width/2} height={20} numberOfTicks={5} 
        rangeOfValues={[min(data, d => d.start), max(data, d => d.start)]} colormap={colormap}/>
        </g>
        
    </svg>
};

ReactDOM.render(<HeatMap/>, document.getElementById('root'));