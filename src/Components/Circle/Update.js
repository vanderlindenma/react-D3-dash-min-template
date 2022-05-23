import * as d3 from 'd3';

const Update = (refcur) => {

    console.log("UPDATING!")

    d3.select(refcur)
        .selectAll('circle')
        .transition()
        .duration(1000)
        .attr("cx", 250)
}

export default Update;