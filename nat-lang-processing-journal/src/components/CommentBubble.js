import React from 'react'
import './CommentBubble.css'

function CommentBubble({text}) {
    return (
        <article className="CommentBubble">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vwh31Iaw8A5pB5hOyH6YvQHaIq%26pid%3DApi&f=1" alt="avatar" />
            <span className="CommentBubble--text tip right">{text}</span>
        </article>
    )
}

export default CommentBubble