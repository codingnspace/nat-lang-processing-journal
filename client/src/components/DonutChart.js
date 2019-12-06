import React from 'react'
import * as d3 from 'd3'
import './ChatBox.css'


const data = [
    {
        label: 'Office Supplies',
        spending: 460,
    },
    {
        label: 'Transportation',
        spending: 95,
    },
    {
        label: 'Business Services',
        spending: 300,
    },
    {
        label: 'Restaurant',
        spending: 400,
    },
    {
        label: 'Entertainment',
        spending: 220,
    },
    {
        label: 'Travel',
        spending: 1000,
    },
    {
        label: 'Other',
        spending: 125.0,
    },
];

const colors = ['#FFCA19', '#FF7142', '#57B54E', '#1AB4D4', '#4EDDCE', '#B577CE', '#CBF39A']
const width = 571,
    chartWidth = 189,
    chartHeight = 189,
    height = 378,
    radius = Math.min(chartWidth, chartHeight) / 2,
    innerRadius = radius - radius + 50;

const formatter = d3.format('$,');

export default class DonutChart extends React.Component {
    componentDidMount() {
        const svg = d3.select('#donut-chart')
            .attr('width', width)
            .attr('height', height);

        const arc = d3.arc()
            .innerRadius(innerRadius)
            .outerRadius(radius);

        const pie = d3.pie().value(d => d.spending)

        const arcGroup = svg
            .append('g')
            .attr('transform', `translate(${chartWidth / 2},${chartHeight / 2})`)
            .attr('class', 'arc-group');

        arcGroup
            .selectAll('.arc')
            .data(pie(data))
            .enter()
            .append('g')
            .attr('class', 'arc-group')
            .append('path')
            .attr('role', 'presentation')
            .attr('class', 'arc')
            .attr('d', arc)
            .attr('fill', (d, i) => colors[i])
            .on('mousemove', () => {
                const { clientX, clientY } = d3.event
                d3.select('.tooltip')
                    .attr('transform', `translate(${clientX} ${clientY})`)
            })
            .on('mouseenter', d => {
                d3.select('.tooltip').append('text')
                    .text(`${d.data.label} - $${d.data.spending}`)
            })
            .on('mouseleave', () => d3.select('.tooltip text').remove())

        const tooltipGroup = svg
            .append('g')
            .attr('class', 'tooltip')

        const legendGroup = svg
            .append('g')
            .attr('transform', `translate(${chartWidth} 0)`)
            .attr('class', 'legend-group')

        const legendItems = legendGroup
            .selectAll('g')
            .data(data)
            .enter()
            .append('g')
            .attr('role', 'presentation')
            .attr('transform', (d, i) => `translate(20 ${(i + 1) * 30})`)

        legendItems.append('rect')
            .attr('role', 'presentation')
            .attr('y', -13)
            .attr('width', 15)
            .attr('height', 15)
            .attr('fill', (d, i) => colors[i])

        legendItems.append('text')
            .attr('x', 20)
            .text(d => `${d.label} - $${d.spending}`)
    }
    render() {
        console.log('donut chart')
        return (
            <svg id="donut-chart"></svg>
        )
    }
}
