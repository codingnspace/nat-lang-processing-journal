import React from 'react'
import TextImageBox from './TextImageBox'

export default class FavoriteQuotes extends React.Component  {
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
        console.log('newLi', newLi)
        const newLiList = this.state.listItems.concat(newLi)
        console.log('newLiList', newLiList)
        this.setState({listItems: newLiList})
        setTimeout(() => {
            console.log(this.state.listItems)
        }, 500)
        liText.value = ''
        liCategory.value = ''
    }


    render() {
        const { categoryOptions, title, noCheckmark } = this.props
        const listItems = this.state.listItems

       
        
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
