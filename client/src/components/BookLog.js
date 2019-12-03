import React from 'react'

import './ChatBox.css'

const FullBook = ({book}) => {
    return (
        <article className="book--full">
            
        </article>
    )
}
export default class BookLog extends React.Component  {
    render() {
        const { books } = this.props
        const bookLog = books.map(book => {
            return (
                <article className="book">
                    <div>
                        <h3 className="book-title">{book.title}</h3>
                        <h6 className="book-author">By: {book.author}</h6>
                    </div>
                    <div className="book-genre">{book.genre}</div>
                    <div className="book-rating">{book.rating}</div>
                </article>
            )
        })
        return (
            <article className="BookLog">
                <h2>Book Log</h2>
                {bookLog}
            </article>
        )
    }
}
