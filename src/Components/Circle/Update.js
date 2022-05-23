import * as d3 from 'd3';

const Update = (refcur, controlState) => {

    if(controlState === 'false'){
        d3.select(refcur)
        .selectAll('circle')
        .transition()
        .duration(1000)
        .attr("cx", 250)
    } else {
        d3.select(refcur)
        .selectAll('circle')
        .transition()
        .duration(1000)
        .attr("cx", 100)
    }
}

export default Update;