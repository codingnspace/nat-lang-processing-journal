import React from 'react'
import ChatList from './ChatList'
import './ChatBox.css'

class ChatBox extends React.Component  {
    constructor(props) {
        super(props)

        this.state = {
            chats: [],
            newChat: ''
        }
    }

    handleChange = (e) => {
        this.setState({newChat: e.target.value})
    }

    addChat = () => {
        this.state.chats.push(this.state.newChat)
        this.setState({newChat: ''})
    }

    render() {
    const userOne = {
        id: 1,
        profilePic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hookedonhallmark.com%2Fassets%2Fimages%2F2015%2F1795qx9007.jpg&f=1&nofb=1',
        isBot: true
      }
    
    const userTwo = {
        id: 1,
        profilePic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.vwh31Iaw8A5pB5hOyH6YvQHaIq%26pid%3DApi&f=1',
        isBot: false
    }

    const message1 = {
        user: userOne,
        text: "Hi. How's it going?"
    }

    const message2 = {
        user: userTwo,
        text: "this is a long one. for certain. blah blah blac. afdssda j;lfas afsafsd lkjhdaks jhasd kljhlfdaskjhasdl asdkfjh asflkhjfa sdlhjkdasf kdals fhkadjsfl jdas fljfadlsjhfskfjds afds kljhadfs lkjh adfklsj hafkdsj hdfksajhkljdhas kjhfa lkjhfa ad skjhladfskhsfda jhkas jhkjfdsha kjash kjsadh kjasfh kjdfas hjkdsa kl"
    }

    const message3 = {
        user: userOne,
        text: "Wow that's a lot"
    }
    
    const message4 = {
        user: userTwo,
        text: "Yeah I know"
    }
    return (
        <aside className="ChatBox">
            <ChatList messages={[message1, message2, message3, message4]} />
            <article className="ChatBox--input-container">
                <input onChange={this.handleChange} placeHolder="say something..." />
                <button>send</button>
            </article>
        </aside>
    )
  }
}

export default ChatBox