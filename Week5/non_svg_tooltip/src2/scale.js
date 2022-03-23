import { scaleLinear, scaleBand } from "d3";

export const Scales = {
    linear: (min_value, max_value, start_pos, end_pos) => {
        console.log('the linear scale for scatter plot/bar chart');
        return scaleLinear()
            .range([start_pos, end_pos])
            .domain([min_value, max_value])
            .nice();
        },
    band: (stations, start_pos, end_pos) => {
        console.log('the x scale for the bar chart');
        // console.log(stations);
        return scaleBand()
        .range([start_pos, end_pos])
        .domain(stations);
    }
}