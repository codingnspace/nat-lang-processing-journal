import React from 'react'

export default class CuratedImagery extends React.Component  {
    constructor() {
        super()
        this.state = {
            curatedList: []
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const curatedItemCategory = this.refs.newCuratedItemCategory;
        const curatedImage = this.refs.newCuratedImageUrl;
        const newcuratedItem = {
            category: curatedItemCategory.value,
            image: curatedImage.value
        }
        const newcuratedItemList = this.state.curatedList.concat(newcuratedItem)
        this.setState({curatedList: newcuratedItemList})
        
        curatedItemCategory.value = ''
        curatedImage.value = ''
    }

    handleImageClick = (e) => {
        const target = e.target
        const imageContainer = e.target.closest('.Curated-Item')
        console.log(imageContainer, 'image container')
        imageContainer.classList.toggle('full-screen')
    }


    render() {
        const curatedList = this.state.curatedList.map(curatedItem => {
            return (
                <div className="Curated-Item">
                    <img src="https://via.placeholder.com/350x150" />
                </div>
            )
        })

        const options = ['Life', 'Relationships', 'Motivation', 'Courage', 'Work/Grit']
            .sort()
            .map(option => {
                return <option value={option} key={option}>{option}</option>
            })
        
        return (
            <article>
                <h3>Curated List</h3>
                <form onSubmit={this.handleSubmit}>
                    <input ref="newCuratedImageUrl" placeholder="Url to an image..." />
                    <select ref="newCuratedItemCategory">
                        <option value="">--Please choose an option--</option>
                        {options}
                    </select>
                    <button type="submit">Add</button>
                </form>
                <article className="CuratedList-items" onClick={this.handleImageClick}>
                    {curatedList}
                </article>
            </article>
        )
    }
}
