import React from 'react'
import fitty from 'fitty'

export default class TextImageBox extends React.Component  {
    // componentDidMount() {
    //     fitty('.TextImageBox', {
    //         minSize: 12,
    //         maxSize: 300
    //     })
    // }
    render() {
        const {text} = this.props
        return (
            <article className="TextImageBox">
                <h2>{text}
                </h2>
            </article>
        )
    }
}
