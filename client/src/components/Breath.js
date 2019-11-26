import React from 'react'

const Circle = ({size, color, style}) => {
    return (
        <svg height={size} width={size} className="Circle" style={{...style}}>
            <circle cx={size / 2} cy={size / 2} r={(size / 2) - 10} stroke="black" stroke-width="3" fill={color} />
        </svg>
    )
}
export default class Breath extends React.Component  {
 
    render() {
        return (
            <article className="Breath">
                <h2>Breath Exercise</h2>
                    <svg  className="Circle">
                        <circle  stroke="black" stroke-width="3" fill="red" />
                    </svg>
                {/* <Circle size="200" color="red" /> */}
                {/* <Circle size="400" color="red" /> */}
            </article>
        )
    }
}
