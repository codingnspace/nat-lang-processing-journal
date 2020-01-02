import React from 'react'
import { groupBy } from 'lodash'

import { connect } from 'react-redux'
import { addToSpread } from '../spreadReducer'

const mapDispatch = { addToSpread }


class List extends React.Component  {
    constructor() {
        super()
        this.state = {
            listItems: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const liText = this.refs.newListItemText;
        const liCategory = this.refs.newListItemCategory;
        const newLi = {
            text: liText.value,
            category: liCategory.value
        }
        const newLiList = this.state.listItems.concat(newLi)

        this.props.addToSpread({data: newLi, type: this.props.type})

        this.setState({listItems: newLiList})
       
        liText.value = ''
        liCategory.value = ''
    }

    toggleItemComplete = (e) => {
        const isChecked = e.target.checked
        const parentNode = e.target.parentNode
        if (isChecked) {
            parentNode.style = 'text-decoration: line-through'
        } else {
            parentNode.style = 'text-decoration: none'
        }
    }

    render() {
        const { categoryOptions, title, noCheckmark } = this.props
        const listItems = this.props.items
        const groupedLisByCategory = groupBy(listItems, 'category')
        const categories = Object.keys(groupedLisByCategory)
        const addedItems = categories.map(cat => {
            const categoryItems = groupedLisByCategory[cat].map(item => {
                if (noCheckmark) {
                    return (
                        <li onClick={this.toggleItemComplete}>
                            {item.text}
                        </li>
                    )
                } else {
                    return (
                        <li onClick={this.toggleItemComplete}>
                            <input type="checkbox"/>{item.text}
                        </li>
                        )
                }
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
            <article>
                <h3>{title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input ref="newListItemText" placeholder="Add the next thing..." />
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

const mapStateToProps = (state, ownProps) => {
    const type = ownProps.type
    return {items: state.spreads[type]}
}

export default connect(
    mapStateToProps,
    mapDispatch
)(List)
