import React from 'react'
import {Link} from "react-router-dom"

import './ChatBox.css'

export const FullBook = ({book}) => {
    const notes = book.notes.map(note => {
        return (
            <p>{note}</p>
        )
    })
    return (
        <article className="book--full">
            <h3>Book Details</h3>
            <h4>
                <Link to='/book-log'>Back to Full Book Log</Link>
            </h4>
           <div>
                <picture>
                    <img src={book.book_cover} />
                </picture>
                <article>
                    <h5>Rating: {book.rating}</h5>
                    <h6>Finished on: {book.finished_date}</h6>
                    <h5>Notes</h5>
                    {notes}
                </article>
           </div>
        </article>
    )
}

export default class BookLog extends React.Component  {
    render() {
        const { books } = this.props
        const bookLog = books.map(book => {
            return (
                 <Link to={`/book-details/${book.id}`}>
                    <article className="book">
                        <div>
                            <h3 className="book-title">{book.title}</h3>
                            <h6 className="book-author">By: {book.author}</h6>
                        </div>
                        <div className="book-genre">{book.genre}</div>
                        <div className="book-rating">{book.rating}</div>
                    </article>
                 </Link>
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
