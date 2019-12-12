import React from 'react'

export default class FruitVeggies extends React.Component  {
    handleDayClick = (e) => {
        const target = e.target
        const dayRow = e.currentTarget
        const veggieRow = dayRow.querySelector('.veggies')
        const fruitRow = dayRow.querySelector('.fruits')
        const div = document.createElement('div')
        div.classList.add('icon')

        if (target.classList.contains('veggie-btn')) {
            div.innerHTML = `🥬`
            veggieRow.appendChild(div)
        } else if (target.classList.contains('fruit-btn')) {
            div.innerHTML = `🍎`
            fruitRow.appendChild(div)
        } else if (target.classList.contains('icon')) {
            target.remove()
        }
    }
    render() {
        return (
            <article className="FruitVeggies">
                <h2>Fruit and Veggie Log</h2>
                <div className="grid">
                    <div className="day-row" onClick={this.handleDayClick}>
                        <div className="add-food-wrapper">
                            <div className="day row-heading">Mon</div>
                            <button className="veggie-btn">Add 🥬</button>
                            <button className="fruit-btn">Add 🍎</button>
                        </div>
                        <div className="veggies" ref="veggies"></div>
                        <div className="fruits" ref="fruits"></div>
                    </div>
                    <div className="day-row" onClick={this.handleDayClick}>
                        <div className="add-food-wrapper">
                            <div className="day row-heading">Tues</div>
                            <button className="veggie-btn">Add 🥬</button>
                            <button className="fruit-btn">Add 🍎</button>
                        </div>
                        <div className="veggies" ref="veggies"></div>
                        <div className="fruits" ref="fruits"></div>
                    </div>
                    <div className="day-row" onClick={this.handleDayClick}>
                        <div className="add-food-wrapper">
                            <div className="day row-heading">Weds</div>
                            <button className="veggie-btn">Add 🥬</button>
                            <button className="fruit-btn">Add 🍎</button>
                        </div>
                        <div className="veggies" ref="veggies"></div>
                        <div className="fruits" ref="fruits"></div>
                    </div>
                    <div className="day-row" onClick={this.handleDayClick}>
                        <div className="add-food-wrapper">
                            <div className="day row-heading">Thurs</div>
                            <button className="veggie-btn">Add 🥬</button>
                            <button className="fruit-btn">Add 🍎</button>
                        </div>
                        <div className="veggies" ref="veggies"></div>
                        <div className="fruits" ref="fruits"></div>
                    </div>
                    <div className="day-row" onClick={this.handleDayClick}>
                        <div className="add-food-wrapper">
                            <div className="day row-heading">Fri</div>
                            <button className="veggie-btn">Add 🥬</button>
                            <button className="fruit-btn">Add 🍎</button>
                        </div>
                        <div className="veggies" ref="veggies"></div>
                        <div className="fruits" ref="fruits"></div>
                    </div>
                    <div className="day-row" onClick={this.handleDayClick}>
                        <div className="add-food-wrapper">
                            <div className="day row-heading">Sat</div>
                            <button className="veggie-btn">Add 🥬</button>
                            <button className="fruit-btn">Add 🍎</button>
                        </div>
                        <div className="veggies" ref="veggies"></div>
                        <div className="fruits" ref="fruits"></div>
                    </div>
                    <div className="day-row" onClick={this.handleDayClick}>
                        <div className="add-food-wrapper">
                            <div className="day row-heading">Sun</div>
                            <button className="veggie-btn">Add 🥬</button>
                            <button className="fruit-btn">Add 🍎</button>
                        </div>
                        <div className="veggies" ref="veggies"></div>
                        <div className="fruits" ref="fruits"></div>
                    </div>
                    
                </div>
            </article>
        )
    }
}
