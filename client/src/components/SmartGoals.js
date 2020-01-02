import React from 'react'
import List from './List'

export default class SmartGoals extends React.Component  {
    render() {
        const goalOptions = ["Financial", "Relationships", "Professional", "Wellness"]
        
        return (
            <article className="SmartGoals">
                <h3>A guide to making SMART Goals</h3>
                <ul>
                    <li><strong>What</strong> do I want to accomplish?</li>
                    <li><strong>Why</strong> is this goal important?</li>
                    <li><strong>Who</strong> is involved?</li>
                    <li><strong>Where</strong> where is it located?</li>
                    <li><strong>Which</strong> which resources or limits are involved?</li>
                </ul>
                <List categoryOptions= {goalOptions} title="Smart Goals" type="goals" />
            </article>
        )
    }
}
