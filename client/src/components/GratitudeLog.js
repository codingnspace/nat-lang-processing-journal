import React from 'react'
import { connect } from 'react-redux'
import { addToSpread } from '../spreadReducer'

const mapDispatch = { addToSpread }

class GratitudeLog extends React.Component  {
    constructor() {
        super()
        this.state = {
            listItems: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newListItems = this.state.listItems.concat(this.refs.newListItemText.value)
        this.props.addToSpread({data: this.refs.newListItemText.value, type: 'gratitudes'})

        this.setState({
            listItems: newListItems
        })
        this.refs.newListItemText.value = ''
    }

    render() {
        console.log(this.props.gratitudes, 'GRatitudes')
        const gratitudes = this.props.gratitudes
        const listItems = gratitudes.map(liText => {
            console.log('liText', liText)
            return <li>{liText}</li>
        })
       
        return (
            <article>
                <h3>Gratitude Log</h3>
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
    const gratitudes = spreads.gratitudes
    console.log('gratitudes returned in mapstatetopropss', gratitudes)
    return {gratitudes}
}

export default connect(
    mapStateToProps,
    mapDispatch
)(GratitudeLog)
