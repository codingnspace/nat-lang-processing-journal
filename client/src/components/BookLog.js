import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addSpread } from '../spreadReducer'

function useInput(initialValue){
    const [value,setValue] = useState(initialValue);
 
     function handleChange(e){
         setValue(e.target.value);
     }
 
    return [value,handleChange];
}

const Book = ({book}) => {
    return (
        <article className="book--full">
        <h3>{book.title}</h3>
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

const BookLog = ({props}) =>  {
    const [title, setTitle] = useInput('')
    const [authorName, setAuthorName] = useInput('')
    const [genre, setGenre] = useInput('')
    const [rating, setRating] = useInput('')
    const [coverUrl, setCoverUrl] = useInput('')
    const [thoughts, setThoughts] = useInput('')

    const dispatch = useDispatch()
    const bookLogs = useSelector((state) => {
        return state.spreads.filter(spread => spread.type === 'book-log')
    }) 
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const newBook = {
            title,
            authorName,
            genre,
            rating,
            coverUrl,
            thoughts
        }

        dispatch(addSpread({data: newBook, type: 'book-log'}))
        
        // setTitle('')
        // setAuthorName('')
        // setGenre('')
        // setRating('')
        // setCoverUrl('')
        // setThoughts('')
    }

    const bookList = bookLogs && bookLogs.map(book => {
        return <Book book={book.data} />
    })
    console.log('book logs from state', bookLogs)
  
    return (
        <article className="BookLog">
            <h2>Book Log</h2>
            <form className="BookLog-add-new" onSubmit={handleSubmit}>
                <h3>Add New Book</h3>
                <label>Book Name</label>
                <input placeholder="Add book's name..." onChange={setTitle} />
                <label>Author's Name</label>
                <input placeholder="Add author's name..." onChange={setAuthorName} />
                <label>Genre</label>
                <select onChange={setGenre}>
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
                <select onChange={setRating}>
                    <option>-----</option>
                    <option>Horrendous</option>
                    <option>Bad</option>
                    <option>Okay</option>
                    <option>Good</option>
                    <option>Fantastic</option>
                </select>
                <label>Book Cover</label>
                <input placeholder="Book cover url" onChange={setCoverUrl} />
                <label>Quick Thoughts</label>
                <textarea onChange={setThoughts} />
                <button type="submit">Add New</button>
            </form>
            {bookList}
        </article>
    )
}

export default BookLog
