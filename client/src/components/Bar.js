import React from 'react'

const Circle = ({size, color, style}) => {
    return (
        <svg height={size} width={size} className="Circle" style={{...style}}>
            <circle cx={size / 2} cy={size / 2} r={(size / 2) - 10} stroke="black" stroke-width="3" fill={color} />
        </svg>
    )
}

export default class Bar extends React.Component  {
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
        const { progressPercent } = this.props
        return (
            <article>
                <h2>Debt Repayment</h2>
                <div className="Bar colorfulDots">
                    <svg width={progressPercent} height="110">
                        <rect width="100%"
                            height="110"
                            style={{fill: 'rgb(0,0,255)', strokeWidth:3, stroke: 'rgb(0,0,0)'}} />
                    </svg>
                    <svg width="100%" height="110">
                        <rect width="100%"
                            height="110"
                            style={{fill: 'transparent', strokeWidth:3, stroke: 'rgb(0,0,0)'}} />
                    </svg>
                    <div className="progress">
                        <div className="progress--current" style={{width: `${progressPercent}`}}>
                            $8,000
                        </div>
                        <div className="progress--total">
                            $14,000
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}
