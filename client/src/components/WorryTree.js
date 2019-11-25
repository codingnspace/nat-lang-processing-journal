import React from 'react'
import ChatList from './ChatList'
import './ChatBox.css'
export default class WorryTree extends React.Component  {
    constructor() {
        super()
        this.questions = [
            {
                question: "What are you worrying about?",
                answers: 'user-input'
            },
            {
                question: "Is this worry something I can do something about?",
                answers: ['Yes', 'No']
            },
            {
                responded: 'No',
                followUp: ["Let worry go", "Change focus of attention"]
            },
            {
                responded: 'Yes',
                question: "Is this something you can do now or later?",
                answers: ['Now', 'Later']
            },
            {
                responded: 'Now',
                followUp: ['Do it!', 'Let worry go', 'Change focus of attention']
            },
            {
                responded: 'Later',
                followUp: ['Schedule it', 'Let worry go', 'Change focus of attention']
            }
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
            chats: [{text: this.questions[0].question, user: {
                id: 0,
                profilePic: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hookedonhallmark.com%2Fassets%2Fimages%2F2015%2F1795qx9007.jpg&f=1&nofb=1',
                isBot: true
            }}]
        }
    }

    handleClick = (e) => {
        const nextQuestion = this.state.nextQuestion
        const currentQuestion = this.state.currentQuestion

        // Check if current question has answers
        const currentQHasAnswers = currentQuestion.answers

        // if current question has answers, check the answer
        let newNextQuestion
        if (currentQHasAnswers) {
            const answer = e.target.innerText
            newNextQuestion = this.questions.find(question => question.responded === answer)
        }
        this.setState({
            nextQuestion: newNextQuestion || nextQuestion + 1,
            currentQuestion: this.state.currentQuestion + 1
        })
    }

    render() {


        return (
            <article className="WorryTree">
                <h2>Worry Tree</h2>
                <aside className="ChatBox">
                <ChatList messages={this.state.chats} />
                <article className="ChatBox--input-container">
                    <form onSubmit={this.addChat}>
                        <input ref="newChatText" onChange={this.handleChange}  placeholder="say something..." />
                        <button type="submit" >send</button>
                    </form>
                </article>
            </aside>

            </article>
        )
    }
}
