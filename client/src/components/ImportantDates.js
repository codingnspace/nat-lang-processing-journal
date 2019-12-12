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
            startMonth: parseInt(this.refs.startMonth.value),
            endDay: parseInt(this.refs.endDay.value),
            endMonth: parseInt(this.refs.endMonth.value),
            text: this.refs.newListItemText.value
        }
        const newListItems = this.state.listItems.concat(newImportantDate)
        this.setState({
            listItems: newListItems
        })
        this.refs.newListItemText.value = ''
    }

    render() {
        const compare = (a,b) => {
            console.log(a,b)
            if (a.startDay < b.startDay)
              return -1;
            if (a.startDay > b.startDay)
              return 1;
            return 0;
          }
        const listItems = this.state.listItems
        .sort(compare)
        .map(importantDate => {
            return <li>{`${importantDate.startDay} ${importantDate.text}`}</li>
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
                    <select defaultValue={monthsArr[currentMonth]} ref="startMonth">
                        {months}
                    </select>
                    <select ref="startDay">
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
