import React from 'react'

export default class Bar extends React.Component  {
    render() {
        const { progressPercent, current, total } = this.props
        return (
            <article>
                <div className="Bar">
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
                            {current}
                        </div>
                        <div className="progress--total">
                            {total}
                        </div>
                    </div>
                </div>
            </article>
        )
    }
}
