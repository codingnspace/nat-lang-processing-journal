import React from 'react'


const Book = ({book}) => {
    return (
        <article className="book--full">
        <h3>{book.name}</h3>
       <div>
            <picture>
                <img src={book.coverUrl} />
            </picture>
            <article>
                <h5>Rating: {book.rating}</h5>
                <h5>Genre: {book.genre}</h5>
                <h5>Notes</h5>
                {book.thoughts}
            </article>
       </div>
    </article> 
   )
}

export default class BookLog extends React.Component  {
    constructor() {
        super()
        this.state = {
            books: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const newBook = {
            name: this.refs.name.value,
            authorName: this.refs.authorsName.value,
            genre: this.refs.genre.value,
            rating: this.refs.rating.value,
            coverUrl: this.refs.coverUrl.value,
            thoughts: this.refs.thoughts.value
        }
        const newBooks = this.state.books.concat(newBook)
        this.setState({
            books: newBooks
        })
        this.refs.name.value = ''
        this.refs.authorsName.value = ''
        this.refs.genre.value = ''
        this.refs.rating.value = ''
        this.refs.coverUrl.value = ''
        this.refs.thoughts.value = ''
    }

    render() {
        const bookList = this.state.books.map(book => {
            return <Book book={book} />
        })

        return (
            <article className="BookLog">
                <h2>Book Log</h2>
                <form className="BookLog-add-new" onSubmit={this.handleSubmit}>
                    <h3>Add New Book</h3>
                    <label>Book Name</label>
                    <input ref="name" placeholder="Add book's name..." />
                    <label>Author's Name</label>
                    <input ref="authorsName" placeholder="Add author's name..." />
                    <label>Genre</label>
                    <select ref="genre">
                        <option>-----</option>
                        <option>Autobiography/Memoir</option>
                        <option>Essays</option>
                        <option>Historical + Cultural</option>
                        <option>Horror</option>
                        <option>Literature</option>
                        <option>Mystery</option>
                        <option>Poetry</option>
                        <option>Romance</option>
                        <option>Sci-Fi</option>
                        <option>Science</option>
                        <option>Self Help</option>
                        <option>Social Science</option>
                        <option>Young Adult</option>
                    </select>
                    <label>Rating</label>
                    <select ref="rating">
                        <option>-----</option>
                        <option>Horrendous</option>
                        <option>Bad</option>
                        <option>Okay</option>
                        <option>Good</option>
                        <option>Fantastic</option>
                    </select>
                    <label>Book Cover</label>
                    <input ref="coverUrl" placeholder="Book cover url" />
                    <label>Quick Thoughts</label>
                    <textarea ref="thoughts" />
                    <button type="submit">Add New</button>
                </form>
                {bookList}
            </article>
        )
    }
}
