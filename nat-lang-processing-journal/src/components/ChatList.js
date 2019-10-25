import React from 'react'
import CommentBubble from './CommentBubble'
import './ChatList.css'

function ChatList({messages}) {
    const list = messages.map((message, idx ) => <CommentBubble user={message.user} text={message.text} key={idx} />)
    return (
        <section className="ChatList">
            {list}
        </section>
    )
}

export default ChatList