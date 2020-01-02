import React from 'react'
import List from './List'

export default class ShoppingList extends React.Component  {
    render() {
        const shoppingListOptions = ["Beverages", "Bread/Bakery", "Packaged Foods", "Diary",
        "Meat", "Produce", "Cleaners", "Paper Goods", "Personal Care", "Other"]
        
        return (
            <article>
                <List categoryOptions= {shoppingListOptions} title="Shopping List" type="shopping" />
            </article>
        )
    }
}
