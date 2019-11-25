import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
export default class IconLog extends React.Component  {
    range = (start, end) => {
        const length = end - start;
        return Array.from({ length }, (_, i) => start + i);
    }

    handleClick = (e) => {
        if (e.target.tagName === 'path' ||  e.target.tagName === 'svg') {
            const iconLog = e.target.closest('.IconLog--square')
            iconLog.classList.toggle('complete')
        } else {
            e.target.classList.toggle('complete')
        }
        
    }

    render() {
        const squares = this.range(1, 100).map(idx => {
            return (
                <div className="IconLog--square" role="button" tabIndex="0" onClick={this.handleClick}>
                    <FontAwesomeIcon icon={faPencilAlt} size="lg" />
                </div>
            )
        })
        return (
            <article>
                <h2>Novel Writing Log</h2>
                <div className="IconLog">
                   {squares}
                </div>
            </article>
        )
    }
}
