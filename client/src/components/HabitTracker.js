import React from 'react'

export class HabitTrackerRow extends React.Component {
    handleDayClick = (e) => {
        const target = e.target.closest('span')
        if (Array.isArray(this.props.habitColor)) {
            const habitColors = this.props.habitColor
            const currentColor = target.style.backgroundColor
            const currentIdx = habitColors.indexOf(currentColor)
            target.classList.add('filled')
            if (currentIdx !== - 1 && currentIdx !== habitColors.length - 1) {
                target.style.backgroundColor = habitColors[currentIdx + 1]
                target.style.color = habitColors[currentIdx + 1]
            } else if (currentIdx === habitColors.length - 1) {
                target.style.backgroundColor = 'transparent'
                target.style.color = 'black'
                target.classList.remove('filled')
            } else if (currentIdx === - 1) {
                target.style.backgroundColor = habitColors[0]
                target.style.color = habitColors[0]
            }
        } else {
            target.classList.toggle('filled')
            if (target.classList.contains('filled')) {
                target.style.backgroundColor = this.props.habitColor
                target.style.color = this.props.habitColor
            } else {
                target.style.backgroundColor = 'transparent'
                target.style.color = 'black'
            }
        }
    }

    render() {
        const { habitName, habitColor, year, month, legend = [] } = this.props

        const daysInMonth =  new Date(year, month, 0).getDate();
        const range = (start, end) => {
            const length = end - start;
            return Array.from({ length }, (_, i) => start + i);
        }
        const days = range(1, daysInMonth + 1).map(day => {
            return <span onClick={this.handleDayClick}>{day}</span>
        })

        const legendDisplay = legend.map((el, idx) => {
            return (
                <div style={{
                    display: 'inline-block',
                    borderBottom: `5px solid ${habitColor[idx]}`}}>
                        {el}
                </div>
            )
        })

        return (
          <div className="HabitTracker-row-container-with-legend">
                <div className="HabitTracker-row-container">
                <h6>{habitName}</h6>
                <div className="HabitTracker-days-container">
                    {days}
                </div>
               
            </div>
            {legend && (
                    <div className="HabitTracker-legend">
                        {legendDisplay}
                    </div>
                )}
          </div>
        )
    }
}

export default class HabitTracker extends React.Component  {
    constructor() {
        super()
        this.state = {
            listItems: []
        }
    }

    render() {
        return (
            <article className="HabitTracker">
                <h3>Habit Tracker</h3>
                <HabitTrackerRow habitColor="purple"
                    habitName="Exercise"
                    year={2020}
                    month={1} />
                <HabitTrackerRow habitColor={["purple", "yellow", "green"]}
                    habitName="Mood"
                    year={2020}
                    legend={['Great', 'Okay', 'Bad']}
                    month={1} />
            </article>
        )
    }
}

export class HabitTrackerForm extends React.Component  {
    constructor() {
        super()
        this.state = {
            listItems: []
        }
    }

    render() {
        return (
            <article className="HabitTracker">
                <h3>Habit Tracker</h3>
                <form>
                    <label>Habit Name</label>
                    <input />
                    <label>Habit Color(s)</label>
                    <input />
                    <label>Habit Legend</label>
                    <input />
                    <label>Month</label>
                    <select>
                        <option value={1}>January</option>
                        <option value={2}>February</option>
                    </select>
                    <label>Year</label>
                    <select>
                        <option value={2020}>2020</option>
                        <option value={2020}>2021</option>
                    </select>
                </form>
            </article>
        )
    }
}
