import React from 'react'
import ChatList from './ChatList'
import axios from 'axios'

import './ChatBox.css'
export default class WorryTree extends React.Component  {
    constructor() {
        super()
        this.userResponses = [
            {prompt: 'start food tracker'},
            {prompt: 'I just ate'},
            {prompt: 'food healthy', add: true},
            {prompt: 'my food motivations'}
        ]
       
        this.state = {
            nextQuestion: 1,
            currentQuestion: 0,
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
            chats: []
        }
    }

    addChat = (e, chat) => {
        e.preventDefault && e.preventDefault()
       
        const text = chat || this.refs.newChatText.value;
        if (!chat) {
            const newChat = {
                text,
                user: this.state.users[1]
            }
            const newChatList = this.state.chats.concat(newChat)
            this.setState({
                chats: newChatList
            })
    
            this.refs.newChatText.value = ""
            setTimeout(() => {
                // send the right prompt to the bot
                const currentResponse = this.userResponses[this.state.currentQuestion] || ''
                const userResponse = currentResponse.add ? `${currentResponse.prompt}  ${text}` : currentResponse.prompt 
                this.addBotReply(userResponse)
                const currentQ = this.state.currentQuestion
                this.setState({
                    currentQuestion: currentQ === 3 ? 1 : this.state.currentQuestion + 1
                })
            }, 500)
            return
        }
        
        setTimeout(() => {
            this.addBotReply(chat)
        }, 500)
    }

    addBotReply = (chat) => {
        axios.post('/newUserMsg', {
            text: chat || this.state.chats[this.state.chats.length - 1].text,
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then(res => {
            const newChat = {
                text: res.data.answer || "I'm sorry, I don't understand.",
                user: this.state.users[0]
            }
            const newChatList = this.state.chats.concat(newChat)
            this.setState({
                chats: newChatList,
            })
        })
        .catch(err => console.log(err))
    }

    componentDidMount() {
        this.addChat({}, this.userResponses[0].prompt)
        this.setState({
            currentQuestion: this.state.currentQuestion + 1
        })
    }


    render() {

        return (
            <article className="WorryTree">
                <h2>Food Tracker</h2>
                <aside className="ChatBox">
                <ChatList messages={this.state.chats} />
                <article className="ChatBox--input-container">
                    <form onSubmit={this.addChat}>
                        <input ref="newChatText" placeholder="say something..." />
                        <button type="submit" >send</button>
                    </form>
                </article>
            </aside>

            </article>
        )
    }
}
