import React from 'react'
import CalendarDates from "calendar-dates"
import { flatten } from 'lodash'
import './AttendService.css'
const calendarDates = new CalendarDates()

export default class YearInPixels extends React.Component  {
    constructor() {
        super()
        this.state = {
            dates: []
        }
    }

    componentDidMount() {
        const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        const date = new Date()
        const currentYr = date.getFullYear()

        months.forEach(month => {
            calendarDates.getMatrix(new Date(currentYr, month))
            .then(res => {
                const allDates = flatten(res).filter(date => date.type === 'current')
                const newDates = this.state.dates.concat(allDates)
                this.setState({
                    dates: newDates
                })
                return allDates
            })
        })
    }

    handleDayClick = (e) => {
        return
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
        const dates = this.state.dates.map((date, idx) => {
            const classNames = `pixel ${date.type}`
            return (
                <div className={classNames} onClick={this.handleDayClick}>
                    {idx + 1}
                </div>
            )
        })

        return (
            <article>
                <h2>Year in Pixels</h2>
                <article className="YearInPixels">{dates}</article>
            </article>
        )
    }
}
