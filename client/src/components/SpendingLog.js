import React from 'react'
import List from './List'
import Bar from './Bar'
import { groupBy } from 'lodash'

export default class SpendingLog extends React.Component  {
    constructor() {
        super()
        // const catTotals = this.props.categoryOptions.map(option => {
        //     return {
        //         category: option,
        //         total: 0
        //     }
        // })
        this.state = {
            listItems: [],
            current: 0,
            progress: '0%',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const liText = this.refs.newListItemText;
        const liCategory = this.refs.newListItemCategory;
        const liPrice = this.refs.newListItemPrice;
        const newLi = {
            text: liText.value,
            category: liCategory.value,
            price: parseInt(liPrice.value)
        }
        // const category = this.state.catTotals
        //     .find(catObj => catObj.category === liCategory.value)
        // category = {
        //     category: category.category,
        //     total: category.total + newLi.price
        // }

        this.setState({
            listItems: this.state.listItems.concat(newLi),
            current: this.state.current + newLi.price,
            progress: ((this.state.current  + newLi.price)/ parseInt(this.props.budget)) * 100 + '%'
        })
       
        liText.value = ''
        liCategory.value = ''
        liPrice.value = ''
    }


    render() {
        const { categoryOptions } = this.props
        const listItems = this.state.listItems
        const groupedLisByCategory = groupBy(listItems, 'category')
        const categories = Object.keys(groupedLisByCategory)
        const addedItems = categories.map(cat => {
            const categoryItems = groupedLisByCategory[cat].map(item => {
                return (
                    <li>
                        {`$${item.price} -- ${item.text}`}
                    </li>
                )
            })
            return (
                <div>
                    <h4>{cat}</h4>
                    <ul>{categoryItems}</ul>
                </div>
            )
        })
       
        const options = categoryOptions
            .sort()
            .map(option => {
                return <option value={option}>{option}</option>
        })
        return (
            <article className="SpendingLog">
                <h3>Spending Log</h3>
                <Bar progressPercent={this.state.progress}
                    current={this.state.current} 
                    total={this.props.budget} />

                <form onSubmit={this.handleSubmit}>
                    <input ref="newListItemText" placeholder="Add the next thing..." />
                    <input ref="newListItemPrice" placeholder="What was the damage..." />
                    <select ref="newListItemCategory">
                        <option value="">--Please choose an option--</option>
                        {options}
                    </select>
                    <button type="submit">Add</button>
                </form>
                <article>{addedItems}</article>
            </article>
        )
    }
}
