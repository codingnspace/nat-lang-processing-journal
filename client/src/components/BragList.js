import React from 'react'
import { connect } from 'react-redux'
import { addToSpread } from '../spreadReducer'

const mapDispatch = { addToSpread }

class BragList extends React.Component  {
    constructor() {
        super()
        this.state = {
            listItems: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newListItems = this.state.listItems.concat(this.refs.newListItemText.value)
        this.props.addToSpread({data: this.refs.newListItemText.value, type: 'brags'})

        this.setState({
            listItems: newListItems
        })
        this.refs.newListItemText.value = ''
    }

    render() {
        const listItems = this.props.brags.map(liText => {
            return <li>{liText}</li>
        })
       
        return (
            <article>
                <h3>Brag List</h3>
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

const mapStateToProps = (state) => {
    const { spreads } = state
    const brags = spreads.brags
    return {brags}
}

export default connect(
    mapStateToProps,
    mapDispatch
)(BragList)
