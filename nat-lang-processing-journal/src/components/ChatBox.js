import React from 'react'
import ChatList from './ChatList'
import './ChatList.css'

class ChatBox extends React.Component  {
  render() {
    return (
        <main>
            <ChatList />
            <article>
                <input />
            </article>
        </main>
    )
  }
}

export default ChatBox