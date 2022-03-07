import { eyes } from "./eyes.js";

const WIDTH=960;
const HEIGHT=600;
const FACERADIUS=300;
const EYERADIUS=30;

const svg = d3.select('body')
    .append('svg')
    .attr('width', WIDTH)
    .attr('height', HEIGHT);

const faceBackground = svg.append('g')
    .attr('transform', `translate(${WIDTH/2}, ${HEIGHT/2})`)
    .attr('stroke', 'black')
    .attr('stroke-width', '3px');

const face = faceBackground.append('circle')
    .attr('r', FACERADIUS)
    .attr('fill', 'yellow');

// after doing the below (wrapping, use eyes objects)
eyes(faceBackground, EYERADIUS);


// wrap it all up into another file eyes.js
// and then import it at the beginning of this script
/*
const eye_left = faceBackground.append('g')
    .attr('transform', `translate(${-130}, ${-100})`)
    .append('circle')
    .attr('r', EYERADIUS)
    .attr('fill', 'black')

const eye_right = faceBackground.append('g')
    .attr('transform', `translate(${130}, ${-100})`)
    .append('circle')
    .attr('r', EYERADIUS)
    .attr('fill', 'black')
*/

const nose = faceBackground.append('g')
    //.attr('transform', `translate(${WIDTH/2}, ${-50})`)
    .append('line')
    .attr('x1', 0)
    .attr('y1', '-50')
    .attr('x2', 0)
    .attr('y2', 50)
    .attr('stroke-width', '20px');

// console.log(d3.arc({
//     innerRadius: 150,
//     outerRadius: 170,
//     startAngle: 0,
//     endAngle: Math.PI/2
// }));
const mouth = faceBackground.append('g')
    // .attr('transform', `translate(${WIDTH/2}, ${-50})`)
    .append('path')
    .attr('d', d3.arc()({
        innerRadius: 170,
        outerRadius: 190,
        startAngle: Math.PI*2/3,
        endAngle: Math.PI*4/3
    })) ;

const eyebrows_right = faceBackground.append('g')
    .attr('transform', `translate(${100}, ${-160})`);
eyebrows_right.append('rect')
    .attr('width', 60)
    .attr('height', 20)
    .attr('fill', 'black');

const eyebrows_left = faceBackground.append('g')
    .attr('transform', `translate(${-160}, ${-160})`);
eyebrows_left.append('rect')
    .attr('width', 60)
    .attr('height', 20)
    .attr('fill', 'black');

eyebrows_left
    .transition().duration(2000)
    .attr('transform', 'translate(-160, -210)')
    .transition().duration(2000)
    .attr('transform', 'translate(-160, -160)');





