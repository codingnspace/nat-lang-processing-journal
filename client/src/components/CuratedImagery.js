import React from 'react'
import TextImageBox from './TextImageBox'

export default class CuratedImagery extends React.Component  {
    constructor() {
        super()
        this.state = {
            curatedList: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const curatedItemText = this.refs.newCuratedItemText;
        const curatedItemCategory = this.refs.newCuratedItemCategory;
        const curatedImage = this.refs.newCuratedImageUrl;
        const newcuratedItem = {
            text: curatedItemText.value,
            category: curatedItemCategory.value,
            image: curatedImage.value
        }
        const newcuratedItemList = this.state.curatedList.concat(newcuratedItem)
        this.setState({curatedList: newcuratedItemList})
        
        curatedItemText.value = ''
        curatedItemCategory.value = ''
        curatedImage.value = ''
    }


    render() {
        const curatedList = this.state.curatedList.map(curatedItem => {
            return <TextImageBox key={curatedItem.text || curatedItem.image} text={curatedItem.text} image={curatedItem.image} />
        })

        const options = ['Life', 'Relationships', 'Motivation', 'Courage', 'Work/Grt']
            .sort()
            .map(option => {
                return <option value={option} key={option}>{option}</option>
            })
        
        return (
            <article>
                <h3>Curated List</h3>
                <form onSubmit={this.handleSubmit}>
                    <input ref="newCuratedItemText" placeholder="Add the famous saying..." />
                    <input ref="newCuratedImageUrl" placeholder="Url to an image..." />
                    <select ref="newCuratedItemCategory">
                        <option value="">--Please choose an option--</option>
                        {options}
                    </select>
                    <button type="submit">Add</button>
                </form>
                <article className="CuratedList-items">{curatedList}</article>
            </article>
        )
    }
}
