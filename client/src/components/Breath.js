import React from 'react'

const Circle = ({size, color, style}) => {
    return (
        <svg height={size} width={size} className="Circle" style={{...style}}>
            <circle cx={size / 2} cy={size / 2} r={(size / 2) - 10} stroke="black" stroke-width="3" fill={color} />
        </svg>
    )
}
export default class Breath extends React.Component  {
    componentDidMount() {
        const circle = this.refs.breathCircle
        setInterval(() => {
                circle && circle.classList.toggle('in')
        }, 20000);
    }
    render() {
        return (
            <article className="Breath">
                <h2>Breath Exercise</h2>
                    <svg  className="Circle" ref="breathCircle">
                        <circle  stroke="black" fill="red" />
                    </svg>
            </article>
        )
    }
}
