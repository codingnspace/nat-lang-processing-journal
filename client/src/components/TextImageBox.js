import React from 'react'
import fitty from 'fitty'

export default class TextImageBox extends React.Component  {
    componentDidMount() {
        // fitty('.TextImageBox', {
        //     minSize: 12,
        //     maxSize: 300
        // })
        if (this.props.image) {
            const box = this.refs.thisTextImageBox
            box.style = `background-image: url("${this.props.image}")`
            box.classList.add('has-image')
        }
    }
    render() {
        const {text, image} = this.props
        return (
            <article className="TextImageBox" ref="thisTextImageBox">
                <h2>{text}</h2>
            </article>
        )
    }
}
