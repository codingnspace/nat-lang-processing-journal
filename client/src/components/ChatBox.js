import React, { useState, useEffect } from 'react'
import axios from 'axios'

import ChatList from './ChatList'
import './ChatBox.css'

export default function ChatBox()  {
    const [chats, setChats] = useState([
        {
            user: {
                id: 0,
                profilePic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hookedonhallmark.com%2Fassets%2Fimages%2F2015%2F1795qx9007.jpg&f=1&nofb=1',
                isBot: true
            },
            text: "Hi. How's it going?"
        }
    ]);
    const [newChat, setNewChat] = useState({text: ''})
    const users = [
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
 

    const handleChange = (e) => {
        axios.post('/newUserMsg', {
            text: 'i hate  you',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            },
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        setNewChat({
            text: e.target.value,
            user: users[1]
        })
    }

    const addChat = (e) => {
        e.preventDefault()
        const newChatList = chats.concat(newChat)
        setChats(newChatList)
        setNewChat({text: ''})
    }
    const [data, setData] = useState({ hits: [] });
    // useEffect(async () => {
        // axios.post('http://localhost:3001/newUserMsg', {text: 'Hi'})
        // .then(res => console.log(res))
        // .catch(err => console.log(err))
        // setData(result.data);
        // console.log(result)
    //   });

    return (
        <aside className="ChatBox">
            <ChatList messages={chats} />
            <article className="ChatBox--input-container">
                <form onSubmit={addChat}>
                    <input onChange={handleChange} value={newChat.text} placeholder="say something..." />
                    <button type="submit" >send</button>
                </form>
            </article>
        </aside>
    )
}
