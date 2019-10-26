import React from 'react'
import ChatList from './ChatList'
import './ChatBox.css'

class ChatBox extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            chats: [
                {
                    user: {
                        id: 0,
                        profilePic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hookedonhallmark.com%2Fassets%2Fimages%2F2015%2F1795qx9007.jpg&f=1&nofb=1',
                        isBot: true
                    },
                    text: "Hi. How's it going?"
                }
            ],
            newChat: {text: ''},
            users: [
                {
                    id: 0,
                    profilePic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hookedonhallmark.com%2Fassets%2Fimages%2F2015%2F1795qx9007.jpg&f=1&nofb=1',
                    isBot: true
                },
                {
                    id: 1,
                    profilePic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vwh31Iaw8A5pB5hOyH6YvQHaIq%26pid%3DApi&f=1',
                    isBot: false
                }
            ]
        }
    }

    handleChange = (e) => {
        this.setState({newChat: {
            text: e.target.value,
            user: this.state.users[1]
        }})

    }

    addChat = (e) => {
        e.preventDefault()
        this.state.chats.push(this.state.newChat)
        this.setState({newChat: {text: ''}})
        console.log(this)
        // this.state.chats[this.state.chats.length -1].scrollIntoView({ block: "end" })
    }

    render() {
console.log(this.state.chats)
    return (
        <aside className="ChatBox">
            <ChatList messages={this.state.chats} />
            <article className="ChatBox--input-container">
                <form onSubmit={this.addChat}>
                    <input onChange={this.handleChange} value={this.state.newChat.text} placeholder="say something..." />
                    <button type="submit" >send</button>
                </form>
            </article>
        </aside>
    )
  }
}

export default ChatBox