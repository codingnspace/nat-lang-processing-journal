import React from 'react'
import d3ConcentricCircles from 'd3-concentric-circles';

const Circle = ({size, color, style}) => {
    return (
        <svg height={size} width={size} className="Circle" style={{...style}}>
            <circle cx={size / 2} cy={size / 2} r={(size / 2) - 10} stroke="black" stroke-width="3" fill={color} />
        </svg>
    )
}

const debts = [125, 877, 4800, 7394, 10296]
const debtSum = debts.reduce((acc, value) => {
    return acc + value
})
const debtPercents = debts.map(value => {
    return (value / debtSum).toFixed(3)
})

const debtProps = debtPercents.map((value, idx) => {
    return (value / debtPercents[0])
})
// console.log(debtProps, 'debt props')
const convertValueToRadius = (values = debtProps) => {
    // Take the array of values and return an array of radiuses
    return values.reduce((acc, value, idx, srcArrr) => {
        // 1. Find the proportion
        
        if (idx === 0) {
            acc = acc.concat(80)
            return acc
        }
        // console.log(acc, 'Acc 1')
        const prevValue = srcArrr[idx-1]
        const proportions = (value / prevValue).toFixed(1) > 3 ? 3 : (value / prevValue).toFixed(1)
        // use the proportion to multiple the prev value by
        const final = idx === 0 ? 80 : Math.floor(prevValue * proportions)
        console.dir({prevValue, value, proportions, final})
        // console.log('FINAL: ', final)
        acc = acc.concat(final)
        return acc
    }, [])
}
export default class ConcentricCircles extends React.Component  {
    constructor() {
        super()
        this.state = {
            circles: [
                { label: 'Other', value: 77 },
                { label: 'Apps', value: 158 },
                { label: 'OS', value: 92 },
                { label: 'Hardware', value: 80 },
                { label: 'Network', value: 194 }
              ]
        }
    }
    
    render() {
        const radiuses = convertValueToRadius()
        console.log(radiuses, 'radiuses')
        const colors = ['green', 'blue', 'red', 'yellow', 'purple']
        const circles = radiuses.map((radi, idx) => {
            return <Circle size={radi} color={colors[idx]} style={{zIndex: `${radiuses.length - idx}`}} />
        })
        
        return (
            <article>
                <h2>Concentric Circles Chart</h2>
                <div className="ConcentricCircles">
                    {circles}
                </div>
            </article>
        )
    }
}
