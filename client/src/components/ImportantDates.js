import React from 'react'

export default class ImportantDates extends React.Component  {
    constructor() {
        super()
        this.state = {
            listItems: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newImportantDate = {
            startDay: parseInt(this.refs.startDay.value),
            startMonth: this.refs.startMonth.value,
            endDay: parseInt(this.refs.endDay.value),
            endMonth: this.refs.endMonth.value,
            text: this.refs.newListItemText.value
        }
        const newListItems = this.state.listItems.concat(newImportantDate)
        this.setState({
            listItems: newListItems
        })
        this.refs.newListItemText.value = ''
    }

    handleStartDayChange = (e) => {
        this.refs.endDay.value = e.target.value
    }

    affixDate = (day) => {
        const st = [1, 21,31]
        const rd = [3, 23]
        const nd = [2, 22]

        if (st.includes(day)) {
            return 'st'
        } else if (rd.includes(day)) {
            return 'rd'
        } else if (nd.includes(day)) {
            return 'nd'
        } else {
            return 'th'
        }
    }

    displayDate = (date) => {
        const startDay = date.startDay
        const startMonth = date.startMonth
        const endDay = date.endDay
        const endMonth = date.endMonth
        console.log(startDay, startMonth, endDay,endMonth)
        if (startDay === endDay && startMonth === endMonth) {
           return `${startDay}${this.affixDate(startDay)} ${date.text}` 
        } else if (startDay !== endDay || startMonth !== endMonth) {
            if (startMonth === endMonth) {
                return  `${startDay}${this.affixDate(startDay)} - ${endDay}${this.affixDate(endDay)} ${date.text}` 
            } else {
                return  `${startDay}${this.affixDate(startDay)} ${startMonth} - ${endDay}${this.affixDate(endDay)} 
                ${endMonth}, ${date.text}` 
            }
        }
    }

    render() {
        const compare = (a,b) => {
            if (a.startDay < b.startDay)
              return -1;
            if (a.startDay > b.startDay)
              return 1;
            return 0;
          }
        const listItems = this.state.listItems
        .sort(compare)
        .map(importantDate => {
            return <li>{this.displayDate(importantDate)}</li>
        })
        const date = new Date();
        const currentMonth = date.getMonth();
        const monthsArr = ['January', 'February', 'March', 'April', 'May',
        'June', 'July', 'August', 'September', 'October', 'November',
        'December']
        const months = monthsArr.map(month => {
            return <option value={month}>{month}</option>
        })

        const daysInMonth =  new Date(this.props.year, this.props.month, 0).getDate();
        const range = (start, end) => {
            const length = end - start;
            return Array.from({ length }, (_, i) => start + i);
        }
        const days = range(1, daysInMonth + 1).map(day => {
            return <option>{day}</option>
        })

    
       
        return (
            <article className="ImportantDates">
                <h3>Important Dates</h3>
                <form onSubmit={this.handleSubmit}>
                    <input ref="newListItemText" placeholder="Add the next thing..." />
                    <select defaultValue={monthsArr[currentMonth]}
                        ref="startMonth"
                        disabled
                        onChange={this.handleChange}>
                        {months}
                    </select>
                    <select ref="startDay" onChange={this.handleStartDayChange}>
                        {days}
                    </select>
                    <span>To</span>
                    <select defaultValue={monthsArr[currentMonth]} ref="endMonth">
                        {months}
                    </select>
                    <select ref="endDay">
                        {days}
                    </select>
                    <button type="submit">Add</button>
                </form>
                <ul>
                    {listItems}
                </ul>
            </article>
        )
    }
}
