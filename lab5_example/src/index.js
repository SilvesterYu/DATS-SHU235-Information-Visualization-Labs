import React from "react";
import ReactDOM from "react-dom";
import { csv } from 'd3';
import { ScatterPlot } from "./scatterplot";
import { Tooltip } from "./tooltip";

const csvUrl = "https://gist.githubusercontent.com/hogwild/c2704a1ae38c0a36983bc13121050dac/raw/7fd577be21752939375d92cd3a808558106e903b/oldFaithfulGeyserDataset.csv"

function useData(csvPath){
    const [dataAll, setData] = React.useState(null);
    React.useEffect(()=>{
        csv(csvPath).then(data => {
            data.forEach(d => {
                d.index = +d.index;
                d.eruptions = +d.eruptions;
                d.waiting = +d.waiting;
            });
            setData(data);
        });
    }, []);
    return dataAll;
}

function Charts(){
    const WIDTH = 800;
    const HEIGHT = 600;
    const margin = {top: 100, bottom: 100, left: 100, right: 100};
    const height = HEIGHT - margin.top - margin.bottom;
    const width = WIDTH - margin.left - margin.right;
    const data = useData(csvUrl);
    
        if (!data) {
            return <pre>Loading...</pre>;
        };
    //console.log(data);

    return <div>
        <h1>Scatter Plot</h1>
        <svg width={WIDTH} height={HEIGHT}>
            <ScatterPlot data={data} offsetX={margin.left} offsetY={margin.right} height={height} width={width}/>
        </svg>
        
    </div>

}

ReactDOM.render(<Charts/>, document.getElementById('root'));