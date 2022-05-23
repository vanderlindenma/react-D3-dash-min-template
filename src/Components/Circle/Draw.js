import * as d3 from 'd3';

const Draw = (refcur) => {
    console.log("DRAWING!")

    let svg = d3.select(refcur)
                .append('svg')
                .attr('width', 1000)
                .attr('height',200)

    svg.append("circle")
    .attr("r", 50)
    .attr("cx", 100)
    .attr("cy", 100)
    .style("fill", "blue");
}

export default Draw;