import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";

const csvUrl = "https://gist.githubusercontent.com/hogwild/4a23b2327e88e6e3aa101bb01ddb28ba/raw/81fd842af7328d2ad6d2a498cc4589031ae5b4af/citibike_rawdata_2020_4.csv"
function useData(csvPath){
    const [dataAll, setData] = React.useState(null);
    React.useEffect(() => {
        d3.csv(csvPath).then(data => {
            setData(data);
        });
    }, []);
    return dataAll;
}

function Graph(props) {
    const { x, y, width, height, data} = props;
    const d3Selection = React.useRef();

    // let rawLinks = [];
    //     data.forEach( d => {
    //         if (d["start station id"] && d["end station id"]) {
    //             rawLinks.push({source: d["start station id"], target: d["end station id"]})
    //         }
    //     });
    // console.log(rawLinks);
    // let links = rawLinks.reduce( (acc, curr) => {
    //         const idx = acc.findIndex( d => d.target === curr.target && d.source === curr.source 
    //             || d.target === curr.source && d.source === curr.target );
    //         if(idx === -1){
    //             acc.push({source: curr.source, target: curr.target, value: 1});
    //         } else {
    //             acc[idx].value += 1;    
    //         }
    //         return acc;
    //     }, []);
    // console.log(links);
        let nodes = d3.groups(data, d => d["end station id"])
                .map( d => {return {id: d[0], name: d[1][0]["end station name"], value:d[1].length}});
        //  console.log(nodes);
    
        const radius = d3.scaleLinear().range([1, 100])
                .domain([d3.min(nodes, d => d.value), d3.max(nodes, d => d.value)]);
            const color = (id) => {
                const n = +id[1];
                return d3.schemeCategory10[n];
            };
    React.useEffect( () => {
        let g = d3.select(d3Selection.current);
        const simulation = d3.forceSimulation(nodes);
        simulation
            .velocityDecay(0.2)
            .force("x", d3.forceX([width/2]).strength(0.02))
            .force("y", d3.forceY([height/2]).strength(0.02))
            .force("collide", d3.forceCollide().radius(d => radius(d.value)))
            .tick(1000)

        const node = g.append("g")
            .attr("stroke", "#fff")
            .attr("stroke-width", 1.5)
            .selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("r", d => radius(d.value))
            // .attr("fill", "steelblue")
            .attr("fill", d => color(d.id))
            .call(drag(simulation));

            simulation.on("tick", () => {
                node
                    .attr("cx", d => d.x)
                    .attr("cy", d => d.y);
            });

        function drag (simulation){
            function dragstarted(event) {
                console.log(event.subject);
                if (!event.active) simulation.alphaTarget(0.3).restart();
                event.subject.fx = event.subject.x;
                event.subject.fy = event.subject.y;
            }
            function dragged(event) {
                event.subject.fx = event.x;
                event.subject.fy = event.y;
            }
            function dragended(event) {
                if (!event.active) simulation.alphaTarget(0);
                event.subject.fx = null;
                event.subject.fy = null;
            }
            return d3.drag()
                .on("start", dragstarted)
                .on("drag", dragged)
                .on("end", dragended);
        };

    }, [width, height])
    return <g ref={d3Selection} transform={`translate(${x}, ${y})`}>
    </g>
}

const App = () => {
    const WIDTH = 800;
    const HEIGHT = 600;
    const margin = { top: 20, right: 40, bottom: 20, left: 40 };
    const width = WIDTH - margin.left - margin.right;
    const height = HEIGHT - margin.top - margin.bottom;
    const rawData = useData(csvUrl);
    if (!rawData) {
        return <p>Loading...</p>
    } 
    // console.log(rawData);
    return <svg width={WIDTH} height={HEIGHT}>
        <Graph x={margin.left} y={margin.right} width={width} height={height} data={rawData}/>
        </svg>
}
ReactDOM.render( <App />, document.getElementById('root'));