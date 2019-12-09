import React from 'react'
import Bar from './Bar'

export default class SavingsLog extends React.Component  {
    constructor() {
        super()
 
        this.state = {
            listItems: [],
            current: 0,
            progress: '0%',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const savingAmt = parseInt(this.refs.newSavingAmount.value);
        

        this.setState({
            current: this.state.current + savingAmt,
            progress: ((this.state.current  + savingAmt)/ parseInt(this.props.savingsGoal)) * 100 + '%'
        })
       
        this.refs.newSavingAmount.value = ''
    }


    render() {
        const { savingsGoal } = this.props
    
        return (
            <article className="SpendingLog">
                <h3>Spending Log</h3>
                <Bar progressPercent={this.state.progress}
                    current={this.state.current}
                    total={savingsGoal} />

                <form onSubmit={this.handleSubmit}>
                    <input ref="newSavingAmount" placeholder="How much to add..." />
                    <button type="submit">Add</button>
                </form>
            </article>
        )
    }
}
