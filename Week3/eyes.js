
export let eyes = (faceBackground, EYERADIUS) => {
// the above line exports a FUNCTION
// the whole thing is put into a function
// remember to add the parameters below as function inputs

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
};