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
        const blocks = this.range(1, 1000)
        .map(block => {
           return <div className="block"></div>
        })
        console.log('blocks', blocks)
        return (
            <article>
                <h2>Block Wall</h2>
                <div className="blocks">
                    {blocks}
                    <img src="https://duckduckgo.com/i/7ec83f99.jpg" />
                </div>
            </article>
        )
    }
}
