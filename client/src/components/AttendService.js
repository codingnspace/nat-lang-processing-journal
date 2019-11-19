import React from 'react'
import CalendarDates from "calendar-dates"
import { flatten } from 'lodash'
import './AttendService.css'
const calendarDates = new CalendarDates()

export default class AttendService extends React.Component  {
    constructor() {
        super()
        this.state = {
            dates: []
        }
    }
    componentDidMount() {
        calendarDates.getMatrix(new Date())
        .then(res => {
            const allDates = flatten(res)
            this.setState({
                dates: allDates
            })
        })
    }


    render() {
        console.log(this.state.dates)
        const dates = this.state.dates.map(date => {
            const classNames = `date ${date.type}`
            return <div className={classNames}>{date.date}</div>
        })
        return (
            <article>
                <h2>Attend Service</h2>
                <h3>November</h3>
                <article className="dates">{dates}</article>
            </article>
        )
    }
}
