import React from 'react'

export default class BlockWall extends React.Component  {
    handleDayClick = (e) => {
        const target = e.target
        console.log(target)
    }

    range = (start, end) => {
        const length = end - start;
        return Array.from({ length }, (_, i) => start + i);
    }
    render() {
        const blocks = this.range(1, 100)
        .map(block => {
           return <div className="block"></div>
        })
        const halfBlocks = this.range(1, 19)
        .map(block => {
           return <div className="block"></div>
        })
        return (
            <article>
                <h2>Block Wall</h2>
                <div className="blocks">
                    <div className="top">{blocks}</div>
                    <div className="left">{halfBlocks}</div>
                    <div className="test">
                        <img src="https://duckduckgo.com/i/7ec83f99.jpg" />
                    </div>
                    <div className="right">{halfBlocks}</div>
                    <div className="bottom">{blocks}</div>
                </div>
            </article>
        )
    }
}
