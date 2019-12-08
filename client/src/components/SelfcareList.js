import React from 'react'

export default class SelfCareList extends React.Component  {
    constructor() {
        super()
        this.state = {
            listItems: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newListItems = this.state.listItems.concat(this.refs.newListItemText.value)
        this.setState({
            listItems: newListItems
        })
        this.refs.newListItemText.value = ''
    }

    render() {
        const listItems = this.state.listItems.map(liText => {
            return <li>{liText}</li>
        })
       
        return (
            <article>
                <h3>Self Care List</h3>
                <form onSubmit={this.handleSubmit}>
                    <input ref="newListItemText" placeholder="Add the next thing..." />
                    
                    <button type="submit">Add</button>
                </form>
                <ol>
                    {listItems}
                </ol>
            </article>
        )
    }
}
