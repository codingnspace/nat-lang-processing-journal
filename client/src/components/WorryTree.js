import React from 'react'

export default class WorryTree extends React.Component  {
    constructor() {
        super()
        this.questions = [
            {
                question: "What am I worrying about?",
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
            currentQuestion: 0
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
                <div className="WorryTree--question">
                    {this.questions[this.state.currentQuestion].question}
                </div>
                <button onClick={this.handleClick}>Next</button>
            </article>
        )
    }
}
