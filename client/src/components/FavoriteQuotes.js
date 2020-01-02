import React from 'react'
import TextImageBox from './TextImageBox'
import { connect } from 'react-redux'
import { addToSpread } from '../spreadReducer'

const mapDispatch = { addToSpread }

class FavoriteQuotes extends React.Component  {
    constructor() {
        super()
        this.state = {
            quotes: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const quoteText = this.refs.newQuoteText;
        const quoteCategory = this.refs.newQuoteCategory;
        const quoteSource = this.refs.newQuoteSource;
        const newQuote = {
            text: quoteText.value,
            category: quoteCategory.value,
            source: quoteSource.value
        }
        this.props.addToSpread({data: newQuote, type: 'quotes'})

        const newQuoteList = this.state.quotes.concat(newQuote)
        this.setState({quotes: newQuoteList})
        
        quoteText.value = ''
        quoteCategory.value = ''
        quoteSource.value = ''
    }


    render() {
        const quotes = this.props.quotes.map(quote => {
            return <TextImageBox key={quote.text} text={`${quote.text} -- ${quote.source}`} />
        })

        const options = ['Life', 'Relationships', 'Motivation', 'Courage', 'Work/Grt']
        .sort()
        .map(option => {
            return <option value={option} key={option}>{option}</option>
    })
        
        return (
            <article>
                <h3>Favorite Quotes</h3>
                <form onSubmit={this.handleSubmit}>
                    <input ref="newQuoteText" placeholder="Add the famous saying..." />
                    <input ref="newQuoteSource" placeholder="Add who said it..." />
                    <select ref="newQuoteCategory">
                        <option value="">--Please choose an option--</option>
                        {options}
                    </select>
                    <button type="submit">Add</button>
                </form>
                <article className="FavoriteQuotes-quotes">{quotes}</article>
            </article>
        )
    }
}

const mapStateToProps = (state) => {
    return {quotes: state.spreads.quotes}
}

export default connect(
    mapStateToProps,
    mapDispatch
)(FavoriteQuotes)
