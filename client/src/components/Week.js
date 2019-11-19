import React from 'react'

export default class Week extends React.Component  {
    handleDayClick = (e) => {
        const target = e.target
        const currentValue = target.innerText

        if (currentValue === 'NOT Completed') {
            target.innerText = ''
        } else if (currentValue === 'Completed') {
            target.innerText = 'NOT Completed'
        } else {
            target.innerText = 'Completed'
        }
    }
    render() {
        return (
            <article>
                <h2>Week</h2>
                <div className="row">
                    <div className="day row-heading">Mo</div>
                    <div className="day row-heading">Tu</div>
                    <div className="day row-heading">We</div>
                    <div className="day row-heading">Th</div>
                    <div className="day row-heading">Fri</div>
                    <div className="day row-heading">Sat</div>
                    <div className="day row-heading">Sun</div>
                </div>
                <div className="row">
                    <div className="day secondary" onClick={this.handleDayClick}></div>
                    <div className="day secondary" onClick={this.handleDayClick}></div>
                    <div className="day secondary" onClick={this.handleDayClick}></div>
                    <div className="day secondary" onClick={this.handleDayClick}></div>
                    <div className="day secondary" onClick={this.handleDayClick}></div>
                    <div className="day secondary" onClick={this.handleDayClick}></div>
                    <div className="day secondary" onClick={this.handleDayClick}></div>
                </div>
            </article>
        )
    }
}
