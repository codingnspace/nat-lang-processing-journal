import React from 'react'
import './CommentBubble.css'

function CommentBubble({text, user}) {
    const cn = user.isBot ? 'CommentBubble left' : 'CommentBubble right'
    return (
        <article className={cn}>
            <img src={user.profilePic} alt="avatar" />
            <span className="CommentBubble--text tip right">{text}</span>
        </article>
    )
}

export default CommentBubble