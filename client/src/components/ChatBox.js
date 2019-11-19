import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ChatList from './ChatList'
import './ChatBox.css'

export default class ChatBox extends React.Component  {
    constructor() {
        super();
        this.state = {
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
            ],
            newChat: {},
            chats: [{text: 'Hello', user: {
                id: 0,
                profilePic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hookedonhallmark.com%2Fassets%2Fimages%2F2015%2F1795qx9007.jpg&f=1&nofb=1',
                isBot: true
            }}]
        }
    }

    handleChange = (e) => {
        this.setState({
            newChat: {
                text: e.target.value,
                user: this.state.users[1]
            }
        })
    }

    addChat = (e) => {
        e.preventDefault()
        const text = this.refs.newChatText;
        const newChatList = this.state.chats.concat(this.state.newChat)
        this.setState({
            chats: newChatList
        })
        text.value = ""
        setTimeout(() => {
            this.addBotReply()
        }, 500)
    }

    addBotReply = () => {
        axios.post('/newUserMsg', {
            text: this.state.chats[this.state.chats.length - 1].text,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then(res => {
            console.log(res)

            const newChat = {
                text: res.data.answer || "I'm sorry, I don't understand.",
                user: this.state.users[0]
            }
            const newChatList = this.state.chats.concat(newChat)
            this.setState({
                chats: newChatList
            })
        })
        .catch(err => console.log(err))
    }

    render() {
        return (
            <aside className="ChatBox">
                <ChatList messages={this.state.chats} />
                <article className="ChatBox--input-container">
                    <form onSubmit={this.addChat}>
                        <input ref="newChatText" onChange={this.handleChange}  placeholder="say something..." />
                        <button type="submit" >send</button>
                    </form>
                </article>
            </aside>
        )
    }
}
